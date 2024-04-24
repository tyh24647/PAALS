/*exported overlayHelper */

var overlayHelper = (function () {

'use strict';

var isMessageOverlayClassAvailable = ux.MessageOverlay || {};
var overlayElm = document.getElementById('ux-overlay-container');

function showLoadingModal(message) {
	if(isMessageOverlayClassAvailable) {
		if (!message) {
			message = view.i18n.loading;
		}
		var sfMsgOverlay = ux.React.createElement(ux.MessageOverlay, {show: true},
			ux.React.createElement(ux.Spinner, {size: 'sm'}), ux.React.createElement('span', {className: "ux-message-overlay-content-text"}, message));
		overlayElm.classList.add("ux-overlay-fade");
		ux.ReactDOM.render(sfMsgOverlay, overlayElm);
	}
}

function hideLoadingModal() {
	if(isMessageOverlayClassAvailable) {
		overlayElm.classList.remove("ux-overlay-fade");
		ux.ReactDOM.unmountComponentAtNode(overlayElm);
	}
}

// Methods to export
return {
	showLoadingModal: showLoadingModal,
	hideLoadingModal: hideLoadingModal
}

})();