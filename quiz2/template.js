$(function(){


	$('#create').click(create_boxes);
	
})

function create_boxes ()
{
	var num = $('#n_boxes').val();
	num_boxes = parseInt(num);
	console.log(num_boxes);

	for (var i = 0; i < num_boxes; i++)

		{
			var box = $('<div>');
			x = i+1;
			box.text(x);
			box.addClass('box_class');
			$('#boxes').append(box);
		}
}

