Npm.depends({
    'csv': '0.4.0',
    'oauth': '0.9.12',
    'googleapis': '1.0.13'
});

Package.on_use(function (api) {
    api.add_files('import.js', 'server');
});
