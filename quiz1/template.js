$(function(){

	$('#add').click(add);
	
})

function add()
{
	var num1 = $('#num1').val();
	num_1 = parseInt(num1);

	console.log(num_1);

	var num2 = $('#num2').val();
	num_2 = parseInt(num2);

	console.log(num_2);

	output = num_1 + num_2;
	$("#output").text(output);
}




