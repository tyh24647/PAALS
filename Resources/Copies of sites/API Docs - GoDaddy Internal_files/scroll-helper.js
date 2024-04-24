/*exported alertHelper */

// Module pattern
var scrollHelper = (function () {

'use strict';

function scrollToElementIfNotInView(elem) {
	if (!isElementInView(elem)) {
		scrollToElement(elem);
	}
}

function showElementTop(elem) {
	elem.show();
	scrollToElement(elem);
}

function isElementInView(elem) {
	var elementTop = elem.offset().top;
	var elementBottom = elementTop + elem.outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom && elementTop >= viewportTop;
}

function scrollToElement(elem) {
    $('html, body').stop().animate({
        scrollTop: elem.offset().top
    }, 500);
}

// Methods to export
return {
	scrollToElementIfNotInView: scrollToElementIfNotInView,
	showElementTop: showElementTop
}

})();