var counter = 0;
var photo = [];

$(function(){

	$('#add').click(search_flickr);

});

function search_flickr() 
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71318b6fbd0a75b86300d5c205704f73&tags='+search+'&format=json&jsoncallback=?', flickrResults);
	
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);
	setInterval(display_more, 500);
}

function getPhoto(index, item)
{
	photo[index]=item;

}

function display_more() {
	counter++;
	$('#counter').text(counter);

	console.log(photo[counter]);

	var item = photo[counter];
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src',src);
	div.append(img);

	$('#photos').prepend(div);
}
