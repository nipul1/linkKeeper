// js code for preparing the links to be shown on page load for links.html
function showDetails(key) {
  document.getElementById("contentDetail" + key).innerText = "heading changed";
  var displayStatus = document.getElementById("contentDetail" + key).style
    .display;
  if (displayStatus == "inline-block") {
    document.getElementById("contentDetail" + key).style.display = "none";
    return;
  }
  allLinksArray = JSON.parse(localStorage.getItem("random"))[key];
  var listOfArticlesHtml = "";
  allLinksArray.forEach(function (value) {
    listOfArticlesHtml += '<ul sytle= "list-style-type: disc; " >';
    listOfArticlesHtml +=
      '<li><a href=/"' + value + '/">' + value + "</a></li>";
    listOfArticlesHtml += "</ul>";
  });
  document.getElementById("contentDetail" + key).innerHTML = listOfArticlesHtml;
  document.getElementById("contentDetail" + key).style.display = "inline-block";
}

function showStoredLinks() {
  obj = JSON.parse(localStorage.getItem("random"));
  var htmlCode = "";
  htmlCode += '<ul style="list-style-type: none;">';
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    htmlCode += '<ul sytle= "list-style-type: disc; " >';
    var buttonId = "btn" + key;
    htmlCode += '<button id="';
    htmlCode += buttonId;
    htmlCode += '"class="customBtn" onClick = showDetails("' + key + '")';
    htmlCode += ">";
    htmlCode += key;
    htmlCode += "</button>";
    var contentDetailId = "contentDetail" + key;
    htmlCode += '<div style="display:block;" id="';
    htmlCode += contentDetailId;
    htmlCode += '"class="contentDetail"></div>';
    htmlCode += "</ul>";
  });
  htmlCode += "</ul>";
  // console.log(htmlCode);
  document.getElementById("contentPara").innerHTML = htmlCode;
}

function countStoredLinks() {
  obj = JSON.parse(localStorage.getItem("random"));
  var topicCount = Object.keys(obj).length;
  var htmlCountCode = topicCount;
  if (topicCount > 1) htmlCountCode += " topics ";
  else htmlCountCode += " topic ";
  totalArticleCount = 0;
  Object.keys(obj).forEach(function (key) {
    totalArticleCount += obj[key].length;
  });
  htmlCountCode += " and ";
  htmlCountCode += totalArticleCount;
  if (totalArticleCount > 1) htmlCountCode += " articles covered";
  else htmlCountCode += " article covered";
  console.log(htmlCountCode);
  document.getElementById("counter").innerText = htmlCountCode;
}

window.onload = function () {
  if (localStorage.getItem("random") == null) {
    localStorage.setItem("random", JSON.stringify({}));
  }
  countStoredLinks();
  showStoredLinks();
};
