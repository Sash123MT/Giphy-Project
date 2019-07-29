var giphyAPIKey = "yogh6mIixsmiqURza2Xoft5c3ozBqCM5";

function sendapirequest(){
  var input = document.getElementById("input").value;
  console.log(input);

  if (input === ""){return;}

  var url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyAPIKey}`;


fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var img = document.createElement("img");
    img.src = json["data"][0]["images"]["fixed_height"]["url"];
  })
}
