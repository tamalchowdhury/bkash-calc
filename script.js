$(document).ready(function() {
		var btn = $("input[name=submit]");
		$(btn).click(function() {
		$("#result").hide(0);
		$("#result1").hide(0);
		var $b = $("input[name=bkashamount]").val();
		var $cashout = function() {
			if ($b > 0) {
				return Math.floor($b - $b * 1.85/100); 
			}
		}
		var $c = $cashout();
		var $charge = function() {return Math.floor($b - $c)}
		$("#result").ready(function() {
			if ($b > 25472) {
				$("#result").html("<div style='color:red'>You cannot cashout more than TK 25,000 per day!</div>");
				$("#result1").html(""); 
			} else if ($b < 49) {
				$("#result").html("<div style='color:red'>You cannot cashout less than TK 50!</div>");
				$("#result1").html("");
			} else if ($b >= 49) {
				$("#result").html("You can cashout TK: " + $cashout());
				$("#result1").html("Agent will take TK: " + $charge());
			} else {
				$("#result").html("<div style='color:orange'>Please enter numbers only!</div>");
				$("#result1").html("");
			}
			$("#result").show("slow");
			$("#result1").show("slow");
		});

	});

});