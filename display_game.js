$(document).ready(function() {


 	function play() {

 		$("#submit").click(function() {

      console.log("hi")

 			$("input").css("display", "none");
 			$("#submit").remove();

 			$("#player-color").html(
 				$("#player1").val() + " is Blue, " + $("#player2").val() + " is Red</br></br>" +
 				$("#player1").val() + " goes first"
 				);

	 		 $("#player-color").css("display", "block");
	 		 $("#player-color").css("margin", "20px 0");

	 		display_game();

 		});

 	}

	function display_game() {

		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 7; j++) {
				var $circle = $("<div class='circle' data-name='na'></div>");
				$circle.addClass("col-" + j);
				$circle.addClass("row-" + i);
				$(".row").append($circle);
			}
		}
    $(".row").css("background-color", "silver");

		var $circles = $(".circle");

		for (var i = 0; i < $circles.length; i++) {
			$circles.eq(i).attr("data-value", i);
		}

		moves();

	}

  play ();

});
