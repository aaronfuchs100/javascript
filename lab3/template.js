$(function(){
	
	var response = prompt('Do you want to create an (a)nimal, (c)olor or (q)uit');
	
	var colors = [];
	var animals =[];
	
	while(response != 'q')
	{
		if(response == 'a')
		{
			var no_animal = prompt('how many?');
			for(var i = 0; i <= no_animal; i++)
			{
				var animal_type = prompt('Please enter animal:');
				console.log('you just typed in :' + animal_type);
				animals.push(animal_type);
			}
			var response1 = prompt(" you want to (d)elete something or (q)uit?");
			console.log('you just typed in :' + response1);
		}
		else if(response == 'c')
		{
			var no_color = prompt('how many');
			for(var i = 0; i <= no_color; i++)
			{
				var color_name =prompt('Please enter color:');
				console.log('you just typed in :' + color_name);
				colors.push(color_name);
			}
			var response2 = prompt(" you want to (d)elete something or (q)uit?");
			console.log('you just typed in :' + response2);
		}
		
		
		
	}
	
	
})