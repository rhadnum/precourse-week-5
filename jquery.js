$(document).ready(function(){

	var score = 0;
	var counter = 0;
	var scoreValue = "#score";

	$("li").click(function(){

		if( $(this).hasClass("correct")){

			if($(this).index() === 0){
				var next = $(this).next()
				next.removeClass('incorrect');
				next.addClass('unchosen');
				next.next().removeClass('incorrect');
				next.next().addClass('unchosen');
			}


			else if($(this).index() === 1){
				$(this).prevAll().removeClass('incorrect')
				$(this).prevAll().addClass('unchosen')
				$(this).next().removeClass('incorrect');
				$(this).next().addClass('unchosen')
			}

			else if($(this).index() === 2){
				$(this).prevAll().removeClass('incorrect');
				$(this).prevAll().addClass('unchosen');
				$(this).next().removeClass('incorrect');
				$(this).next().addClass('unchosen');
			}
			

			$(this).removeClass("correct");
			$(this).addClass("chosen");
			score ++;

			$('#score').html(score);
			$('title').html("Multiple Choice Quiz - " + score)


			
			
		}

		if( $(this).hasClass("incorrect")){
			
			$(this).addClass('incorrect-chosen')

			counter ++;

			$('#counter').html(counter);
			

		}

		if(counter >= 5){
			location.reload(true);
		}

		

	})


})