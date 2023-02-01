
export function agregar(personaje) {
    console.log("agregando",personaje)
    return {
        type:'AGREGAR',
        payload: personaje
    }
}


export function eliminar(id){
    return {
        type:'ELIMINAR',
        payload:id
    }
}