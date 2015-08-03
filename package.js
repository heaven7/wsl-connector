Package.describe({
  name: 'heaven7:wsl-connector',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Package-Integration for wsl-* packages.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/heaven7/wsl-connector.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
      'lib/both/wsl-locations/register.js',
      'lib/both/wsl-items/register.js',
      'lib/both/wsl-connector.js'
  ], both);

  api.use([
      'heaven7:wsl-core@0.0.1',
      'heaven7:wsl-locations@0.0.1'
  ], both);

});

