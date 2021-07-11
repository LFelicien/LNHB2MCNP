document.addEventListener('DOMContentLoaded', function () {
document.querySelector('button').addEventListener('click', onclick, false)
 
  function onclick () {
  var alpha = document.getElementById("ABox").checked; 
  var gamma = document.getElementById("GammaBox").checked; 
  var xray = document.getElementById("XBox").checked; 
  var partlist=[alpha,gamma,xray]
chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
chrome.tabs.sendMessage(tabs[0].id,{mylist:partlist})
 })
   }
}, false)
