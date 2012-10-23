$(function(){
	
	var colors =[];
	var animals =[];
	var people =[];
	
	var response = prompt('Do you want to create an (a)nimal, or (p)eople, or (c)olor or (q)uit');
	while(response !='q')
	{
		var coun= prompt('How many would you like?');
		count = parseInt(count);
		
		if(response == 'a')
		{
			for(var i = 0, i < count; i++)
			{
				var selection = prompt('Enter an animal?');
				animals.push(selection);
			}
			
		}
		else if(response == 'p')
		{
			for(var i = 0, i < count; i++)
			{
				var selection = prompt('Enter an person?');
				people.push(selection);
			}
		}
		else if(response == 'c')
		{
			for(var i = 0, i < count; i++)
			{
				var selection = prompt('Enter an color?');
				colors.push(selection);
			}
			
		}
		
		
		response = prompt('Do you want to create an (a)nimal, or (p)eople, or (c)olor or (q)uit');
	}
	
	var response = prompt('Do you want to remove an (a)nimal, or (p)eople, or (c)olor or (q)uit');
	
	while(response != 'q')
	{
			var coun= prompt('How many would you like?');
			count = parseInt(count);

			if(response == 'a')
			{
				console.log('Animals : ' + animals);
				var del = prompt('Which one do you want to delete?');
				var index = animals.indexOf(del);
				animals.splice(index, 1);
			}
			else if(response == 'p')
			{
				console.log('people : ' + people);
				var del = prompt('Which one do you want to delete?');
				var index = people.indexOf(del);
				people.splice(index, 1);
			
			}
			else if(response == 'c')
			{
				console.log('colors : ' + colors);
				var del = prompt('Which one do you want to delete?');
				var index = colors.indexOf(del);
				colors.splice(index, 1);
				

			}
		
		
		var response = prompt('Do you want to remove an (a)nimal, or (p)eople, or (c)olor or (q)uit');
	}
	
	console.log('here are your colors' + colors);
	console.log('here are your colors' + animals);
	console.log('here are your colors' + people);
	
	
	
})