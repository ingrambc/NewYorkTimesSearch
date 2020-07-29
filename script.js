src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";



  searchTerm = "search here";
  queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key=pUEZfbiM5DRsQV7ZdaVpCdAVjVYAgWJ2";

  $.ajax({  
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
  });