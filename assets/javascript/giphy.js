// getting the jquery
$(document).ready(function(){

//function to make the button click work
$("button").on("click", function() {

  //making a var to grab the data from the api
  var food = $(this).attr("data-food");

  // making the api into a variable
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    food + "&api_key=pHe22vfnbz7n169kkPP61DSzvsGWYINk&limit=10";

  // Using ajax to grab the query
  $.ajax({
      url: queryURL,
      method: "GET"
    })

    // calling a function to make the query do something
    .then(function(response) {
      
      // creating a variable to save the data that is in the api
      var results = response.data;

      //makes it so the gifs are deleted after a new button is pressed
      $("#info").empty();

      // Looping through each result so that it 10 gifs show
      for (var i = 0; i < results.length; i++) {

        // Creating a div tag
        var foodDiv = $("<div>");

        // Creating a paragraph tag
        var score = $("<p>").text("Rating: " + results[i].rating);

        // Creating an image tag
        var foodImage = $("<img>");

        // Setting the src attribute
        foodImage.attr("src", results[i].images.fixed_height.url);

        // Appending both score and foodImage to the div
        foodDiv.append(score);
        foodDiv.append(foodImage);

        // placing the images in the infor id
        $("#info").prepend(foodDiv);
      }
    });
});


})


  
