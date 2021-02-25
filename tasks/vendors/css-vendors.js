module.exports = [
    {
        name: 'admin/admin_vendors.css',
        files: [
            'node_modules/admin-lte/plugins/select2/css/select2.min.css',
            'node_modules/admin-lte/dist/css/adminlte.min.css',
            'node_modules/chart.js/dist/Chart.min.css'
        ]

    },
    {
        name: 'base-vendors.css',
        files: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
            'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
            'node_modules/cookieconsent/build/cookieconsent.min.css'
        ]
    },
    {
        name: 'tinymceSkins',
        path: 'node_modules/tinymce/skins/content/dark/**/*'
    }
];
