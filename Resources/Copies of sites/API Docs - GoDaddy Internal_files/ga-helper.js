/*global gtag:false */
/*exported trackEvent */
var trackEvent = (function () {
	'use strict';

    function trackEvent(category, action) {
        if (typeof gtag === 'undefined') {
            return; // can't track when tracking isn't loaded
        }
        gtag('event', action, {
              'event_category': category
            });
    }

	function clickFn(e) {
		var data = e.currentTarget.dataset;
		if (data && data.category && data.action) {
			trackEvent(data.category, data.action);
		}
	}

	function mouseEnterFn(e) {
		var data = e.currentTarget.dataset;
		if (data && data.category && data.action) {
			trackEvent(data.category, data.action);
		}
	}

	// only track these specifically tagged things
	$(document).on('click', '.ga_track_click', clickFn);
	$(document).on('mouseenter', '.ga_track_hover', mouseEnterFn);

	return trackEvent;
}());
