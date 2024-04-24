/*jshint browser:true */
/*global window:true, jQuery:true */
(function (window, document, $, undefined) {
	'use strict';
	// Set $.log.url before use
	// Optionally set $.logAlert to get notified after save

	// https://gist.github.com/2428561
	var urlParser = document.createElement('a');
	var getLocalUrl = function (url) {
		var results = url;
		if (url) {
			try {
				urlParser.href = url;
				if (urlParser.hostname) {
					// Only if a valid url
					if (urlParser.hostname === window.location.hostname) {
						// Only if url is in the same domain as the current page
						results = urlParser.pathname + urlParser.search + urlParser.hash;
						if (!results) {
							results = url;
						}
					}
				}
			} catch (err) {
				// FRAGILE: ASSUME: Failure to parse url isn't a deal breaker for logging
				results = url;
			}
		}
		return results;
	};

	// {message: 'show this', type: severity, data: theDataSentToTheServer}
	$.logAlert = function (/*options*/) {}; // no-op

	// content: data to log, can be object or string
	// opts: {noticeType: 'error'}
	// noticeType: severity passed to logAlert()
	var log = function (content, opts) {

		var options = $.extend({
			noticeType: 'error' // Type type to pass to $.logAlert: notice, error, success
		}, opts || {});

		var url = $.log.url;
		if (!url) {
			return; // We've successfully done nothing
		}
		if (!content) {
			return; // No need to tell everyone nothing
		}

		var data = {
			message: content
		};
		if (typeof content === 'object' && content.message) {
			data = content;
		}

		data.pageUrl = getLocalUrl(window.location.href);
		if (!data.url) {
			data.url = data.pageUrl;
		}
		data.referrerUrl = document.referrer;

		var mess;
		try {
			mess = JSON.stringify(data);
		} catch (err) {
			log({message: 'error JSON.stringifying log content', err: err});
			return;
		}

		$.ajax(url, {
			type: 'POST',
			data: mess,
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			success: function (results) {
				$.logAlert({message: (results && results.mess) || data.message, type: options.noticeType, data: data});
			},
			error: function (xhr, status, error) {
				$.logAlert({message: 'Error saving to log', type: options.noticeType, data: data, xhr: xhr, status: status, error: error});
			}
		});
	};

	var logBrowser = function (settings) {
		var origOnerror = window.onerror, rootSettings, filter;
		if (settings) {
			rootSettings = $.extend({}, settings);
		}
		if(rootSettings && rootSettings.filter && typeof rootSettings.filter === 'function') {
			filter = rootSettings.filter;
			delete rootSettings.filter;
		}
		window.onerror = function (message, url, lineNumber) {
			var proceed, logContent, localSettings;
			if (rootSettings) {
				localSettings = $.extend({},rootSettings);
			}
			logContent = {
				message: message || 'window.onerror',
				url: url,
				lineNumber: lineNumber,
				source: 'window.onerror'
			};
			if (filter) {
				proceed = filter({args:arguments, log:logContent, settings:localSettings});
				// like jQuery return falsey to disable, return truthy or undefined to proceed
			}
			if (proceed === undefined || proceed) {
				log(logContent, localSettings);
			}
			if (origOnerror) {
				origOnerror.apply(window, arguments);
			}
		};
	};
	var logAjax = function (settings) {
		var rootSettings, filter;
		if (settings) {
			rootSettings = $.extend({}, settings);
		}
		if(rootSettings && rootSettings.filter && typeof rootSettings.filter === 'function') {
			filter = rootSettings.filter;
			delete rootSettings.filter;
		}
		$(document).ajaxError(function (e, xhr, ajaxData/*, exception*/) {
			var proceed, logContent, localSettings;
			if (rootSettings) {
				localSettings = $.extend({},rootSettings);
			}
			logContent = {
				message: 'A system error occurred in $.ajax()'
			};
			if (ajaxData && ajaxData.url) {
				if (ajaxData.url === $.log.url) {
					return; // Don't recurse
				}
				logContent.url = ajaxData.url;
			}
			if (xhr) {
				if (xhr.status === 0 || xhr.readyState === 0 || xhr.status === 12017 || xhr.status === 12029) {
					// Either server wasn't available or client killed it to navigate to a different page
					// 12017 is Windows error meaning closed connection
					// 12029 is Windows error meaning can't connect to server
					return; // FRAGILE: ASSUME: we don't need to log this
				}
				logContent.httpStatus = xhr.status;
				logContent.responseText = xhr.responseText;
				try {
					var contentType = xhr.getResponseHeader('content-type');
					if (contentType && contentType.indexOf('application/json') > -1) {
						logContent.ex = JSON.parse(xhr.responseText);
						if (logContent.ex && logContent.ex.Message) {
							logContent.xhrMessage = logContent.ex.Message;
						}
					}
				} catch (innerErr) {
					// FRAGILE: Swallow, avoid blowing up when trying to blow up
				}
			}
			if (filter) {
				proceed = filter({args:arguments, log:logContent, settings:localSettings});
				// like jQuery return falsey to disable, return truthy or undefined to proceed
			}
			if (proceed === undefined || proceed) {
				log(logContent, localSettings);
			}
		});
	};

	$.log = log;
	$.logBrowser = logBrowser;
	$.logAjax = logAjax;
}(window, window.document, jQuery));
