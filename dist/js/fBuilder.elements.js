/**
 *
 * @description [closure for rendering HTML elements]
 * 
 * @param  {object} [config] [an instance from another closure]
 * 
 * @return {obejct} [a list of available options are returned]
 *
 * @author adarsh
 * 
 */
var fBuilderElements = (function (_config) {
	var _userDefFunctions = new userDefinedFunctions(_config, this);
	
	/**
	 *
	 * @description [function to generate a random string]
	 * 
	 * @param  {number} [length] [the length of the random string that is to generated]
	 * 
	 * @return {string} [the random string]
	 *
	 * @author adarsh
	 * 
	 */
	var _getRandomId = function (length) {
		length = typeof length !== 'number' ? 10 : length;
		var text = '',
			possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	};
	
	/**
	 *
	 * @description [function to generate one elements tab item]
	 * 
	 * @return {string} [HTML of the element]
	 *
	 * @author adarsh
	 * 
	 */
	var _getElementsTab = function () {
		if (typeof arguments[0] !== 'string' || typeof _config.getElements()[arguments[0]] !== 'object') return '';
		var element = _config.getElements()[arguments[0]];
		_userDefFunctions.addEvent('click', '#'+element.id, element.func);
		return [
			'<li class="element-btn">',
				'<button class="btn btn-default fBuilderElements fbuilder-element-btn" data-slug="'+arguments[0]+'" title="'+element.title+'" id="'+element.id+'">',
					element.name,
				'</button>',
			'</li>'
		].join('');
	};

	/**
	 *
	 * @description [function to generate one control tab item]
	 * 
	 * @return {string} [HTML of the element]
	 *
	 * @author adarsh
	 * 
	 */
	var _getControlsTab = function () {
		if (typeof arguments[0] !== 'string' || typeof _config.getControls()[arguments[0]] !== 'object') return '';
		var control = _config.getControls()[arguments[0]];
		return [
			'<li class="control-btn">',
				'<button class="btn btn-default fbuilderControls fbuilder-control-btn" data-slug="'+arguments[0]+'" title="'+control.title+'" id="'+control.id+'">',
					control.name,
				'</button>',
			'</li>'
		].join('');
	}

	/**
	 *
	 * @description [function to provide the new page control section]
	 * 
	 * @param  {string} [id] [id of the page to which the controls are needed]
	 * 
	 * @return {string} [empty string if no id is provided else the HTML content]
	 *
	 * @author adarsh
	 * 
	 */
	var _getNewPageButton = function (id) {
		return typeof id !== 'string' ? '' : fBuilderElements_HMTL.pageButton(id)
	};


	/**
	 *
	 * @description [function to provide the new page]
	 * 
	 * @param  {string} [id] [id of the page]
	 * 
	 * @return {string} [empty string if no id is provided else the HTML content]
	 *
	 * @author adarsh
	 * 
	 */
	var _getNewPage = function (id) {
		return typeof id !== 'string' ? '' : fBuilderElements_HMTL.page(id);
	}

	/**
	 * 
	 * @description [function to provide the HTML of a button]
	 * 
	 * @return {string} [the HTML content]
	 *
	 * @author adarsh
	 */
	var _button = function () {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		var html = fBuilderElements_HMTL.button(_random);
		var _attachEvents = function () {
		};
		return {
			html: html,
			attachEvents: _attachEvents
		}
	};

	/**
	 * 
	 * @description [function to provide the HTML of a radio button]
	 * 
	 * @return {string} [the HTML content]
	 *
	 * @author adarsh
	 */
	var _radio = function () {
		var _random = _getRandomId(),
			_random2 = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		while ($('#'+_random).length > 0) _random2 = _getRandomId();
		var _html = fBuilderElements_HMTL.radio(_random, _random2);
		var _attachEvents = function () {
		};
		return {
			html: _html,
			attachEvents: _attachEvents
		};
	};

	/**
	 * 
	 * @description [function to provide the HTML of a checkbox]
	 * 
	 * @return {string} [the HTML content]
	 *
	 * @author adarsh
	 */
	var _checkbox = function () {
		var _random = _getRandomId(),
			_random2 = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		while ($('#'+_random).length > 0) _random2 = _getRandomId();
		var _html = fBuilderElements_HMTL.checkbox(_random, _random2);
		var _attachEvents = function () {
		};
		return {
			html: _html,
			attachEvents: _attachEvents
		};
	};

	/**
	 * 
	 * @description [function to provide the HTML of a dropdown menu]
	 * 
	 * @return {string} [the HTML content]
	 *
	 * @author adarsh
	 */
	var _dropdown = function () {
		var _random = _getRandomId(),
			_random2 = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		while ($('#'+_random).length > 0) _random2 = _getRandomId();
		var _html = fBuilderElements_HMTL.dropdown(_random, _random2);
		var _attachEvents = function () {
		};
		return {
			html: _html,
			attachEvents: _attachEvents
		};
	};

	/**
	 * [getButton description]
	 * @type {[type]}
	 */
	var _textarea = function () {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		var html = fBuilderElements_HMTL.text(_random);
		var _attachEvents = function () {
		};
		return {
			html: html,
			attachEvents: _attachEvents
		};
	};

	/**
	 * @return {[type]}
	 */
	var _email = function () {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		var html = fBuilderElements_HMTL.email(_random);
		var _attachEvents = function () {
		};
		return {
			html: html,
			attachEvents: _attachEvents
		};
	};
	var _notice = function () {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		var html = fBuilderElements_HMTL.notice(_random);
		var _attachEvents = function () {
		};
		return {
			html: html,
			attachEvents: _attachEvents
		};
	};

	var _newRadioOptionAfter = function (id, id2) {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		id2 = id2.indexOf('#') == 0 ? id2.substring(1) : id2;
		$(fBuilderElements_HMTL.getRadioOption(_random)).insertAfter('#'+id2);
		$(fBuilderElements_HMTL.getRadioEditorOptions(_random)).insertAfter('.fBuilder-form-element-radio-options-container-option[data-id="'+id2+'"]');
	};

	var _newRadioOption = function (id, options) {
		options = typeof options === 'object' ? options : {};
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		$('#'+id+' .fBuilder-view-container-radio-options-container').prepend(fBuilderElements_HMTL.getRadioOption(_random, options));
		$('#'+id+' .fBuilder-form-element-radio-options-container').prepend(fBuilderElements_HMTL.getRadioEditorOptions(_random, options));
	};

	var _newCheckboxOptionAfter = function (id, id2) {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		id2 = id2.indexOf('#') == 0 ? id2.substring(1) : id2;
		$(fBuilderElements_HMTL.getCheckboxOption(_random)).insertAfter('#'+id2);
		$(fBuilderElements_HMTL.getCheckboxEditorOptions(_random)).insertAfter('.fBuilder-form-element-checkbox-options-container-option[data-id="'+id2+'"]');
	};

	var _newCheckboxOption = function (id, options) {
		options = typeof options === 'object' ? options : {};
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		$('#'+id+' .fBuilder-view-container-checkbox-options-container').prepend(fBuilderElements_HMTL.getCheckboxOption(_random, options));
		$('#'+id+' .fBuilder-form-element-checkbox-options-container').prepend(fBuilderElements_HMTL.getCheckboxEditorOptions(_random, options));
	};

	var _newDropdownOptionAfter = function (id, id2) {
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		id2 = id2.indexOf('#') == 0 ? id2.substring(1) : id2;
		console.log(
			$('#'+id2),
			$('.fBuilder-form-element-radio-options-container-option[data-id="'+id2+'"]')
		);
		$(fBuilderElements_HMTL.getDropdownOption(_random)).insertAfter('#'+id2);
		$(fBuilderElements_HMTL.getDropdownEditorOption(_random)).insertAfter('.fBuilder-form-element-dropdown-options-container-option[data-id="'+id2+'"]');
	};

	var _newDropdownOption = function (id, options) {
		options = typeof options === 'object' ? options : {};
		var _random = _getRandomId();
		while ($('#'+_random).length > 0) _random = _getRandomId();
		id = id.indexOf('#') == 0 ? id.substring(1) : id;
		$('#'+id+' .fBuilder-view-container-dropdown-options-container').prepend(fBuilderElements_HMTL.getDropdownOption(_random, options));
		$('#'+id+' .fBuilder-form-element-dropdown-options-container').prepend(fBuilderElements_HMTL.getDropdownEditorOption(_random, options));
	};

	this.__proto__.getRadio = _radio;
	this.__proto__.getCheckBox = _checkbox;
	this.__proto__.getDropdown = _dropdown;

	this.__proto__.getButton = _button;
	this.__proto__.getText = _textarea;
	this.__proto__.getEmail = _email;
	this.__proto__.getNotice = _notice;

	return {
		getRandomId: _getRandomId,
		getElementsTab: _getElementsTab,
		getControlsTab: _getControlsTab,
		getNewPageButton: _getNewPageButton,
		getNewPage: _getNewPage,

		generateNewRadioOptionAfter: _newRadioOptionAfter,
		generateNewRadioOption: _newRadioOption,

		generateNewCheckboxOptionAfter: _newCheckboxOptionAfter,
		generateNewCheckboxOption: _newCheckboxOption,

		generateNewDropdownOptionAfter: _newDropdownOptionAfter,
		generateNewDropdownOption: _newDropdownOption
	};
});


