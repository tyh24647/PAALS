var headerCartHelper = (function () {
    'use strict';

    var view = window.view || {};

    function headerCartLoaderJsLoaded() {
        let headerCartLoaderScriptTag = document.querySelector("script[src$='header-cart-loader.js']");
        if(headerCartLoaderScriptTag) return true;
        console.log('Unable to find header-cart-loader.js script tag on page');
        return false;
    }

    function headerCartAssetsLoaded() {
        if(window && window.px && window.px.buildAssets) return true;
        console.log('Unable to find window.px assets on page');
        return false;
    }

    function isHeaderCartLoaded() {
        return headerCartLoaderJsLoaded() && headerCartAssetsLoaded();
    }

    function setupEventListeners() {
        // Captures error events that might occur while attempting to load the header cart and displays each error in the console
        // The errors usually originate from the header-cart-loader.js file which contains the logic necessary for loading
        // the window.px.buildAssets object in the DOM.
        // See: https://github.com/gdcorp-site/px-checkout-react/blob/master/HEADER_CART.md#error
        document.addEventListener('px.headerCart.error', (event) => {
            console.log('Header cart error: ' + event.detail);
        })

        // If the customer purchases the product, we log an event to Eleos.
        // See: https://github.secureserver.net/PX/header-cart#purchase
        document.addEventListener('px.headerCart.purchase', (event) => {

        });

        // The px.HeaderCart.ready event listener must be set before the header-cart-loader.js file is loaded. Otherwise, the ready event
        // will be missed.
        // See: https://github.com/gdcorp-site/px-checkout-react/blob/master/HEADER_CART.md#step-2-listen-for-the-ready-event
        const enableHeaderCartEvent = new CustomEvent('px.headerCart.enable', { detail: { appKey: 'pki-ssl' }});
        document.addEventListener('px.headerCart.ready', (event) => {
            document.dispatchEvent(enableHeaderCartEvent);
        });

        // Enabling the purchase event is mandatory if there is an event listener for the 'px.headerCart.purchase' event. We must wait
        // until the header cart has been mounted before firing this event.
        // See: https://github.com/gdcorp-site/px-checkout-react/blob/master/HEADER_CART.md#step-3-listen-for-the-mounted-event
        // See: https://github.secureserver.net/PX/header-cart#enablepurchase
        const enablePurchaseEvent = new CustomEvent('px.headerCart.props', { detail: { enablePurchase: true }});
        document.addEventListener('px.headerCart.mounted', (event) => {
            document.dispatchEvent(enablePurchaseEvent);
        });
    }

    function openHeaderCart() {
        const openHeaderCart = new Event('px.headerCart.open');
        document.dispatchEvent(openHeaderCart);
    }

    function addToHeaderCart() {
        const addHeaderCartEvent = new Event('px.headerCart.add');
        document.dispatchEvent(addHeaderCartEvent);
    }

    function refreshCart() {
        const refreshEvent = new Event('px.headerCart.refresh');
        document.dispatchEvent(refreshEvent);
    }

    // Methods to export
    return {
        addToHeaderCart: addToHeaderCart,
        isHeaderCartLoaded: isHeaderCartLoaded,
        openHeaderCart: openHeaderCart,
        setupEventListeners: setupEventListeners,
        refreshCart: refreshCart
    }

})();
