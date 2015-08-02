define([
	'jquery',
	'underscore',
	'backbone',
	// 'localStorage',
	'boozeList',
	'boozeModel'

], function($, _, Backbone, BoozeList, BoozeModel) { //,LocalStorage

	var BoozeView = Backbone.View.extend({
		// el - stands for element. Every view has a element associate in with HTML
		//      content will be rendered.
		el: '#boozeApp',
		events: {
			'change #new_booze': 'boozeChanged',
			'click #drink': 'drink'
		},

		collection: new BoozeList(),
		//template: _.template($("<div class='view'><input class='toggle' type='checkbox'><label><%- title %></label></div>").html()),
		// It's the first function called when this view it's instantiated.
		initialize: function() {
			// calls render function
			// console.log(this.model);
			// reset means
			this.listenTo(this.collection, 'reset', this.render);
			this.collection.fetch({
				reset: true
			});
			console.log('innit');
		},
		// $el - it's a cached jQuery object (el), in which you can use jQuery functions
		//       to push content. Like the Hello World in this case.
		render: function() {
			// always this.$el and pass in the template
			// this.$el.html(this.template(this.model.toJSON()));
			// enables chained calls
			$('#booze-list').empty();
			this.collection.each(function(model) {
				$('#booze-list').append('<li>' + model.get('boozeTitle') + '</li>');
			});
			return this;
		},
		boozeChanged: function(e) {
			//var val = $(e.currentTarget).val();
			// console.log(val);
			// if(this.collection.models.length < 1)
			// {
			// 	this.collection.add([{boozeTitle:val}]);
			// }
			// if(this.collection.models[0])
			// {
			// 	console.log(this.collection.models[0].get('boozeTitle'));
			// }


			// this.collection.models[0].set('boozeTitle', val).save();
		},
		drink: function() {
			var val = $('#new_booze').val();
			console.log(val);
			if (val === this.lastTitle) {
				return;
			}
			this.lastTitle = val;

			this.collection.create({
				boozeTitle: val,
				id: this.makeID(val)
			});
			this.collection.fetch({
				reset: true
			});
		},
		makeID: function(string) {
			var hash = 0;
			if (string.length === 0) {
				return hash;
			}
			for (i = 0; i < string.length; i++) {
				char = string.charCodeAt(i);
				hash = ((hash << 5) - hash) + char;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;

		},

	});
	return BoozeView;
});