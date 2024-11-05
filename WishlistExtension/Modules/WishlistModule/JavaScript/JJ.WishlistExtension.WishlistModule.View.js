// @module JJ.WishlistExtension.WishlistModule


define('JJ.WishlistExtension.WishlistModule.View'
,	[
	'jj_wishlistextension_wishlistmodule.tpl'
	
	,	'JJ.WishlistExtension.WishlistModule.SS2Model'
	
	,	'Backbone'
	]
, function (
	jj_wishlistextension_wishlistmodule_tpl
	
	,	WishlistModuleSS2Model

	,	Backbone
)
{
	'use strict';

	// @class JJ.WishlistExtension.WishlistModule.View @extends Backbone.View
	let WishlistModuleView =  Backbone.View.extend({

		template: jj_wishlistextension_wishlistmodule_tpl,

		initialize: function(options) {
			this.isInWishlist = options.isInWishlist || false;
		},

		getContext: function() {
			return {
				isInWishlist: this.isInWishlist
			};
		}

	});

	return WishlistModuleView;
});
