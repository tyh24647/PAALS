/*exported alertHelper */

// Module pattern
var alertHelper = (function () {

'use strict';

function alert(target, style, message) {
	alertMany(target, style, [message]);
}

function alertJS(target, style, message) {
	alertManyJS(target, style, [message]);
}

function alertManyJson(target, style, jsonData) {
	var counter = 100;
	var messageElms = [];
	var targetElm = target.get(0);
	
	style = (style === 'error' ? 'danger' : style);// error is no longer available in UXCore2

	target.empty();

	for (var key in jsonData){
	    var message = jsonData[key];
	    messageElms.push(ux.React.createElement(ux.Alert, {  id: "ux-alert-info", emphasis:style, key:counter++, title: message, className:'app-alert' })); // allow for rendering multiple elements to same target
	}
	
	ux.ReactDOM.render(messageElms, targetElm);
	target.show();
	scrollHelper.scrollToElementIfNotInView(target);
}

function alertMany(target, style, messages) {
	var counter = 100;
	var messageElms = [];
	var targetElm = target.get(0);
	
	style = (style === 'error' || style === 'danger' ? 'critical' : style);// error and danger are no longer available in UXCore2

	target.empty();

	messages.forEach(function (message) {
		messageElms.push(ux.React.createElement(ux.Alert, { id: "ux-alert-info", emphasis:style, key:counter++, className:'app-alert', title: message }));// allow for rendering multiple elements to same target
	});
	
	ux.ReactDOM.render(messageElms, targetElm);
	target.show();
	scrollHelper.scrollToElementIfNotInView(target);
}

function alertManyJS(target, style, messages) {
	var counter = 100;
	var messageElms = [];

	style = (style === 'error' || style === 'danger' ? 'critical' : style);// error and danger are no longer available in UXCore2

	target.innerHTML = '';
	target.classList.remove('d-none', false);
	target.classList.add('d-block');
	target.setAttribute('aria-hidden', false);

	messages.forEach(function (message) {
		messageElms.push(ux.React.createElement(ux.Alert, {  id: "ux-alert-info", emphasis:style, key:counter++, className:'app-alert', title: message }));
	});

	ux.ReactDOM.render(messageElms, target);
	target.scrollIntoView();
}

function dismissibleAlert(target, style, message) {
	dismissibleAlertMany(target, style, [message]);
}

function dismissibleAlertMany(target, style, messages) {
	var counter = 100;
	var messageElms = [];
	var alertLinks = [];
	var targetElm = target.get(0);
	var id = $(target).attr('id');
	
	style = (style === 'error' || style === 'danger' ? 'critical' : style);// error and danger are no longer available in UXCore2

	$(target).removeClass('d-none');
	$(target).addClass('d-block');
	$(target).attr('aria-hidden', false);

	messages.forEach(function (message) {
		messageElms.push(ux.React.createElement(ux.Alert, {  id: "ux-alert-info", emphasis:style, key:counter++, className:'alert-link', title: [message] }));// allow for rendering multiple elements to same target
	});
	
	ux.ReactDOM.render(messageElms, targetElm);
	target.show();
	scrollHelper.scrollToElementIfNotInView(target);
}



function clearAlertsJson(target) {
	ux.ReactDOM.unmountComponentAtNode(target.get(0));
	target.hide();
}

function clearAlerts(target) {
	ux.ReactDOM.unmountComponentAtNode(target.get(0));
}

function clearAlertsJS(target) {
	ux.ReactDOM.unmountComponentAtNode(target);
}

// Methods to export
return {
	alert: alert,
	alertJS: alertJS,
	alertMany: alertMany,
	alertManyJS: alertManyJS,
	alertManyJson: alertManyJson,
	clearAlerts: clearAlerts,
	clearAlertsJS: clearAlertsJS,
	clearAlertsJson: clearAlertsJson,
	dismissibleAlert: dismissibleAlert,
	dismissibleAlertMany: dismissibleAlertMany
}

})();