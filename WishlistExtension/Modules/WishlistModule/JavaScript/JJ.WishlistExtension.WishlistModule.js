define(
    'JJ.WishlistExtension.WishlistModule',
    [
        'JJ.WishlistExtension.WishlistModule.View',
        'Facets.ItemCell.View',
        'Product.Model',
        'Item.Model'
    ],
    function (
        WishlistModuleView,
        FacetsItemCellView,
        ProductModel,
        ItemModel
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

                                this.model = new ProductModel({
                                    item: new ItemModel(_.extend({}, this.model.attributes)),
                                    quantity: 1
                                });
								
                                return new WishlistModuleView({
									model: this.model,
                                    application: this.options.application
                                });
                            }
                        }
                    );

                    _.extend(FacetsItemCellView.prototype, {
                        initialize: _.wrap(FacetsItemCellView.prototype.initialize, function (fn) {
                            fn.apply(this, _.toArray(arguments).slice(1));

                            this.once("afterViewRender", () => {
                                this.$el.find('.facets-item-cell-grid-details').after('<div data-view="WishlistIconView"></div>');
								this.$el.find('.facets-item-cell-table-content-wrapper').after('<div data-view="WishlistIconView"></div>');
								this.$el.find('.facets-item-cell-list-right').after('<div data-view="WishlistIconView"></div>');
                            });
                        }),
                    });
                }
            }
        };
    }
);