/**
 *
 * @description [closure for rendering all HTML data]
 *
 * @return {object} [a list of available Options are returned]
 *
 * @author adarsh
 * 
 */
var fBuilderElements_HMTL = (function () {
	
	/**
	 * 
	 * @description [function to generate one page]
	 * 
	 * @param  {string} [id] [id for the page]
	 * 
	 * @return {string} [the page HTML]
	 *
	 * @author adarsh
	 * 
	 */
	var _page = function (id) {
		return '<div class="col-sm-12 fBuilder-page fBuilder-active-page" id="'+id+'"></div>';
	};

	/**
	 * 
	 * @description [function to generate the controls for a page]
	 * 
	 * @param  {string} [id] [id of the page to which the button belongs to]
	 * 
	 * @return {string} [the page control HTML]
	 * 
	 * @author adarsh
	 * 
	 */
	var _pageButton = function (id) {
		window._fBuilder_next_page = typeof window._fBuilder_next_page === 'number' ? (window._fBuilder_next_page + 1) : 1;
		return [
			'<li class="fBuilder-page-switcher-container active" data-target="#'+id+'">',
				'<div class="fBuilder-page-short-details">',
					'<label id="page-'+id+'">Page '+window._fBuilder_next_page+'</label>',
				'</div>',
				'<div class="fBuilder-page-short-editor hidden">',
					'<input type="text" class="form-control fBuilder-controlled-text-labels fBuilder-page-short-editor-name" data-target="#page-'+id+'" value="Page '+window._fBuilder_next_page+'" />',
				'</div>',
				'<div class="fBuilder-page-short-controls">',
					'<button title="edit" class="fBuilder-page-short-name-editor-btn"><span class="glyphicon glyphicon-pencil"></span></button>',
					'<button title="cancel" class="fBuilder-page-short-name-editor-cancel-btn hidden"><span class="glyphicon glyphicon-remove"></span></button>',
					'<button title="confirm" class="fBuilder-page-short-name-editor-confirm-btn hidden"><span class="glyphicon getButton-ok"></span></button>',
					'<button title="remove" class="fBuilder-page-short-name-editor-remove-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
				'</div>',
			'</li>',
		].join('');
	};

	/**
	 * 
	 * @description function to generate a button
	 * 
	 * @param  {string} [id] [id of the element]
	 * 
	 * @return {string} [HTML for the element]
	 * 
	 * @author adarsh.
	 * 
	 */
	var _button = function (id) {
		return [
			'<div class="fBuilder-form-element-container" data-type="button">',
				'<div class="fBuilder-view-container '+(window._fBuilder_view_mode === true ? '' : 'hidden')+'">',
					'<button type="button" id="'+id+'" class="btn btn-default">Next Button</button>',
				'</div>',
				'<div class="fBuilder-editor-container '+(window._fBuilder_view_mode === true ? 'hidden' : '')+'">',
					'<input type="text" class="form-control fBuilder-controlled-text-labels fBuilder-form-element-btn" data-target="#'+id+'" placeholder="Next Button" data-default="Next Button" />',
				'</div>',
				'<div class="fBuilder-element-extra-controls">',
					'<button title="Move this element up" class="fBuilder-move-up-btn"><span class="glyphicon glyphicon-upload"></span></button>',
					'<button title="Move this element down" class="fBuilder-move-down-btn"><span class="glyphicon glyphicon-download"></span></button>',
					'<button title="Remove this element" class="fBuilder-remove-element-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
				'</div>',
			'</div>'
		].join('');
	};
	
	/**
	 * 
	 */
	var _text = function (id) {
		return [
			'<div class="fBuilder-form-element-container" data-type="text">',
				'<div class="fBuilder-view-container '+(window._fBuilder_view_mode === true ? '' : 'hidden')+'">',
					'<label id="'+id+'">Question / Label</label><br />',
					'<input class="form-control" type="text" placeholder="your answer will be on here.." readonly />',
				'</div>',
				'<div class="fBuilder-editor-container '+(window._fBuilder_view_mode === true ? 'hidden' : '')+'">',
					'<textarea class="form-control fBuilder-controlled-text-labels fBuilder-form-element-textarea" data-target="#'+id+'" value="Question / Label" placeholder="Question / Label"></textarea>',
				'</div>',
				'<div class="fBuilder-element-extra-controls">',
					'<button title="Move this element up" class="fBuilder-move-up-btn"><span class="glyphicon glyphicon-upload"></span></button>',
					'<button title="Move this element down" class="fBuilder-move-down-btn"><span class="glyphicon glyphicon-download"></span></button>',
					'<button title="Remove this element" class="fBuilder-remove-element-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
				'</div>',
			'</div>'
		].join('');
	};

	/**
	 * 
	 */
	var _email = function (id) {
		return [
			'<div class="fBuilder-form-element-container" data-type="email">',
				'<div class="fBuilder-view-container '+(window._fBuilder_view_mode === true ? '' : 'hidden')+'">',
					'<label id="'+id+'">Question / Label</label><br />',
					'<input class="form-control" type="text" placeholder="your email will be on here.." readonly />',
				'</div>',
				'<div class="fBuilder-editor-container '+(window._fBuilder_view_mode === true ? 'hidden' : '')+'">',
					'<textarea class="form-control fBuilder-controlled-text-labels fBuilder-form-element-email" data-target="#'+id+'" value="Question / Label" placeholder="Question / Label"></textarea>',
				'</div>',
				'<div class="fBuilder-element-extra-controls">',
					'<button title="Move this element up" class="fBuilder-move-up-btn"><span class="glyphicon glyphicon-upload"></span></button>',
					'<button title="Move this element down" class="fBuilder-move-down-btn"><span class="glyphicon glyphicon-download"></span></button>',
					'<button title="Remove this element" class="fBuilder-remove-element-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
				'</div>',
			'</div>'
		].join('');
	};
	var _notice = function (id) {
		return [
			'<div class="fBuilder-form-element-container" data-type="notice">',
				'<div class="fBuilder-view-container '+(window._fBuilder_view_mode === true ? '' : 'hidden')+'">',
					'<label id="'+id+'">Question / Label</label><br />',
				'</div>',
				'<div class="fBuilder-editor-container '+(window._fBuilder_view_mode === true ? 'hidden' : '')+'">',
					'<textarea class="form-control fBuilder-controlled-text-labels fBuilder-form-element-notice" data-target="#'+id+'" value="Question / Label" placeholder="Question / Label"></textarea>',
				'</div>',
				'<div class="fBuilder-element-extra-controls">',
					'<button title="Move this element up" class="fBuilder-move-up-btn"><span class="glyphicon glyphicon-upload"></span></button>',
					'<button title="Move this element down" class="fBuilder-move-down-btn"><span class="glyphicon glyphicon-download"></span></button>',
					'<button title="Remove this element" class="fBuilder-remove-element-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
				'</div>',
			'</div>'
		].join('');
	};

	var _radio = function (id, id2) {
		return _mutiple_set_option(id, id2, 'radio');
	};

	var _radioOption = function (id, options) {
		return _mutiple_set_option_options(id, options, 'radio');
	};

	var _radioEditorOption = function (id, options) {
		return _mutiple_set_option_editor_options(id, options, 'radio');
	};

	var _checkbox = function (id, id2) {
		return _mutiple_set_option(id, id2, 'checkbox');
	};

	var _checkboxOption = function (id, options) {
		return _mutiple_set_option_options(id, options, 'checkbox');
	};

	var _checkboxEditorOption = function (id, options) {
		return _mutiple_set_option_editor_options(id, options, 'checkbox');
	};

	var _dropdown = function (id, id2) {
		return _mutiple_set_option(id, id2, 'dropdown');
	};

	var _dropdownOption = function (id, options) {
		return _mutiple_set_option_options(id, options, 'dropdown');
	};

	var _dropdownEditorOption = function (id, options) {
		return _mutiple_set_option_editor_options(id, options, 'dropdown');
	};

	var _mutiple_set_option = function (id, id2, type) {
		var _option_ = function (id, id2, type) {
			switch (type) {
				case 'checkbox': return _checkboxOption(id2);
				case 'radio': return _radioOption(id2);
				case 'dropdown':
					return [
						'<div class="dropdown">',
							'<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">',
								'Dropdown button',
							'</button>',
							'<ul class="dropdown-menu">',
								_dropdownOption(id2),
							'</ul>',
						'</div>'
					].join('');
			}
			return '';
		};
		var _editorOption_ = function (id, id2, typpe) {
			switch (type) {
				case 'checkbox': return _checkboxEditorOption(id2);
				case 'radio': return _radioEditorOption(id2);
				case 'dropdown':
					return _dropdownEditorOption(id2);
			}
			return '';
		};
		return [
			'<div class="fBuilder-form-element-container" data-type="'+type+'" id="'+id+'">',
				'<div class="fBuilder-view-container '+(window._fBuilder_view_mode === true ? '' : 'hidden')+'">',
					'<label id="'+id+'-label">Question / Label</label><br />',
					'<div class="fBuilder-view-container-'+type+'-options-container">',
						_option_(id, id2, type),
					'</div>',
				'</div>',
				'<div class="fBuilder-editor-container '+(window._fBuilder_view_mode === true ? 'hidden' : '')+'">',
					'<textarea class="form-control fBuilder-form-element-'+type+'-label" data-target="#'+id+'-label" value="Question / Label" placeholder="Question / Label"></textarea>',
					'<input type="text" class="form-control fBuilder-form-element-'+type+'-options"  data-target="#'+id+'-options" placeholder="Options (separated by comma[,])" value="" />',
					'dropdown' == type ? '' : ('<input type="text" class="form-control fBuilder-form-element-'+type+'-tag-prefix" data-target="#'+id+'-tag-prefix"  placeholder="Tag prefix" value="" />'),
					'<div class="fBuilder-form-element-'+type+'-options-container">',
						_editorOption_(id, id2, type),
					'</div>',
				'</div>',
				'<div class="fBuilder-element-extra-controls">',
					'<button title="Remove this element" class="fBuilder-remove-element-btn"><span class="glyphicon glyphicon-remove-circle"></span></button>',
					'<button title="Move this element up" class="fBuilder-move-up-btn"><span class="glyphicon glyphicon-upload"></span></button>',
					'<button title="Move this element down" class="fBuilder-move-down-btn"><span class="glyphicon glyphicon-download"></span></button>',
					'<button title="Add more option" class="fBuilder-form-element-checkbox-options-add"><span class="glyphicon glyphicon-plus-sign"></span></button>',
				'</div>',
			'</div>'
		].join('');
	};

	var _mutiple_set_option_options = function (id, options, type) {
		options = typeof options === 'object' ? options : {};
		var _data_ = function (id, options, type) {
			switch (type) {
				case 'radio':
				case 'checkbox':
					return [
						'<div class="fBuilder-view-container-'+type+'-options" id="'+id+'">',
							'<input type="'+type+'" id="'+id+'-option-active" disabled="disabled" '+(typeof options['active'] === 'boolean' && options.active === true ? 'checked="checked"' : '')+' />',
							'<label for="'+id+'-option-active" id="'+id+'-option-label">'+(typeof options['label'] === 'string' ? options.label : 'Answer')+'</label>',
							'(<label id="'+id+'-option-tag">'+(typeof options['tag'] === 'string' ? options.tag : 'Tag')+'</label>)',
						'</div>'
					].join('')
				case 'dropdown': return '<li id="'+id+'"><a href="#" id="'+id+'-option-label">'+(typeof options['label'] === 'string' ? options.label : 'Answer')+'</a></li>';
			}
			return '';
		};
		return _data_(id, options, type);
	}

	var _mutiple_set_option_editor_options = function (id, options, type) {
		options = typeof options === 'object' ? options : {};
		var _data_ = function (id, options, type) {
			switch (type) {
				case 'radio':
				case 'checkbox':
					return [
						'<input type="checkbox" class="fBuilder-form-element-'+type+'-options-activate" data-target="#'+id+'-option-active" '+(typeof options['active'] === 'boolean' && options.active === true ? 'checked="checked"' : '')+' />',
						'<input type="text" class="fBuilder-controlled-text-labels form-control fBuilder-form-element-'+type+'-options-label" data-target="#'+id+'-option-label" placeholder="'+(typeof options['label'] === 'string' ? options.label : 'Answer')+'" value="'+(typeof options['label'] === 'string' ? options.label : '')+'" />',
						'<input type="text" class="fBuilder-controlled-text-labels form-control fBuilder-form-element-'+type+'-options-tag" data-target="#'+id+'-option-tag" placeholder="'+(typeof options['tag'] === 'string' ? options.tag : 'Tag')+'" value="'+(typeof options['tag'] === 'string' ? options.tag : '')+'" />'
					].join('');
				case 'dropdown': return  '<input type="text" class="fBuilder-controlled-text-labels form-control fBuilder-form-element-'+type+'-options-label" data-target="#'+id+'-option-label" placeholder="'+(typeof options['label'] === 'string' ? options.label : 'Answer')+'" value="'+(typeof options['label'] === 'string' ? options.label : '')+'" />';
			}
			return '';
		};
		return [
			'<div class="fBuilder-form-element-'+type+'-options-container-option" data-id="'+id+'">',
				'<div class="fBuilder-form-element-'+type+'-options-container-option-item">',
					_data_(id, options, type),
				'</div>',
				'<div class="fBuilder-form-element-'+type+'-options-container-option-conrols">',
					'<button class="fBuilder-form-element-'+type+'-options-add-after" data-target="#'+id+'"><span class="glyphicon glyphicon-plus-sign"></span></button>',
					'<button class="fBuilder-form-element-'+type+'-options-remove-me" data-target="#'+id+'"><span class="glyphicon glyphicon-minus-sign"></span></button>',
				'</div>',
			'</div>',
		].join('');
	};
	return {
		pageButton: _pageButton,
		page: _page,

		radio: _radio,
		getRadioOption: _radioOption,
		getRadioEditorOptions: _radioEditorOption,

		checkbox: _checkbox,
		getCheckboxOption: _checkboxOption,
		getCheckboxEditorOptions: _checkboxEditorOption,

		dropdown: _dropdown,
		getDropdownOption: _dropdownOption,
		getDropdownEditorOption: _dropdownEditorOption,
		
		button: _button,
		text: _text,
		email: _email,
		notice: _notice
	};
})();