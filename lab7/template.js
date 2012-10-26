$(function(){
	
	/*$('.a').hover(color_the_box1);*/
	$('.a').mouseenter(color_the_box1);
	$('.a').mouseleave(make_it_white);
	$('#add').click(add_node);
	$('#addcolors').click(add_colors);
	$('#boxes').on('hover','.box', make_pretty); 

	/*$('#boxes').hover(make_pretty); /*confused always make this body*/
	
	
});

function make_pretty()
{
	$(this).toggleClass('alert');
}

function add_colors()
{
	var count = $('#count').val();
	count = parseInt(count);
	for(var i = 0; i < count; i++)/* in this loop want to creat 5 boxes*/
	{
		var box = $('<div>');
		box.text(i);
		box.addClass('box');
		/*box.css('background-color', 'red');*/
		$('#boxes').append(box);

	}
}

function add_node() /* first want to know what we are building */
{
	var element =$('#element').val();
	var node = $('<' + element + '>'); /*creating an element here, not attached to the tree*/
	var css = $("#css").val();
	var text = $("#text").val();
	node.addClass(css);
	node.text(text); /*have a p tag with a class and text, still floating in space, attach*/
	$('#elements').prepend(node);
}



function color_the_box()
{
	
	/*$(this).css('bakcground-color','red');*/
	$(this).toggleClass('alert');
}

function color_the_box1()
{
	
	var color = $(this).text();
	$(this).css('background-color', color);
}

function make_it_white()
{
	$(this).css('background-color', 'white');
}

