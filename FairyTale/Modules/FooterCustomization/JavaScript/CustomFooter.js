define('CustomFooter',['CustomFooterMod.View'],function(CustomFooterModView) {
    return {
        mountToApp: function(container) {
            let layout = container.getComponent("Layout");

            if(layout) {
                layout.addChildView('Footer', function() {
                    return new CustomFooterModView();
                });
            }
        }
    }
});
