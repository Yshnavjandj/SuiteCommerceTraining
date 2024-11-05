
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.WishlistExtension.WishlistModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.WishlistExtension.WishlistModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}