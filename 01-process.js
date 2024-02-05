'use strict'

function singleThread(){
process.argv[2] = 'Estamos aprendiendo node.js cabesa';
process.argv[3] = 19;
process.argv[4] = null;
process.argv[5] = true;

console.log('-------------------------------------------')
console.log('           EL PROCESO DE NODE.JS           ')
console.log('Id del proceso ..............' + process.pid)
console.log('Título ......................' + process.title)
console.log('Directorio de Node ..........' + process.execPath)
console.log('Directorio Actual ...........' + process.cwd())
console.log('Version de Node .............' + process.version)
console.log('Versiones Dependencias ......' + process.versions)
console.log('Plataforma (5.0.) ...........' + process.platform)
console.log('Arquitectura (5.0.) .........' + process.arch)
console.log('Tiempo activo de Node .......' + process.uptime())
console.log('Argumentos del proceso ......' + process.argv)
console.log('-------------------------------------------')

let key = 0
for (key in process.argv){
    console.log(process.argv[key]);
}
}

singleThread();