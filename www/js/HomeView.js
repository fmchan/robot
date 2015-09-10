var HomeView = function (service) {

    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.help-btn', this.requestTest);
        this.render();
    };

	this.render = function() {
	    this.$el.html(this.template());
	    return this;
	};

	this.requestTest = function() {
	    $.ajax({url: "/robot/test.php", success: function(result) {
	    	//result = $.parseJSON(result);
        	//console.log("title:" + result.title);
            console.log(result);
    	}});
	};

	this.initialize();
}