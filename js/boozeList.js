// all file names from config (the keys) or you can use the fielname without .js

define([
	'underscore',
	'backbone',
	'localStorage',
	'boozeModel',

	], function(_, Backbone, LocalStorage, BoozeModel){
		var BoozeList = Backbone.Collection.extend({

			model: BoozeModel,
			localStorage:new Store("BumBooze-List"),
		});

		return BoozeList;
	});

