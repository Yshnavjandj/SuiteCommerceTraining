define('CustomFooterMod.View',['SC.Configuration','Backbone','jQuery','custom_footer.tpl'], function(Configuration, Backbone, jQuery, custom_footer_tpl) {
    'use strict';

    return Backbone.View.extend({
        template: custom_footer_tpl,

        getContext: function () {
            let phone = Configuration.get('customfooter.phone');
            let email = Configuration.get('customfooter.email');
            let address = Configuration.get('customfooter.address');
            let quickLinks = Configuration.get('customfooter.quickLinks');
            let socialMediaLinks = Configuration.get('customfooter.socialMediaLinks');


            return {
                phone: phone,
                email: email,
                address: address,
                quickLinks: quickLinks,
                socialMediaLinks: socialMediaLinks
            };
        }
    });
})
