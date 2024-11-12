// @module JJ.WishlistExtension.WishlistModule


define('JJ.WishlistExtension.WishlistModule.View'
,	[
		'jj_wishlistextension_wishlistmodule.tpl',

		'ProductDetails.AddToProductList.View',

		'Backbone'
	]
, function (
		jj_wishlistextension_wishlistmodule_tpl,

		ProductDetailsAddToProductListView,

		Backbone
)
{
	'use strict';

	// @class JJ.WishlistExtension.WishlistModule.View @extends Backbone.View
	let WishlistModuleView =  Backbone.View.extend({

		template: jj_wishlistextension_wishlistmodule_tpl,

		initialize: function(options) {

			this.isInWishlist = options.isInWishlist || false;

			
			this.model = options.model;
			const fixedModel = this.model;

			//get all matrix childs
			const matrixDetails = []

			this.model.get('item').get("_matrixChilds").each(function(matrixItem) {

				console.log("internal id of matrix item: ",matrixItem.get('internalid'));

				const matrixId = matrixItem.get('internalid');
				const matrixColor = matrixItem.get('custitem_gen_color') || 'N/A';
				const matrixSize = matrixItem.get('custitem_gen_size') || 'N/A';

				matrixDetails.push({
					id: matrixId,
					color: matrixColor,
					size: matrixSize
				});

				// if(matrixItem.has('custitem_gen_color')) {
				// 	matrixColor = matrixItem.get('custitem_gen_color');
				// 	console.log("color: ",matrixColor);
				// }
				// if(matrixItem.has('custitem_gen_size')) {
				// 	matrixSize = matrixItem.get('custitem_gen_size');
				// 	console.log("size: ",matrixSize);
				// }

			});

			this.matrixDetails = matrixDetails;

			if(this.model.get('options').models) {
				this.model.get('options').each(function(option) {

					if(option.get('cartOptionId') == 'custcol_gen_color') {

						fixedModel.setOption('custcol_gen_color',option.attributes.values[1]['internalid']);

					}
					if(option.get('cartOptionId') == 'custcol_gen_size') {

						fixedModel.setOption('custcol_gen_size',option.attributes.values[1]['internalid']);
			
					}
				})
			}

			this.model = fixedModel;

			console.log("matrix items: ",this.model.get('item').get("_matrixChilds"))

			console.log("model: ",this.model);
		},

		childViews: {
			AddToProductList: function() {
				return new ProductDetailsAddToProductListView({
					model: this.model,
					application: this.options.application
				});
			}
		},

		events: {
			'click #openPopup': 'showOptionPopup',
			'click #closePopup': 'hideOptionPopup',
			'click #popup': 'hideOnOutsideClick'
		},
	
		showOptionPopup: function () {
			this.$('#popup').css('display', 'block');
		},
	
		hideOptionPopup: function () {
			this.$('#popup').css('display', 'none');
		},
	
		hideOnOutsideClick: function (event) {
			if (event.target.id === 'popup') {
				this.$('#popup').css('display', 'none');
			}
		},

		getContext: function() {
			return {
				// isInWishlist: this.isInWishlist,
				model: this.model,
				matrixDetails: this.matrixDetails
			};
		}

	});

	return WishlistModuleView;
});
