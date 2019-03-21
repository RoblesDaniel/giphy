// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
var searchInput=$("input").val();
console.log(searchInput);
  var search="https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&rating=pg&api_key=dc6zaTOxFJmzC";
  $.ajax({
        url: search,
        method: "GET",
        success: function(response) {
            var pic_url = response.data[0].images.original.url;
            $("body").append('<img src="' + response.data[0].images.original.url + '">');
        }
    });

});

