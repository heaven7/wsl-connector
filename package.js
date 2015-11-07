Package.describe({
  name: 'heaven7:wsl-connector',
  version: '0.0.2',
  summary: 'Package-Integration for wsl-* packages.',
  git: 'https://github.com/heaven7/wsl-connector.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
  api.versionsFrom('1.2');

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

