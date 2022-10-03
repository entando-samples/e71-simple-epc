if (process.env.NODE_ENV === 'production') {
    // let publicpath = window.entando?.widgets['simple-mfe']?.basePath;
    // if (publicpath && publicpath.slice(-1) !== '/') {
    //     publicpath = `${publicpath}/`;
    // }
    // Hardcoded workaround since window.entando.widgets[].basePath isn't available for 7.1.0
    // if (!publicpath) {
    let publicpath = '/entando-de-app/cmsresources/bundles/e71-simple-epc-9bcfff02/widgets/simple-mfe-9bcfff02/'
    // }
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = publicpath || './';
}