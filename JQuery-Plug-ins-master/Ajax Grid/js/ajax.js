$(function(){
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "content.php",
	}).done(function(data){
		$('.cont').empty();
		$('.cont').each(function(i){
			$(this).html(data[i]);
		});
		topGrid('.cont');
	});
});