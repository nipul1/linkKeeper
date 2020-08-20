function storeTheLink() {
  var linkToBeStored = document.getElementById("completeLinkTextBox").value;
  var topicName = document.getElementById("topicNameTextBox").value;
  var obj = JSON.parse(localStorage.getItem("random"));
  arr = [];
  if (obj.hasOwnProperty(topicName)) {
    console.log("present " + topicName);
    arr = obj[topicName];
  }
  arr.push(linkToBeStored);
  //   arr.add(linkToBeStored);
  //   console.log(arr);
  obj[topicName] = arr;
  localStorage.setItem("random", JSON.stringify(obj));
  document.getElementById("completeLinkTextBox").value = "";
  document.getElementById("topicNameTextBox").value = "";
}

window.onload = function () {
  if (localStorage.getItem("random") == null) {
    localStorage.setItem("random", JSON.stringify());
  }
};
