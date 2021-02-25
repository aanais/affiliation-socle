module.exports = [
    {
        name: 'admin/admin_vendors.js',
        files: [
            'node_modules/admin-lte/dist/js/adminlte.min.js',
            'node_modules/tinymce/tinymce.js',
            'node_modules/admin-lte/plugins/select2/js/select2.min.js',
            'node_modules/jquery-ui-dist/jquery-ui.min.js',
            'node_modules/chart.js/dist/Chart.min.js'

        ]
    },
    {
        name: 'admin/bootstrap.min.js',
        files: [
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ]
    },
    {
        name: 'bugsnag.min.js',
        files: [
            'node_modules/@bugsnag/browser/dist/bugsnag.min.js'
        ]
    },
    {
        name: 'js-cookie.js',
        files: [
            'node_modules/js-cookie/src/js.cookie.js'
        ]
    },
    {
        name: 'jscroll.js',
        files: [
            'node_modules/jscroll/jquery.jscroll.js'
        ]
    },
    {
        name: 'bowser.js',
        files: [
            'node_modules/bowser/bowser.min.js'
        ]
    },
    {
        name: 'jquery.js',
        files: [
            'node_modules/jquery/dist/jquery.min.js'
        ]
    },
    {
        name: 'jquery-ui.js',
        files: [
            'node_modules/jquery-ui-dist/jquery-ui.min.js'
        ]
    },
    {
        name: 'owlcarousel.js',
        files: [
            'node_modules/owl.carousel/dist/owl.carousel.min.js'
        ]
    },
    {
        name: 'admin/plugins',
        path: 'node_modules/tinymce/plugins/**/*'
    },
    {
        name: 'admin/themes',
        path: 'node_modules/tinymce/themes/**/*'
    },
    {
        name: 'admin/skins',
        path: 'node_modules/tinymce/skins/**/*'
    },
    {
        name: 'cookieconsent.js',
        files: ['node_modules/cookieconsent/build/cookieconsent.min.js']
    }
];
