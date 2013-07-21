//JQuery Client Side File Upload - Future Event Actions
// This plug-in helps to Read the file locally in our web clients - Browsers

//Plug-in - FileDelegate
//Name: A.Kiran Kumar
//Comapny: Kefex Studios
(function($){
    $.fn.fildelegate = function(options)
    {
        $('#supercontainer').delegate('.form-delegate','change',function(){   
            var files = this.files;
			var memory =(((files.item(0).size)/1024)/1024);
			var typ = files.item(0).type;
				if( memory <= 1)
				{
					if(typ.match('image/*'))
					{
						var read = new FileReader();
						read.onload = function()
						{
							return function(e)
							{
								$('#container').css({'background':'url('+e.target.result+') no-repeat center #ccc', 'background-size':'100% 100%'});
							};			
						}(files.item(0));
						read.readAsDataURL(files.item(0));
					}
				}
                
		});   
    }
})(jQuery);

