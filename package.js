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

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/server/wsl-connector.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('heaven7:wsl-connector');
  api.addFiles('wsl-connector-tests.js');
});
