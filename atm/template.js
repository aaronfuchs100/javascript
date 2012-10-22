$(function(){
	
	var balance = 1000;
	var action = prompt('What do you want to do (d)eposit or (w)ithdraw or (q)uit');
	while(action != 'q')
	{
		if(action == 'd')
		{
			var amountd = prompt('how much would you like to deposit');
			amountd = parseInt(amountd);
			balance = balance + amountd;
			console.log('your balance is $' + balance);
		}
		else if(action == 'w')
		{
			var amountw = prompt('how much would you like to withdraw');
			amountw = parseInt(amountw);
			balance = balance - amountw;
			console.log('your balance is $' + balance);
		}
		
		var action = prompt('What do you want to do (d)eposit or (w)withdraw or (q)uit');
	}
	
	console.log('Thank you for ATMING with us your balance is $' + balance + '.00');
	
	
});