/* jshint mootools:true */
/* columns */
var CCI = CCI || {};
CCI.Columns = new Class({

	Implements: [Options],

	options: {
		minHeight: 10,
		offset: 0
	},

	container: null,
	columns: null,
	height: null,

	initialize: function(container, selector, options) {
		if (!container) {
			return;
		}

		this.setOptions(options);
		
		this.container = container;
		this.columns = this.container.getElements(selector);

		this._updateHeight();
	},

	_updateHeight: function() {
		var height = this.options.minHeight,
			i, h;
		
		for (i = this.columns.length - 1; i >= 0; i--) {
			h = this.columns[i].getSize().y - this.options.offset;
			// console.log(h);
			if (h > height) {
				height = h;
			}
		}
		
		this.columns.setStyle('height', height);
	}
	
});