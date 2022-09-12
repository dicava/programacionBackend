const fs  = require('fs')

class Contenedor {
    constructor (name){
        this.name = name
    }

    async Save(informacion){
        let id
        try{
            let contenido = await fs.promises.readFile( `./${this.name}`,'utf-8' )
            let contenidoJson = JSON.parse(contenido)
            let ultimoIndice = contenidoJson.length - 1
            let ultimoId = contenidoJson[ultimoIndice].id
            informacion.id = ultimoId + 1
            let id = informacion.id
            contenidoJson.push(informacion)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify (contenidoJson) )
            return id

           // console.log(id)
        }
        catch(error){
            console.log(error)
        }

        return id    

    }

    async GetById(id){
        try {
            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let contenidoExtraidoArray 

            contenidoJson.forEach(element => {
                if(element.id == id){
                    contenidoExtraidoArray = element
                }
                
            });
            return contenidoExtraidoArray

        }
        catch(error){
            console.log(error)
        }

    }

    async GetAll(){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido)
            return contenidoJson

        }
        catch (error){

        }
        
    }

    async DeleteById(id){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let nuevoContenido = contenidoJson.filter( 
                (element)=> element.id !== id
            );
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(nuevoContenido)
            );
            
        }
        catch (error){

        }


    }

    async DeleteAll(){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let nuevoContenido =[]
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(nuevoContenido)
            );
           
            
            
        }
        catch (error){

        }

    }
        

}

let contenedor = new Contenedor("productos.json")

let informacionNueva = {
    "id":1,
    "title": "Regla",
    "price": 100.9
}

console.log(contenedor.Save(informacionNueva).then(respuestaDeLaPromesa => {
    console.log(respuestaDeLaPromesa)
}))



/*contenedor.GetById(2).then(result => {
    console.log(result)
})
*/

/*contenedor.GetAll().then(result => {
    console.log(result)
})
*/

/*contenedor.DeleteById(2).then(result => {
    console.log(result)
})
*/

/*contenedor.DeleteAll().then(result => {
    console.log(result)
})
*/