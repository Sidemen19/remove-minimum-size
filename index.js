const { remote } = require('electron');
const { Plugin } = require('powercord/entities');

class RemoveMinimumSize extends Plugin {
    startPlugin() {
        remote.getCurrentWindow().setMinimumSize(1, 1);
    }

    pluginWillUnload() {
        remote.getCurrentWindow().setMinimumSize(940, 500);
    }
}

module.exports = RemoveMinimumSize;