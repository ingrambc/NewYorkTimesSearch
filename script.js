
var apiKey = "";

var searchTerm = "search here";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key=pUEZfbiM5DRsQV7ZdaVpCdAVjVYAgWJ2";



function runQuery();




  $.ajax({  
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
  });