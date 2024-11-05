define(
    'JJ.WishlistExtension.WishlistModule',
    [
        'JJ.WishlistExtension.WishlistModule.View',
        'Facets.ItemCell.View'
    ],
    function (
        WishlistModuleView,
        FacetsItemCellView
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
                let plp = container.getComponent('PLP');

                if (plp) {
                    // Extending FacetsItemCellView to add WishlistIconView as a child view
                    FacetsItemCellView.prototype.childViews = _.extend(
                        FacetsItemCellView.prototype.childViews || {},
                        {
                            'WishlistIconView': function () {
                                return new WishlistModuleView({
                                    container: container,
									isInWishlist: false
                                });
                            }
                        }
                    );

                    // Inject the data-view into the template after render
                    _.extend(FacetsItemCellView.prototype, {
                        initialize: _.wrap(FacetsItemCellView.prototype.initialize, function (fn) {
                            fn.apply(this, _.toArray(arguments).slice(1));

                            this.once("afterViewRender", () => {
                                this.$el.find('.facets-item-cell-grid-details').after('<div data-view="WishlistIconView"></div>');
								this.$el.find('.facets-item-cell-table-content-wrapper').after('<div data-view="WishlistIconView"></div>');
								this.$el.find('.facets-item-cell-list-right').after('<div data-view="WishlistIconView"></div>');
                            });
                        })
                    });
                }
            }
        };
    }
);