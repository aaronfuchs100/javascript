var selected = null;


$(function(){

	$('#addcolors').click(add_colors);
	$('#boxes').on('mouseenter','.box', hover_on);
	$('#boxes').on('mouseleave','.box', hover_off);
	$('#boxes').on('click','.box', selection_on);
	$('#boxes').on('click','.selected_box', selection_off);
	$('#boxes').dblclick(remove);
	
})

function remove()
{
	$(this).removeClass('box');
}

function add_colors()
{

	var colors = $('#string').val();
	console.log(colors);

	var colors_array = colors.split(', ');

	var length = colors_array.length;
	console.log(length);

	for(var i = 0; i < length; i++)
	{
		var box = $('<div>'); //create a div
		box.addClass('box');
		box.css('background-color', colors_array[i]);
		$('#boxes').append(box); //adds these elements into the div
	}
}

function hover_on()
{
	var b_color = $(this).css('background-color');
	console.log(b_color);
	$("#string").css('background-color',b_color);

}

function hover_off()
{
	$("#string").css('background-color','white');

}

function selection_on()
{
	var selected = $(this);
	selected.addClass('selected_box');
}

function selection_off()
{
	var selected = $(this);
	selected.removeClass('selected_box');
}








