document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('blogGrid');
    const inputBusqueda = document.getElementById('blogSearchInput');
    const contenedorPaginacion = document.getElementById('blogPagination');

    if (!contenedor) return;

    // DATOS DESDE VARIABLES DE ENTORNO (VITE)
    const usuarioGit = import.meta.env.VITE_GITHUB_USER;
    const repositorioGit = import.meta.env.VITE_GITHUB_REPO;
    const tokenGit = import.meta.env.VITE_GITHUB_TOKEN;

    // URL DE LA API DE GITHUB
    const apiUrl = `https://api.github.com/repos/${usuarioGit}/${repositorioGit}/contents/blog`;

    let todosLosArticulos = [];
    let queryBusqueda = "";
    let paginaActual = 1;
    const articulosPorPagina = 6;

    // Inicializar la carga de artículos
    inicializarBlog();

    function inicializarBlog() {
        contenedor.innerHTML = "<p class='blog-no-results'>Cargando artículos...</p>";

        fetch(apiUrl, {
            headers: {
                'Authorization': `token ${tokenGit}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(errData => {
                        throw new Error(`GitHub API error ${res.status}: ${errData.message}`);
                    });
                }
                return res.json();
            })
            .then(async archivos => {
                if (!Array.isArray(archivos)) {
                    console.error("Respuesta inesperada de GitHub:", archivos);
                    contenedor.innerHTML = "<p class='blog-no-results'>No se encontraron artículos en el repositorio.</p>";
                    return;
                }

                // Filtrar solo archivos .md
                const archivosMd = archivos.filter(archivo => archivo.name && archivo.name.endsWith('.md'));

                if (archivosMd.length === 0) {
                    contenedor.innerHTML = "<p class='blog-no-results'>Próximamente publicaremos nuestros primeros artículos legales.</p>";
                    return;
                }

                // Descargar el contenido de todos los archivos .md en paralelo
                const promesasCarga = archivosMd.map(archivo => {
                    const slug = archivo.name.replace('.md', '');
                    return fetch(`https://api.github.com/repos/${usuarioGit}/${repositorioGit}/contents/blog/${archivo.name}`, {
                        headers: {
                            'Authorization': `token ${tokenGit}`
                        }
                    })
                        .then(response => {
                            if (!response.ok) throw new Error(`Error descargando ${archivo.name}`);
                            return response.json();
                        })
                        .then(data => {
                            const textoMarkdown = decodeURIComponent(escape(atob(data.content)));
                            const datos = parsearMarkdown(textoMarkdown);

                            // Intentar extraer una fecha para ordenar. 
                            // Puede ser del frontmatter (datos.date) o del nombre del archivo si tiene formato YYYY-MM-DD-nombre.md
                            let fechaOriginal = datos.date || "";
                            let fechaObj = new Date();

                            if (fechaOriginal) {
                                fechaObj = new Date(fechaOriginal);
                            } else {
                                // Tratar de buscar fecha en el nombre del archivo (ej. 2026-06-11-...)
                                const matchFecha = archivo.name.match(/^(\d{4}-\d{2}-\d{2})/);
                                if (matchFecha) {
                                    fechaObj = new Date(matchFecha[1]);
                                }
                            }

                            return {
                                slug: slug,
                                filename: archivo.name,
                                title: datos.title || "Artículo Legal",
                                description: datos.description || "Haga clic en leer más para ver el contenido completo.",
                                category: datos.category || "General",
                                image: datos.image || "/images/blog-placeholder.jpg",
                                date: fechaOriginal || fechaObj.toISOString().split('T')[0],
                                dateObj: fechaObj,
                                textoCompleto: textoMarkdown
                            };
                        })
                        .catch(err => {
                            console.error(`Error con archivo ${archivo.name}:`, err);
                            return null;
                        });
                });

                const resultados = await Promise.all(promesasCarga);
                // Filtrar errores (nulos) y ordenar por fecha de forma descendente (más nuevos primero)
                todosLosArticulos = resultados
                    .filter(art => art !== null)
                    .sort((a, b) => b.dateObj - a.dateObj);

                actualizarVista();
                configurarBuscador();
            })
            .catch(err => {
                console.error("Error consultando GitHub:", err);
                contenedor.innerHTML = `<p class='blog-no-results'>Error al cargar los artículos: ${err.message}</p>`;
            });
    }

    function configurarBuscador() {
        if (!inputBusqueda) return;

        inputBusqueda.addEventListener("input", (e) => {
            queryBusqueda = normalizarTexto(e.target.value);
            paginaActual = 1; // Volver a la primera página al buscar
            actualizarVista();
        });
    }

    function obtenerArticulosFiltrados() {
        if (!queryBusqueda) return todosLosArticulos;

        return todosLosArticulos.filter(art => {
            return (
                normalizarTexto(art.title).includes(queryBusqueda) ||
                normalizarTexto(art.description).includes(queryBusqueda) ||
                normalizarTexto(art.category).includes(queryBusqueda) ||
                normalizarTexto(art.textoCompleto).includes(queryBusqueda)
            );
        });
    }

    function renderizarArticulos(articulos) {
        contenedor.innerHTML = "";

        if (articulos.length === 0) {
            contenedor.innerHTML = "<p class='blog-no-results'>No se encontraron artículos que coincidan con la búsqueda.</p>";
            return;
        }

        // Paginación: obtener solo el rango correspondiente
        const indiceInicio = (paginaActual - 1) * articulosPorPagina;
        const indiceFin = indiceInicio + articulosPorPagina;
        const articulosPagina = articulos.slice(indiceInicio, indiceFin);

        articulosPagina.forEach((art, index) => {
            const card = document.createElement("div");
            card.className = 'blog-card fade-in-entry';
            card.style.animationDelay = `${index * 100}ms`; // Delay escalonado de 100ms entre artículos

            let fechaFormateada = art.dateObj ? art.dateObj.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }) : '';

            card.innerHTML = `
                <div class="blog-card-img">
                    <img src="${art.image}" alt="${art.title}" loading="lazy">
                </div>
                <div class="blog-card-body">
                    <span class="blog-card-categoria">${art.category}</span>
                    <h3>${art.title}</h3>
                    <p>${art.description}</p>
                    <div class="blog-card-footer">
                        <span class="blog-card-fecha"><i class="far fa-calendar-alt"></i> ${fechaFormateada}</span>
                        <a href="/blog/articulo.html?id=${art.slug}" class="blog-card-link" target="_blank">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    function renderizarPaginacion(totalArticulos) {
        if (!contenedorPaginacion) return;
        contenedorPaginacion.innerHTML = "";

        const totalPaginas = Math.ceil(totalArticulos / articulosPorPagina);

        // Si no hay páginas o es solo 1 página, ocultamos los controles
        if (totalPaginas <= 1) {
            contenedorPaginacion.style.display = "none";
            return;
        }

        contenedorPaginacion.style.display = "flex";

        // Botón Anterior
        const btnAnterior = document.createElement("button");
        btnAnterior.className = "blog-pagination-btn";
        btnAnterior.innerHTML = '<i class="fas fa-chevron-left"></i>';
        btnAnterior.disabled = paginaActual === 1;
        btnAnterior.addEventListener("click", () => {
            if (paginaActual > 1) {
                paginaActual--;
                actualizarVista(false);
                hacerScrollAlBlog();
            }
        });
        contenedorPaginacion.appendChild(btnAnterior);

        // Números de páginas
        for (let i = 1; i <= totalPaginas; i++) {
            const btnPagina = document.createElement("button");
            btnPagina.className = `blog-pagination-btn ${paginaActual === i ? 'active' : ''}`;
            btnPagina.innerText = i;
            btnPagina.addEventListener("click", () => {
                if (paginaActual !== i) {
                    paginaActual = i;
                    actualizarVista(false);
                    hacerScrollAlBlog();
                }
            });
            contenedorPaginacion.appendChild(btnPagina);
        }

        // Botón Siguiente
        const btnSiguiente = document.createElement("button");
        btnSiguiente.className = "blog-pagination-btn";
        btnSiguiente.innerHTML = '<i class="fas fa-chevron-right"></i>';
        btnSiguiente.disabled = paginaActual === totalPaginas;
        btnSiguiente.addEventListener("click", () => {
            if (paginaActual < totalPaginas) {
                paginaActual++;
                actualizarVista(false);
                hacerScrollAlBlog();
            }
        });
        contenedorPaginacion.appendChild(btnSiguiente);
    }

    function hacerScrollAlBlog() {
        const seccionBlog = document.getElementById("blog");
        if (seccionBlog) {
            // Altura aproximada del header fijo para evitar que tape el contenido
            const headerHeight = 90;
            const elementoPos = seccionBlog.getBoundingClientRect().top + window.scrollY;
            const offsetPos = elementoPos - headerHeight;

            window.scrollTo({
                top: offsetPos,
                behavior: 'smooth'
            });
        }
    }

    function actualizarVista(resetearPagina = false) {
        if (resetearPagina) {
            paginaActual = 1;
        }
        const filtrados = obtenerArticulosFiltrados();
        renderizarArticulos(filtrados);
        renderizarPaginacion(filtrados.length);
    }
});

// Función indispensable para que el script pueda leer las cabeceras de los archivos .md
function parsearMarkdown(texto) {
    const lineas = texto.split("\n");
    const metadatos = {};
    let esMetadata = false;
    lineas.forEach(linea => {
        if (linea.trim() === "---") { esMetadata = !esMetadata; return; }
        if (esMetadata) {
            const partes = linea.split(":");
            if (partes.length >= 2) {
                metadatos[partes[0].trim()] = partes.slice(1).join(":").trim().replace(/^"|"$/g, '');
            }
        }
    });
    return metadatos;
}

// Remueve mayúsculas, espacios extra y tildes/diacríticos de un texto para facilitar la búsqueda
function normalizarTexto(texto) {
    if (!texto) return "";
    return texto
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
