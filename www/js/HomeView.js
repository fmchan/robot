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
	    $.ajax({url: "http://playhard.timture.com:4567/Hello", success: function(result) {
	    	result = $.parseJSON(result);
        	console.log("title:" + result.title);
    	}});

		if(SMS) SMS.startWatch(function() {
                update('watching', 'watching started');
            }, function() {
                updateStatus('failed to start watching');
            });

	};

	this.initialize();
}