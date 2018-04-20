function check_if_won(column_num, player) {

	check_column (column_num, player);
	check_row (player);

	if (movesnum === 42) {

		$("#player-color").fadeOut();
		$(".row").fadeOut();

    $("#names").append("<h1 style='font-size: 50px;'>It's a Draw!</h1>");

    play_again ();

	}
}

function check_column (column_num, player) {

	for (var i = 0; i < 7; i++) {

		if (column_num === "col-" + i) {

			var pos = document.getElementsByClassName("col-" + i);

			var all_pos = jQuery.makeArray(pos);
      console.log("all pos", all_pos);

			for (var j = all_pos.length - 1; j > 1; j--) {


				if (all_pos[j].getAttribute("data-name") === player &&
					all_pos[j-1].getAttribute("data-name") === player &&
					all_pos[j-2].getAttribute("data-name") === player &&
					all_pos[j-3].getAttribute("data-name") === player) {

          isWinner(player);

					break;
				}
			}
		}
	}
}

function check_row(player) {

	if (player === "player1") {

		player1_moves.sort();

		for (var i = 0; i < player1_moves.length - 2; i++) {

			var first_move = player1_moves[i];
			var second_move = player1_moves[i+1];
			var third_move = player1_moves[i+2];
			var fourth_move = player1_moves[i+3];

			if (

				second_move === (first_match + 1) &&
				third_move === (second_match + 1) &&
				fourth_move === (third_match + 1) ) {

          isWinner(player);

			}
		}

	} else if (player === "player2") {

		player2_moves.sort();

		for (var i = 0; i < player2_moves.length - 2; i++) {

			var first_match = player2_moves[i];
			var second_match = player2_moves[i+1];
			var third_match = player2_moves[i+2];
			var fourth_match = player2_moves[i+3];

			if (

				second_match === (first_match + 1) &&
				third_match === (second_match + 1) &&
				fourth_match === (third_match + 1) ) {

          isWinner (player);

			}
		}
	}
}


function isWinner(player) {

	if (player === "player1") {

		player = $("#player1").val();
		$("#player-color").fadeOut();
		$(".row").fadeOut();

    $("#names").append("<h1 style='font-size: 50px;'>"+ player + " wins!</h1>").fadeIn();
    play_again ();

		winner = true;

	} else if (player === "player2") {

		player = $("#player2").val();

		$("#player-color").fadeOut();
		$(".row").fadeOut();

    $("#names").append("<h1 style='font-size: 50px;'>"+ player + " wins!</h1>");
    play_again ();

		winner = true;

	}
}

function play_again () {

    $("#names").append("<button id = 'play-again'>Play Again</button>");
    $("#play-again").click(function () {
    console.log("clicked");
    location.reload();
    })
}
