
/**
 * Variable de tipo string la cual usando objetos de tipo comida muestra en pantalla los mismos 
 * los objetos tienen atruvutos (nombre, costo, id)
 * tambien puede modificarse para añadir o quitar objetos
 */

let menu= [ 
    {
        nombre: "Hamburgesa",
        costo: 10000,
        id: 1
    },
    {
        nombre: "Perro Caliente",
        costo: 8000,
        id: 2
    },
    {
        nombre: "Papas fritas",
        costo: 5000,
        id: 3
    },
    {
        nombre: "Gaseosa",
        costo: 2000,
        id: 4
    },
    {
        nombre: "Pizza",
        costo: 3500,
        id: 5
    }
]

/**
 * Funcion que imprime menu usando un for que recorre el string
 */
const show_menu = () =>{
    for(let comida of menu){
        console.log(`${comida.nombre} - precio ${comida.costo}- id ${comida.id}`)
    }
}
//Arrow function para añadir objetos al menu/
const editar_añadir = (nombre, costo) =>{
    //Toma el numero de objetos en el string para asi añadirlo al ultimo espacio y obtener el atributo id del objeto /
    let pocision = menu.length
    //Añade el objeto /
    menu.push({
        nombre:nombre,
        costo:costo,
        id:pocision+1
    })
}

//Arrow function elimina uno de los elementos segun el id   /
const editar_eliminar = (id) =>{
    //El metodo splice remueve un elemento teniendo en cuenta el id del mismo y que el segundo atributo es la cantidad de elementos a remover /
    let remover = menu.splice(id,1)
    console.log(menu)
} 

//prueba para ver si sí funciona/
editar_añadir("Helado",2000)
console.log(show_menu())
editar_eliminar(2)



