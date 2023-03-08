const dev = document.getElementById("dev")
const parrafodev = document.getElementById("parrafodev")

dev.addEventListener('click', () => {
  if (!parrafodev.innerHTML.length) {
    parrafodev.innerHTML = `
    Diseñé y desarrollé sitios web utilizando HTML, CSS y JavaScript para clientes en una variedad de industrias, incluyendo educación, tecnología y turismo.
    <br><br>
    Trabajé en equipo con diseñadores gráficos y otros desarrolladores para asegurar que los sitios web cumplen con los estándares de calidad y funcionalidad.
    <br><br>
    Implementé prácticas de optimización de SEO y de rendimiento para mejorar la visibilidad y velocidad de los sitios web. 
    `
    dev.innerHTML = `Desarrollador Web <i class="bi bi-chevron-double-up"></i>`
  }
  else{
    parrafodev.innerHTML = ""
    dev.innerHTML = `Desarrollador Web <i class="bi bi-chevron-double-down"></i>`
  }
})

const dev2 = document.getElementById("dev2")
const parrafodev2 = document.getElementById("parrafodev2")

dev2.addEventListener('click', () => {
  if (!parrafodev2.innerHTML.length) {
    parrafodev2.innerHTML = `
    Desarrollo de sitios web usando HTML, CSS y JavaScript.
    <br><br>
    Trabajo en equipo para crear sitios web de alta calidad.
    <br><br>
    Ayuda en la resolución de problemas técnicos y en la identificación de errores en el código.
    <br><br>
    Colaboración con diseñadores para crear prototipos de sitios web.
    `
    dev2.innerHTML = `Desarrollador Web junior <i class="bi bi-chevron-double-up"></i>`
  }
  else{
    parrafodev2.innerHTML = ""
    dev2.innerHTML = `Desarrollador Web junior <i class="bi bi-chevron-double-down"></i>`
  }
})