// infos
function info(){
  alert("The website is still under construction.")
}



// copied mail
function copyMail() {
  /* Get the text field */
  let copyText = document.getElementById("myInput");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
  /* Alert the copied text */
  alert("text copied: " + copyText.value);
}

// Loading
function onReady(callback) {
  let intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
      // alert("Actually the we");
    }
  }, 2000);
}
// Home page loading 
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});

// Filter projects page
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



