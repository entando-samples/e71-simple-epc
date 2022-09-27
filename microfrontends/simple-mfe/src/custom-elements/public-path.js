if (process.env.NODE_ENV === 'production') {
    // let publicpath = window.entando?.widgets['simple-mfe']?.basePath;
    // if (publicpath && publicpath.slice(-1) !== '/') {
    //     publicpath = `${publicpath}/`;
    // }
    // Hardcoded workaround since window.entando.widgets[].basePath isn't available for 7.1.0
    // if (!publicpath) {
    let publicpath = '/entando-de-app/cmsresources/bundles/20220925-simple-epc-2eecfd1b/widgets/simple-mfe-2eecfd1b/'
    // }
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = publicpath || './';
}