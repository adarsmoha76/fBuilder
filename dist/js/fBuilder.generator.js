var fBuilderAdvancedEvents = (function (_elements) {

	/* checkbox and radio section */

	var _multipleOptionActivator = function (evnt) {
		var me = $(this);
		var container = me.closest('.fBuilder-form-element-container');
		var type = container.attr('data-type');
		var prop = me.prop('checked');
		if ('radio' === type) {
			container.find('.fBuilder-form-element-radio-options-activate').each(function () {
				$($(this).attr('data-target')).prop('checked', false);
				$(this).prop('checked', false);
			});
		}
		me.prop('checked', prop);
		$(me.attr('data-target')).prop('checked', prop);
	};
	
	var _addMultipleMultiOptions = function (evnt) {
		evnt.stopImmediatePropagation();
		evnt.stopPropagation();
		var me = $(this);
		var container = me.closest('.fBuilder-form-element-container');// [data-type="checkbox"]');
		var type = container.attr('data-type');
		var tag_input = container.find('.fBuilder-form-element-'+type+'-tag-prefix').val().trim(),
			id = container.attr('id');
		container.find('.fBuilder-view-container-'+type+'-options-container').empty();
		container.find('.fBuilder-form-element-'+type+'-options-container').empty();
		if (me.val().trim() == '') {
			switch (type) {
				case 'checkbox': return _elements.generateNewCheckboxOption(id);
				case 'radio': return _elements.generateNewRadioOptionAfter(id);
				case 'dropdown': return _elements.generateNewDropdownOptionAfter(id);
			}
		}
		$(this).val().split(',').reverse().forEach(function (v, i) {
			v = v.trim();
			if ('' != v) {
				switch (type) {
					case 'checkbox': _elements.generateNewCheckboxOption(id, { label: v, tag: tag_input+'-'+v });
					case 'radio': _elements.generateNewRadioOption(id, { label: v, tag: tag_input+'-'+v });
					case 'dropdown': return _elements.generateNewDropdownOption(id, { label: v });
				}
			}
		});
	};

	var _addMultipleTagPrefix = function (evnt) {
		evnt.stopImmediatePropagation();
		evnt.stopPropagation();
		var me = $(this);
		var me_tag = me.val().trim();
		var container = me.closest('.fBuilder-form-element-container');
		var type = container.attr('data-type');
		container.find('.fBuilder-form-element-'+type+'-options-container-option-item').each(function () {
			var label = $(this).find('.fBuilder-form-element-'+type+'-options-label').val().trim();
			var tag = $(this).find('.fBuilder-form-element-'+type+'-options-tag');
			$(tag.val(me_tag+'-'+label).attr('data-target')).html(me_tag+'-'+label);
		});
	};
	var _addMultipleOptionAfterThis = function (evnt) {
		evnt.preventDefault();
		evnt.stopImmediatePropagation();
		evnt.stopPropagation();
		var me = $(this);
		var container = me.closest('.fBuilder-form-element-container');
		var type = container.attr('data-type');
		switch (type) {
			case 'checkbox': _elements.generateNewCheckboxOptionAfter('#'+(container.attr('id')), me.attr('data-target'));
			case 'radio': _elements.generateNewRadioOptionAfter('#'+(container.attr('id')), me.attr('data-target'));
			case 'dropdown': _elements.generateNewDropdownOptionAfter('#'+(container.attr('id')), me.attr('data-target'));
		}
		return '';
	};

	var _addMultipleOption = function (evnt) {
		evnt.preventDefault();
		evnt.stopImmediatePropagation();
		evnt.stopPropagation();
		var container = $(this).closest('.fBuilder-form-element-container');
		var type = container.attr('data-type');
		switch (type) {
			case 'checkbox': _elements.generateNewCheckboxOption('#'+container.attr('id'));
			case 'radio': _elements.generateNewRadioOption('#'+container.attr('id'));
			case 'dropdown': _elements.generateNewDropdownOption('#'+container.attr('id'));
		}
		return '';
	};

	var _removeMultipleOption = function (evnt) {
		evnt.preventDefault();
		evnt.stopImmediatePropagation();
		evnt.stopPropagation();
		var me = $(this);
		var container = me.closest('.fBuilder-form-element-container');
		var type = container.attr('data-type');
		if (container.find('.fBuilder-form-element-'+type+'-options-container').children().length <= 1)
			return alert('atleast one option is needed'), false;
		$(me.attr('data-target')).remove();
		$('.fBuilder-form-element-'+type+'-options-container-option[data-id="'+me.attr('data-target').substring(1)+'"]').remove();
	};

	return {
		/* radio events */
		radioActivatorChanged: _multipleOptionActivator,
		addMultipleRadioOptions: _addMultipleMultiOptions,
		addRadioTagPrefix: _addMultipleTagPrefix,
		addRadioOptionAfter: _addMultipleOptionAfterThis,
		addRadioOption: _addMultipleOption,
		removeRadioOption: _removeMultipleOption,
		/* checkbox events */
		checkboxActivatorChanged:  _multipleOptionActivator,
		addMultipleCheckboxOptions: _addMultipleMultiOptions,
		addCheckboxTagPrefix: _addMultipleTagPrefix,
		addCheckboxOptionAfter: _addMultipleOptionAfterThis,
		addCheckboxOption: _addMultipleOption,
		removeCheckboxOption: _removeMultipleOption,
		/* dropdown events */
		addMultipleDropdownOptions: _addMultipleMultiOptions,
		addDropdownOptionAfter: _addMultipleOptionAfterThis,
		addDropdownOption: _addMultipleOption,
		removeDropdownOption: _removeMultipleOption
	};
});

