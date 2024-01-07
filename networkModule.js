const os = require('node:os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const result = [];

  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];

    for (const iface of interfaces) {
      const networkData = {
        interface: interfaceName,
        family: iface.family,
        address: iface.address,
        internal: iface.internal,
      };

      result.push(networkData);
    }
  }

  return result;
}

module.exports = {
  getNetworkInfo,
};