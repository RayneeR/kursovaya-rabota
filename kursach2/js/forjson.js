const apiToken = "https://run.mocky.io/v3/7b92b782-f3ca-48ee-9f56-7a11db85db3d";
fetch(apiToken)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data[0]["url"]);
    var images = document.getElementsByClassName("image-json");
    for (let i = 0; i < images.length; i++) {
      images[i].src = data[i]["url"];
    }
  })
  .then(function () {
    console.log(document.querySelector(".testJson"));
  });