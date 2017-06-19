
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();


 function pingpong() {
    var results = [startNumber, endNumber];
    var endNumber = parseInt($("#endNumber").val());

      for (var startNumber = 1; startNumber <= endNumber; startNumber++) {
        if (startNumber % 5 === 0 && startNumber % 3 === 0) {
          $("#results").push('pingpong');
        } else if (startNumber % 3 === 0) {
          $("#results").push('ping');
        } else if (startNumber % 5 === 0) {
          $("#results").push('pong');
        } else {
          $("#results").push(results);
        }
      }
      $("#btn").click(pingpong); {
         $("#result").text(result);
      }

    }

  });
});
