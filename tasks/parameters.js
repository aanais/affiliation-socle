module.exports = {
    withoutVendors: process.argv.includes('--without-vendors'),
    withoutImages: process.argv.includes('--without-images'),
    withoutVue: process.argv.includes('--without-vue'),
    isGlobal: true,
    debug: process.argv.includes('--debug'),
    isWebP: process.argv.includes('--webp'),
}
