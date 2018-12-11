var xmlhttp4 = new XMLHttpRequest();
xmlhttp4.open('GET', 'https://fierce-bayou-44059.herokuapp.com/appstatus?_=' + new Date().getTime(), true);
xmlhttp4.onreadystatechange = function() {
    if (xmlhttp4.readyState == 4) {
        if(xmlhttp4.status == 503) {
          var div = document.getElementById('etnwidget')
          div.textContent = 'Oops! It seems the ETN Instant Payment system is currently unavailable... Please try again later.'
          div.style.cssText = 'background: rgba(255,0,0,0.2);'
        }
      }
    }
