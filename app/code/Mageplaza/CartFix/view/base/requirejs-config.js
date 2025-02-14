var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Mageplaza_Customize/js/original-add-to-cart-mixin': false,
                'Mageplaza_CartFix/js/overwritten-add-to-cart-mixin': true
            }
        }
    }
};