var fBuilderGenerator = (function () {
	var _config = new fBuilderConfig(),
		_elements = new fBuilderElements(_config)
		_advancedEvents = new fBuilderAdvancedEvents(_elements);
	var _randomID = _elements.getRandomId;
	var _generateMainContainer = function () {
		var randomId = _randomID();
		while($('#'+randomId).length > 0) randomId = _randomID();
		var elements = '',
			controls = '';
		for (var elem in _config.getElements()) {
			elements += _elements.getElementsTab(elem);
		}
		for (var cont in _config.getControls()) {
			controls += _elements.getControlsTab(cont);
		}
		var html = [
			'<div id="fBuilder-container">',
				'<div id="fBuilder-left">',
					'<ul class="fBuilder-left-controls" id="fBuilder-elements-appender">'+elements+'</ul>',
					'<ul class="fBuilder-left-controls" id="fBuilder-page-appender">',
						'<li id="fBuilder-add-new-plage-container">',
							'<button class="btn btn-default fbuilder-pages-btn fBuilder-add-page-btn" id="fBuilder-add-new-page-btn">ADD NEW PAGE</button>',
						'</li>',
						_generateNewPageButton(randomId, true),
					'</ul>',
				'</div>',
				'<div id="fBuilder-middle">',
					'<div class="row fbuilder-form-details">',
						'<div class="col-sm-12">',
							'<div class="input-group">',
								'<input type="text" class="form-control" placeholder="form title goes here..." title="form title goes here..." id="fBuilder-form-title" />',
								'<button data-toggle="collapse" data-target="#fBuilder-form-description-container" class="btn btn-default" type="button">Toggle description</button>',
							'</div>',
						'</div>',
						'<div class="col-sm-12 collapse" id="fBuilder-form-description-container">',
							'<textarea class="form-control" id="fBuilder-form-description" placeholder="form description goes here..." title="form description goes here..."></textarea>',
						'</div>',
					'</div>',
					'<div class="fBuilder-page-operations-container">',
						'<div class="fBuilder-page-operations-main"></div>',
						'<div class="fBuilder-page-operations-controls">',
							'<button title="Move this page up" class="fBuilder-move-page-up-btn"><span class="glyphicon glyphicon-arrow-up"></span></button>',
							'<button title="Move this page down" class="fBuilder-move-page-down-btn"><span class="glyphicon glyphicon-arrow-down"></span></button>',
							'<input type="checkbox" id="fBuilder-toggle-view" '+(window._fBuilder_view_mode === true ? 'checked="checked"' : '')+' />',
							'<label title="Toggle view mode ON or OFF" for="fBuilder-toggle-view"><span class="glyphicon glyphicon-eye-close"></span></label>',
						'</div>',
					'</div>',
					'<div class="row fBuilder-page-container">',
						_generateNewPage(randomId, true),
					'</div>',
				'</div>',
				'<div id="fBuilder-right">',
					'<ul id="fBuilder-controls">'+controls+'</ul>',
				'</dib>',
			'</div>'
		];
		_attachAdvancedEvents();
		return html.join('');
	};
	var _generateNewPageButton = function (randomId, text_only) {
		text_only = typeof text_only === 'boolean' ? text_only : false;
		if (typeof randomId !== 'string') return '';
		if (text_only === true) {
			return _elements.getNewPageButton(randomId);
		}
		$('.fBuilder-page-switcher-container.active').removeClass('active');
		$('#fBuilder-page-appender').append(_elements.getNewPageButton(randomId));
	};
	var _generateNewPage = function (randomId, text_only) {
		text_only = typeof text_only === 'boolean' ? text_only : false;
 		randomId = typeof randomId === 'string' ? randomId : _randomID();
		while ($('#'+randomId).length > 0) randomId = _randomID();
		if (text_only === true) {
			return _elements.getNewPage(randomId);
		}
		$('.fBuilder-active-page').removeClass('fBuilder-active-page');
		$('.fBuilder-page-container').append(_elements.getNewPage(randomId));
		_generateNewPageButton(randomId);
	};
	var _attachAdvancedEvents = function () {
		/* radio options */
		$(document)
			.on('change', '.fBuilder-form-element-radio-options-activate', _advancedEvents.radioActivatorChanged)
			.on('keyup keydown keypress change', '.fBuilder-form-element-radio-options', _advancedEvents.addMultipleRadioOptions)
			.on('keyup keydown keypress change', '.fBuilder-form-element-radio-tag-prefix', _advancedEvents.addRadioTagPrefix)
			.on('click', '.fBuilder-form-element-radio-options-add', _advancedEvents.addRadioOption)
			.on('click', '.fBuilder-form-element-radio-options-add-after', _advancedEvents.addRadioOptionAfter)
			.on('click', '.fBuilder-form-element-radio-options-remove-me', _advancedEvents.removeRadioOption);
		/* checkbox events */
		$(document)
			.on('change', '.fBuilder-form-element-checkbox-options-activate', _advancedEvents.checkboxActivatorChanged)
			.on('keyup keydown keypress change', '.fBuilder-form-element-checkbox-options', _advancedEvents.addMultipleCheckboxOptions)
			.on('keyup keydown keypress change', '.fBuilder-form-element-checkbox-tag-prefix', _advancedEvents.addCheckboxTagPrefix)
			.on('click', '.fBuilder-form-element-checkbox-options-add', _advancedEvents.addCheckboxOption)
			.on('click', '.fBuilder-form-element-checkbox-options-add-after', _advancedEvents.addCheckboxOptionAfter)
			.on('click', '.fBuilder-form-element-checkbox-options-remove-me', _advancedEvents.removeCheckboxOption);
		/* dropdown events */
		$(document)
			.on('keyup keydown keypress change', '.fBuilder-form-element-dropdown-options', _advancedEvents.addMultipleDropdownOptions)
			.on('click', '.fBuilder-form-element-dropdown-options-add', _advancedEvents.addDropdownOption)
			.on('click', '.fBuilder-form-element-dropdown-options-add-after', _advancedEvents.addDropdownOptionAfter)
			.on('click', '.fBuilder-form-element-dropdown-options-remove-me', _advancedEvents.removeDropdownOption);
	};
	return {
		parseMainContainer: _generateMainContainer,
		addNewPage: _generateNewPage
	};
})();