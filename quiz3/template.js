$(function(){

	$('#addcolors').click(make_boxes);
	$('#boxes').on('mouseenter','.box_class', hover_on);
	$('#boxes').on('mouseleave','.box_class', hover_off);
	
})

function make_boxes ()
{
	var colors = $('#string').val();
	console.log(colors);
	var colors_array = colors.split(', ');
	var length = colors_array.length;
	console.log(length);

	for(var i = 0; i < length; i++)
	{
		var box =$('<div>');
		box.addClass('box_class');
		box.css('background-color', colors_array[i]);
		$('#boxes').append(box);

	}

}

function hover_on()
{
	var b_color = $(this).css('background-color');
	$("#box1").css('background-color',b_color);


}

function hover_off()
{
	$("#box1").css('background-color','white');

	
}