
const descripcion = {
    demand: true,
    alias : 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    alias : 'c',
    default : true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer',
    {
        descripcion

    })
    .command('actualizar','actualizar el estado completado de una tarea',
    {
        descripcion : descripcion,
        completado
    })
    .command('borrar','borrar tareas',
    {
        descripcion : descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

