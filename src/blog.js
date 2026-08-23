document.addEventListener("DOMContentLoaded", () => {
    let idContBlog = 'blogGrid';
    const contenedor = document.getElementById(idContBlog);

    // DATOS DESDE VARIABLES DE ENTORNO (VITE)
    const usuarioGit = import.meta.env.VITE_GITHUB_USER;
    const repositorioGit = import.meta.env.VITE_GITHUB_REPO;
    const tokenGit = import.meta.env.VITE_GITHUB_TOKEN;

    // URL DE LA API DE GITHUB
    const apiUrl = `https://api.github.com/repos/${usuarioGit}/${repositorioGit}/contents/blog`;
    console.log("Consultando:", apiUrl);

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
        .then(archivos => {
            // Verificar que sea un array (la API devuelve objeto si hay error)
            if (!Array.isArray(archivos)) {
                console.error("Respuesta inesperada de GitHub:", archivos);
                contenedor.innerHTML = "<p>No se encontraron artículos en el repositorio.</p>";
                return;
            }

            // Filtrar solo archivos .md
            const archivosMd = archivos.filter(archivo => archivo.name && archivo.name.endsWith('.md'));

            if (archivosMd.length === 0) {
                contenedor.innerHTML = "<p>Próximamente publicaremos nuestros primeros artículos legales.</p>";
                return;
            }

            contenedor.innerHTML = "";

            archivosMd.forEach(archivo => {
                const slug = archivo.name.replace('.md', '');

                // Usar API autenticada en lugar de download_url (no funciona para repos privados)
                fetch(`https://api.github.com/repos/${usuarioGit}/${repositorioGit}/contents/blog/${archivo.name}`, {
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
                        console.info(datos);
                        const card = document.createElement("div")

                        let fecha = datos.date ? new Date(datos.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
                        card.className = 'blog-card';
                        card.innerHTML = `
                            <div class="blog-card-img">
                                <img src="${datos.image}" alt="${datos.title}" loading="lazy">
                            </div>
                            <div class="blog-card-body">
                                <span class="blog-card-categoria">${datos.category}</span>
                                <h3>${datos.title}</h3>
                                <p>${datos.description}</p>
                                <div class="blog-card-footer">
                                    <span class="blog-card-fecha"><i class="far fa-calendar-alt"></i> ${fecha}</span>
                                    <a href="/blog/articulo.html?id=${slug}" class="blog-card-link" target="_blank">Leer más <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        `;


                        // card.className = "tarjeta-post";
                        // card.innerHTML = `
                        //     ${datos.image ? `<img src="${datos.image}" alt="${datos.title}" style="max-width:100%;">` : ''}
                        //     <span class="etiqueta-categoria">${datos.category || 'Derecho'}</span>
                        //     <h3>${datos.title}</h3>
                        //     <p>${datos.description}</p>
                        //     <a href="/blog/articulo.html?id=${slug}" class="btn-leer">Leer artículo completo</a>
                        // `;

                        contenedor.appendChild(card);
                    })
                    .catch(err => {
                        console.error(`Error con archivo ${archivo.name}:`, err);
                    });
            });
        })
        .catch(err => {
            console.error("Error consultando GitHub:", err);
            contenedor.innerHTML = `<p>Error al cargar los artículos: ${err.message}</p>`;
        });
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
