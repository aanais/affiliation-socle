$(document).ready(function() {
    SquelFileBrowser = function (callback) {
        tinymce.activeEditor.windowManager.openUrl({
            title: 'Insérer une image',
            url: '/admin/media?tinymce=true',
            onClose() {
                // Recuperation du window.postMessage pour envoyer la src et l'alt de l'image choisie
                window.addEventListener('message', function (event) {
                    var data = event.data;
                    callback(data.src, {alt: data.alt});
                });
            }
        });

        return false
    };

    tinymceSettings = {
        height: 300,
        selector: "textarea.tinymce",
        plugins: "image  link code lists advlist paste",
        toolbar: "undo redo | styleselect | bold italic forecolor | alignleft alignright aligncenter alignjustify | bullist numlist link image | code outdent indent | ",
        theme: "silver",
        menubar: true,
        file_picker_callback: SquelFileBrowser,
        file_picker_types: 'file image media',
        relative_urls: false,
        remove_script_host: false,
        convert_urls: false,
        paste_as_text: true,
        branding: false,
        menubar:false,
        content_css: [
            '/dist/css/logsrc-customTinyMCE.css'
        ],
        style_formats: [
            { title: 'Bouton Custom', block: 'div', classes: 'custom_btn_1' },
        ],
        style_formats_merge: true
    };

    tinymce.init(tinymceSettings);
});
