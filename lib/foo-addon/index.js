/* eslint-env node */
'use strict';

module.exports = {
  name: 'foo-addon',

  isDevelopingAddon: function() {
    return true;
  },

  treeForAddon(tree) {
    const addon = this.addons.find(addon => addon.name === 'ember-cli-babel');

    return addon.transpileTree(tree);
  }
};
