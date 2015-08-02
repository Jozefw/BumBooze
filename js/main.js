
require.config({
  // means follow the protocol whether http or https
  paths: {
    jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    backone:'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min',
    //backone: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min",
    localStorage: 'https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
    // localStorage: "http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min",
    // localStorage: 'Backbone.localStorage-master/backbone.localStorage',
    bootstrap: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min"
  },
  shim: {
    bootstrap: {
      deps: ["jquery"],
      exports: "bootstrap",
    }

  }
});

require(['boozeView'],function(BoozeView){
  var beer = new BoozeView;
});