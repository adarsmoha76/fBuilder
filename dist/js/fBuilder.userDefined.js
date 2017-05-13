var userDefinedFunctions = (function (_config, _elements) {
	/**
	 * 
	 * all the user defined functions goes here
	 *
	 * These functions can also be defined globally.
	 * But if any function with the same name inside this function occurs as a global function, the global function will be overriden bu these functions.
	 * You may define extra functions and call them separately. You may even use global scope objects for function references.
	 * 
	 */
	
	var addRadio = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var radio = _elements.getRadio();
		$('.fBuilder-active-page').append(radio.html);
		radio.attachEvents();
	};
	
	var addCheckbox = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var checkbox = _elements.getCheckBox();
		$('.fBuilder-active-page').append(checkbox.html);
		checkbox.attachEvents();
	};

	var addDropdown = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var dropdown = _elements.getDropdown();
		$('.fBuilder-active-page').append(dropdown.html);
		dropdown.attachEvents();
	};

	var addButton = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var button = _elements.getButton();
		$('.fBuilder-active-page').append(button.html);
		button.attachEvents();
	};
	
	var addText = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var text = _elements.getText();
		$('.fBuilder-active-page').append(text.html);
		text.attachEvents();
	};

	var addEmail = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var email = _elements.getEmail();
		$('.fBuilder-active-page').append(email.html);
		email.attachEvents();
	};

	var addNotice = function (e) {
		if ($('.fBuilder-active-page').length <= 0) return;
		var notice = _elements.getNotice();
		$('.fBuilder-active-page').append(notice.html);
		notice.attachEvents();
	};
	
	/**
	 * 
	 * all the user defined functions ends here
	 * 
	 */
	
	/**
	 *
	 * @param {string} [type of event that is to be attached eg. 'click', 'mousemove' etc.]
	 *
	 * @param {string} [conatiner to which the event is to be added. eg. '#id', '.class', 'body' etc.]
	 *
	 * @param {string} [the name of the defined function without the paranthesis]
	 *
	 * @return {boolean} [true if its a success, else false]
	 *
	 * @author adarsh
	 *
	 * @example
	 * 		addEvents('click', '#my-id', 'tester');
	 * 		tested must be defined in the user function area or in the global scope.
	 * 			eg: var tester = function (event) { ... };
	 * 
	 */
	var _addEvents = function () {
		if (
			arguments.length !== 3 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string' || typeof arguments[2] !== 'string' ||
			'' == arguments[2].trim() || eval('typeof '+arguments[2]).trim() !== 'function'
		) return false;
		$(document)
			.off('click', arguments[1])
			.on('click', arguments[1], eval(arguments[2]));
		return true;
	};
	return {
		addEvent: _addEvents
	};
});