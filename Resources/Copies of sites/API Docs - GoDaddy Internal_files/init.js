;(function () {
	'use strict';
	
	// Did they block ga with adblock?
	if (!window.trackEvent) {
		window.trackEvent = function () {};
	}

	// https://gist.github.com/2428561
	var urlParser = document.createElement('a');
	var getLocalUrl = function (url) {
		var results;
		if (url) {
			try {
				urlParser.href = url;
				if (urlParser.hostname) {
					// Only if a valid url
					if (urlParser.hostname === window.location.hostname) {
						// Only if url is in the same domain as the current page
						results = urlParser.pathname + urlParser.search + urlParser.hash;
					}
				}
			} catch (err) {
				// FRAGILE: ASSUME: Failure to parse url isn't a deal breaker here
				results = null;
			}
		}
		return results;
	};

	$.log.url = '/log';
	$.logAjax({
		filter: function (args) {
			if (args && args.log && args.log.ex) {
				if (args.log.ex.status === 401) {
					// Need to login then come back
					window.location.href = '/error/401?path='+encodeURIComponent(getLocalUrl(window.location.href));
					return false;
				}
				if (args.log.ex.status === 403) {
					window.location.href = window.location.href; // refresh to get a new csrf
					return false;
				}
			}
			return true;
		}
	}); // Hook $.ajax error
	// FRAGILE: stop logging browser errors temporarily // $.logBrowser(); // Hook browser's window.onerror
	$.logAlert = function () {
		// hide loading message
		var loading = $(document.body);
		if (loading && loading.sfMsgOverlay) {
			//loading.sfMsgOverlay({message: null});
		}

		// You can debug in-browser errors by setting break points here and analyzing arguments
		// TODO: how to tell the user something bad happened?
	};

	// send CSRF header on all AJAX
	// http://stackoverflow.com/a/18041849/702931
	var setCSRFToken = function(securityToken) {
		$.ajaxPrefilter(function(options, _, xhr) {
			if (!xhr.crossDomain) {
				xhr.setRequestHeader('X-CSRF-Token', securityToken);
			}
		});
	};
	setCSRFToken($('meta[name="csrf-token"]').attr('content'));

	$('a[data-locale-value]').click(function (e) {
		if (e.button !== 0) {
			return; // not left-click
		}
		var val = $(this).data('locale-value');
		if (val) {
			e.preventDefault();
			var href = window.location.href.replace(/(?:&|\?)locale\=[a-zA-Z\-]+/,'');
			var newHref = href + (href.indexOf('?') > -1 ? '&' : '?') + 'locale='+encodeURIComponent(val);
			window.location.href = newHref;
		}
	});
}());
