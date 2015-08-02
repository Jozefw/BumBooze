define([
	'underscore',
	'backbone',
	'localStorage',

	], function(_, Backbone, LocalStorage ){ //
		var BoozeModel = Backbone.Model.extend({
			defaults: {
				boozeTitle: "",
				imbibed: false,
				hangover: false,
				headache: false,
				dryMouth: false,
				tiredness: false,
				irritability: true,
				lossOfFocus: false,

			},
			initialize:function(){
				console.log(this);
			},
			localStorage:new Store("BumBooze-List"),

		});
// always return the item you created so its availbale
		return BoozeModel;
	});

