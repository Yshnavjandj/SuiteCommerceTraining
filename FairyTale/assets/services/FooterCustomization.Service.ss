
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.FairyTale.FooterCustomization.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.FairyTale.FooterCustomization.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}