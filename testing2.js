var quest = prompt("what do you want");


// function getNum(numb){
// 	for(var i=0; i<numb; i++){
// 		if(i%2 == 0){
// 			document.write(i);
			
// 		}
// 		else if(i%2==1){
// 			document.write(i);
// 		}

// 	}
// }
function calculate(){
	switch(quest){
		case "e":
			var num = prompt('input number');
			for(var i = 0; i < num; i++){
				if(i%2==0){
					document.write(i + "<br>");
				}
			}
		break;

		case "o":
			var num = prompt('input number');
			for(var i = 0; i<num; i++){
				if(i%2!= 0){
					document.write(i);
				}
			}
		break;

		case "p":
			var num = prompt('input the number');
	
			for(var i = 2; i<num;i++){
				var c=1;
				for(var j=2;j<i;j++){
					if(i%j==0){
						c=0;
						break;
					}
				}
				if(c==1)document.writeln(i);
			}
		break;

		default:
		alert("confused");

	}
}
calculate();