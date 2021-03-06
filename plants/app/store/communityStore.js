Ext.define('plants.store.communityStore', {
	extend: 'Ext.data.Store',
	requires: ['plants.model.communityModel'],
	
	config: {
		pageSize: 5,
		currentPage: 1,
        autoLoad: true,
        clearOnPageLoad: true,
        
        model: 'plants.model.communityModel',
        storeId: 'communityStore',

        sorters: [{
            property: 'number',
            direction: 'DESC'
        }],
        
        proxy: {
            type: 'jsonp',
            url: 'http://14.63.218.122/gallery.json.php',
            
//            pageParam: 'page',
//            limitParam: 'rpp',
            
//            extraParams: {
//                q: 'sencha'
//            },
            
            reader: {
                type: 'json',
                totalProperty : 'total'
            }
        }
    }
});