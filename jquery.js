$(document).ready(function(){

	var score = 0;
	var counter = 0;
	var scoreValue = "#score";

	$("li").click(function(){

		if( $(this).hasClass("correct")){

			$(this).css("background-color", "green")
			$(this).css("color","white")
			//$("li").removeClass("incorrect")
			score = score + 1;
			counter = counter + 1;


			$('#score').html(score)
			
		}

		else if( $(this).hasClass("incorrect")){

			$(this).css("background-color", "red")
			$(this).css("color","white")
			counter = counter + 1;
		}

		if(counter === 1){
			$("li").removeClass("correct");
			$("li").removeClass("incorrect");

		}

	})


})