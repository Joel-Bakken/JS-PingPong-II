$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
      var endNumber = parseInt($("#endNumber").val());
        function pingpong() {
          for (var startNumber = 1; startNumber <= endNumber; startNumber++) {
            if (startNumber % 5 === 0 && startNumber % 3 === 0) {
              print('pingpong');
            } else if (startNumber % 3 === 0) {
              print('ping');
            } else if (startNumber % 5 === 0) {
              print('pong');
            } else {
              print(resuts);
            }
          }
        }
      var results = document.getElementById('results');
      function print(r) {
        r.innerHTML += s + '<br>';
      }
    });
});
