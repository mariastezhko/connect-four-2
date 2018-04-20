var player1_moves = [];
var player2_moves = [];
var movesnum = 0;

function checkCircle(column_num, classname, player) {

	for (var i = 0; i < 7; i++) {

		if (column_num === "col-" + i) {
      console.log("found")

			var pos = document.getElementsByClassName("col-" + i);
			var all_pos = jQuery.makeArray(pos);

			for (var j = all_pos.length - 1; j > -1; j--) {

				if (all_pos[j].getAttribute("data-name") === "na"){
          console.log(all_pos[j]);
          console.log(player);
					make_move (all_pos[j], classname, player);
					break;
				}
			}
		}
	}
}


function make_move(pos, classname, player) {

	if (player === "player1") {

		player1_moves.push(parseInt($(pos).attr("data-value")));

		$(pos).addClass(classname);
		$(pos).attr("data-name", player);

	} else {

		player2_moves.push(parseInt($(pos).attr("data-value")));

		$(pos).addClass(classname);
		$(pos).attr("data-name", player);

	}
}

function moves() {

	var $all_circles = $(".circle");
	var player_turn = 1;

	$.each($all_circles, function(index, value) {

		$all_circles.eq(index).click(function() {
      console.log("hi")
			if ( $(this).attr("data-name") === "na") {
        console.log("na")
				if (player_turn === 1) {
          console.log("1");
          console.log($(this).attr("class").split(" ")[1])
					checkCircle($(this).attr("class").split(" ")[1], "circle-blue", "player1");
					player_turn = 2;
					movesnum ++;

          check_if_won($(this).attr("class").split(" ")[1], "player1");

				} else {
					checkCircle($(this).attr("class").split(" ")[1], "circle-red", "player2");
					player_turn = 1;
					movesnum ++;

          check_if_won($(this).attr("class").split(" ")[1], "player2");

				}

		 	}

		});

	});

}
