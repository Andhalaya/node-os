const os = require('node:os');

function getOSInfo() {
  return {
    name: os.type(),
    type: os.type(),
    version: os.version(),
    architecture: os.arch(),
    cpus: os.cpus().length,
    totalMemory: formatBytes(os.totalmem()),
    freeMemory: formatBytes(os.freemem()),
  };
}

function formatBytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

module.exports = {
  getOSInfo,
};