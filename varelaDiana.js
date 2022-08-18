class Usuario {
    constructor ( name, lastname, books, pets) {
        this.nombre = name
        this.apellido = lastname
        this.libros = books
        this.mascotas = pets
    }

    getFullName (){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota (mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre:nombre, autor:autor})
    }
    
    getBooksNames(){
        return this.libros.map(e=>e.nombre)
    }

}

const user1 = new Usuario ("Alberto", "León", [{nombre:"Cien años de soledad", autor:"Gabriel García Marquez"}], ["Perro", "Gato"])

console.log("Usuario: " ,user1.getFullName());
user1.addMascota("Jirafa")
console.log("Mascotas: ", user1.mascotas);
console.log("Cantidad de mascotas que tiene el usuario: ", user1.countMascotas());
user1.addBook("Inquebrantables","Daniel Habif")
console.log("Libros del usuario: ", user1.getBooksNames());