/*
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/

const libreria = {
    librosLeidos: [],
    
    addLibro: function(mostrarLibros){
        this.librosLeidos.push({
            titulo: mostrarLibros,
            leido: false
        })
    },

    marcarLeido: function(tituloLibro){
    const libro = this.librosLeidos.find(libro => libro.titulo === tituloLibro)

    if(libro){
        libro.leido = true
    }
    },

    contarLeidos: function(){
    return this.librosLeidos.filter(libro => libro.leido === true).length
    },

    mostrarLibros: function(){
    this.librosLeidos.forEach(libro => {
        const item = document.createElement("li");
        item.textContent = `${libro.titulo} - ${libro.leido ? "Leído" : "No leído"}`;
        document.getElementById("lista-libros").appendChild(item);
    })
    },

    eliminarLibro: function(mostrarLibros) {
        this.librosLeidos = this.librosLeidos.filter(libro => libro !== mostrarLibros);
    },

    eliminarUno: function(mostrarLibros){
        const index = this.librosLeidos.findIndex(libro => libro.titulo === mostrarLibros);
        if(index !== -1){
            this.librosLeidos.splice(index, 1);
        }
    }
}

libreria.addLibro("EL GRAN LIBRO DE NODE.JS")
console.log(libreria.librosLeidos)
libreria.addLibro("EL GRAN LIBRO DE JAVASCRIPT")
libreria.addLibro("Web Development whit Node and Express")
libreria.addLibro("Programación Full-Stack: de Principiante a Experto en Desarrollo Web")
libreria.addLibro("HTML, CSS & JavaScript All-in-One For Dummies")
libreria.addLibro("Aprende HTML y CSS en un fin de semana (Aprende en un fin de semana)")
libreria.addLibro("JavaScript: The Definitive Guide")
libreria.addLibro("Eloquent JavaScript: A Modern Introduction to Programming")
libreria.addLibro("You Don't Know JS Yet: Get Started")
libreria.eliminarLibro("Eloquent JavaScript: A Modern Introduction to Programming")
libreria.addLibro("EL GRAN LIBRO DE NODE.JS")
libreria.eliminarUno("EL GRAN LIBRO DE NODE.JS")
libreria.addLibro("HTML, CSS & Javascript para niños")
libreria.addLibro("JavaScript: The Good Parts")
libreria.addLibro("JavaScript: The Good Parts")
libreria.eliminarUno("JavaScript: The Good Parts")
libreria.marcarLeido("EL GRAN LIBRO DE JAVASCRIPT")
libreria.marcarLeido("Web Development whit Node and Express")
libreria.marcarLeido("Programación Full-Stack: de Principiante a Experto en Desarrollo Web")
libreria.marcarLeido("JavaScript: The Good Parts")
libreria.eliminarUno("JavaScript: The Good Parts")
libreria.addLibro("EL GRAN LIBRO DE NODE.JS")
libreria.eliminarUno("EL GRAN LIBRO DE NODE.JS")
libreria.addLibro("EL GRAN LIBRO DE JAVASCRIPT")
libreria.eliminarUno("EL GRAN LIBRO DE JAVASCRIPT")
libreria.marcarLeido("EL GRAN LIBRO DE JAVASCRIPT")
libreria.marcarLeido("HTML, CSS & JavaScript All-in-One For Dummies")


console.log(libreria)
libreria.mostrarLibros()
console.log(libreria.librosLeidos)