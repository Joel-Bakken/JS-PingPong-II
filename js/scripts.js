//Business Logic

function pingpong(endNumber) {
    

      for (var startNumber = 1; startNumber <= endNumber; startNumber++) {
        if (startNumber % 5 === 0 && startNumber % 3 === 0) {
          $("#results").append(' ping-pong, ');
        } else if (startNumber % 3 === 0) {
          $("#results").append(' ping, ');
        } else if (startNumber % 5 === 0) {
          $("#results").append(' pong, ');
        } else {
          $("#results").append(" " + startNumber + ", ");
        };
      };
};




//User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userNumber = parseInt($("#endNumber").val());
    pingpong(userNumber);
    event.preventDefault();
  });
});

 

