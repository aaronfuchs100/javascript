$(function(){

	$('#add_animal').click(add_animal);
	
})

function add_animal()
{
	var animal = {}; // creating an object, put things inside
	animal.name = $('#animal_name').val();
	animal.color = $('#animal_color').val(); // remeber the #
	console.log(animal.color); // log on the consol
	animal.image = $('#animal_image').val(); // source the image tag
	insert_animal(animal); // use the isert animal function to add the animal into the 

}

function insert_animal(animal) //animal is a variable that we made up
{
	var d = $('<div>'); // create a new div
	d.addClass('animal'); // add the styling to the div, animal class in css
	d.css('background-color', animal.color); // change the background color to what ever was entered in the input field
	d.text(animal.name); //name with whatever was in the input field
	$('#animals').prepend(d); //will put this dog at the top of the animals DIV

	var i = $('<img>'); // create a new image tag 
	i.attr('src', animal.image); // attribute function 
	d.append(i); // put it before the previous image tag

	$('#animals').prepend(d); // not sure what prepend does

}