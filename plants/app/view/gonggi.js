Ext.define('plants.view.gonggi',{
	extend : 'Ext.Panel',
	xtype: 'gonggi',
	
	config : {
		title : '공지사항',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>공지사항</h2>' ].join("")
	}
});