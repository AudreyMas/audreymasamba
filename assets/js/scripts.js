// infos
function info(){
  alert("The website is still under construction.")
}



// copied mail
function copyMail() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");
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
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
      // alert("Actually the we");
    }
  }, 2000);
}
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});

// Filter


