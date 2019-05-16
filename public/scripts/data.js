new Vue({
	el: "#app",
data: {
  show: "schedule"
}
});

function tabData(section, tablink, tabId, evt) {
    var i, x, tablinks;
    x = document.getElementsByClassName(section);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(tablink);
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}


function hideDiv(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction(id) {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
	hideDiv(id);
}

function myFn(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function getGameId(event) {
    gameId = event.target.parentElement.id;
}

document.getElementById("myLink").click()
document.getElementById("myLink1").click()
document.getElementById("myLink2").click()
document.getElementById("myLink3").click()