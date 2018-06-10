// // Grab the articles as a json
// $.getJSON("/articles", function(data) {
//     console.log("CONSOLE LOGGING ALL THE DATA: " + data)
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       // Display the apropos information on the page
//       $("#list").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//     }
//   });


//  I couldnt figure out how to save the articles

    //your code here
    $("#saveArticle").click(function() {
        var thisId = $(this).attr("data-id");
        $.ajax({
            method: "GET",
            url: "/articles/"+ thisId 
          })
            // With that done
            .then(function(data) {
              // Log the response
              var articleData = data;
              // Empty the notes section
              $.ajax({
                  method: "POST",
                  url: "/articles/saved",
                  hbsObject: {
                      _id: articleData._id,
                      title: articleData.title
                  } 
                })
                  // With that done
                  .then(function(hbsObject) {
                    // Log the response
                    console.log(hbsObject);
                    // Empty the notes section
                  });
            });


    })
