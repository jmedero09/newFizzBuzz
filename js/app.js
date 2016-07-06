var x = parseInt(prompt("Put in a number"));
//document.write(x);
function fizz(number){
	

	for(var i=1;i<=number;i++){
		if((i%3===0)&&(i%5===0)){
			document.write("fizzBuzz"+"<br>");
		}
		else if(i%3===0){
			document.write("fizz"+"<br>");
		}
		else if(i%5===0){
			document.write("buzz"+"<br>");
		}
		else{
			document.write(i+"<br>");
		}		
	}
}


fizz(x);





































