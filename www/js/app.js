// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        console.log("Service initialized");
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });
        router.start();
    });

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());

/*document.addEventListener('onSMSArrive', function(e){
                var sms = e.data;

                smsList.push( sms );
                updateStatus('SMS arrived, count: ' + smsList.length );

                // sms.address
                // sms.body

                var divdata = $('#arrive-sms');
                divdata.html( divdata.html() + JSON.stringify( sms ) );

            });*/


    document.addEventListener('deviceready', function () {
      StatusBar.overlaysWebView( false );
      StatusBar.backgroundColorByHexString('#ffffff');
      StatusBar.styleDefault();

      FastClick.attach(document.body);

      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

}());