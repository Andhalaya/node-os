const osModule = require('./osModule');
const networkModule = require('./networkModule');
const osInfo = osModule.getOSInfo();

const networkInfo = networkModule.getNetworkInfo();

console.log('Información del Sistema Operativo:');
console.log('---------------------------------');
console.log('Nombre:', osInfo.name);
console.log('Tipo:', osInfo.type);
console.log('Versión:', osInfo.version);
console.log('Arquitectura:', osInfo.architecture);
console.log('CPUs:', osInfo.cpus);
console.log('Memoria Total:', osInfo.totalMemory);
console.log('Memoria Libre:', osInfo.freeMemory);
console.log('\nInformación de Interfaces de Red:');
console.log('---------------------------------');
networkInfo.forEach((iface) => {
  console.log('Interfaz:', iface.interface);
  console.log('Familia:', iface.family);
  console.log('Dirección:', iface.address);
  console.log('Interno:', iface.internal);
  console.log('---------------------------------');
});