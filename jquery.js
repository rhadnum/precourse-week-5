$(document).ready(function(){

	var score = 0;
	var inc_counter = 0;
	var scoreValue = "#score";

	$("li").click(function(){

		if( $(this).hasClass("correct")){


			if($(this).index() === 0){
				$(this).css("cursor","default");
				$(this).next().removeClass('incorrect');
				$(this).next().addClass('unchosen');
				$(this).next().css("cursor","default");
				$(this).next().next().removeClass('incorrect');
				$(this).next().next().addClass('unchosen');
				$(this).next().next().css("cursor","default");
			}


			else if($(this).index() === 1){
				$(this).css("cursor","default");
				$(this).prevAll().removeClass()
				$(this).prevAll().css("cursor","default");
				$(this).prevAll().addClass('unchosen')
				$(this).next().removeClass();
				$(this).next().css("cursor","default");
				$(this).next().addClass('unchosen')
			}

			else if($(this).index() === 2){
				$(this).css("cursor","default");
				$(this).prevAll().removeClass();
				$(this).prevAll().css("cursor","default");
				$(this).prevAll().addClass('unchosen');
				$(this).next().removeClass();
				$(this).next().css("cursor","default");
				$(this).next().addClass('unchosen');
			}
			

			$(this).removeClass("correct");
			$(this).addClass("chosen");
			score ++;

			$('#score').html(score);
			$('title').html("Multiple Choice Quiz - " + score)


			
			
		}

		else if( $(this).hasClass("incorrect")){

			$(this).removeClass('incorrect');
			$(this).addClass('incorrect-chosen');


			if($(this).index() === 0){
				$(this).css("cursor","default");
				$(this).nextAll().removeClass();
				$(this).nextAll().css("cursor","default");
				$(this).nextAll().addClass('unchosen');
			}

			else if($(this).index() == 1){
				$(this).css("cursor","default");
				$(this).prevAll().removeClass();
				$(this).prevAll().css("cursor","default");
				$(this).prevAll().addClass('unchosen');

				$(this).next().removeClass();
				$(this).next().css("cursor","default");
				$(this).next().addClass('unchosen');
				
			}

			else if($(this).index() == 2){
				$(this).css("cursor","default");
				$(this).prevAll().removeClass();
				$(this).prevAll().css("cursor","default");
				$(this).prevAll().addClass('unchosen');
			}

			

		}

		

	})
	
	$('#reload').click(function(){


		location.reload(true);


	})

})