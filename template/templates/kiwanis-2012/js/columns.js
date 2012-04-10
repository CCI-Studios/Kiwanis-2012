/* columns */
var CCI = CCI || {};
CCI.Columns = new Class({

	container: null,
	selector: null,
	columns: null,
	height: null,
	
	offset: null,

	initialize: function(container, selector) {
		if (!container)
			return;
		
		this.container = container;
		this.selector = selector;
		this.columns = this.container.getElements(this.selector);
		
		this.offset = 20;
		this.height = 0;
		
		for (i = this.columns.length - 1; i >= 0; i--) {
			height = this.columns[i].getSize().y - this.offset;
			if (height > this.height) {
				this.height = height;
				console.log(height);
			}
		}
		
		this.columns.setStyle('height', this.height);
	}
	
});

window.addEvent('load', function () {
	c = new CCI.Columns($('bottom'), '.module > div > div');
});