
const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');


let listadoPorHacer = [];

const guardarDB = ()=>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) =>{
        if (err) throw new Error ('No se pudo grabar', err);
    });

}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer=[];
    }
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index>= 0) {
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else {
        return false;
    }

}

const borrar = ( descripcion ) => {
    cargarDB();
    let listadoTemp=[];
    let estado= false;

    for (let tarea of listadoPorHacer) {
        if(tarea.descripcion!==descripcion)
            listadoTemp.push(tarea);
        else
            estado=true;
    }
    listadoPorHacer=listadoTemp;

    //let listadoTemp= listadoPorHacer.filter(tarea => tarea.descripcion!== descripcion);
    guardarDB();
    return estado;
}



module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}