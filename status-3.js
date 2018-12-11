console.log("I work")

var xmlhttp4 = new XMLHttpRequest();
xmlhttp4.open('GET', 'https://fierce-bayou-44059.herokuapp.com/appstatus?_=' + new Date().getTime(), true);
xmlhttp4.onreadystatechange = function() {
    if (xmlhttp4.readyState == 4) {
        if(xmlhttp4.status == 503) {
            console.log("successful execution: " + xmlhttp4.status)
          var div = document.getElementById('etnwidget')
          div.textContent = 'Oops! It seems the ETN Instant Payment system is currently unavailable... Please try again later.'
          div.style.cssText = 'background: rgba(255,0,0,0.2);'
        } else {
            console.log("js failed: " + xmlhttp4.status)
        }
      }
    }

xmlhttp4.send(null)
