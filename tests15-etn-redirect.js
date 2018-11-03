window.onload=function what(){
  var currency = "JPY"
  var currencycode = currency.toLowerCase()
  var price = {}
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'https://supply.electroneum.com/app-value-v2.json', true);


  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
          if(xmlhttp.status == 200) {
              var price1 = JSON.parse(xmlhttp.responseText);
              price = price1["price_"+currencycode]
            alert(price)
           }
      }
  };
  xmlhttp.send(null);
  
var scr=document.createElement('script');
scr.src='https://rawcdn.githack.com/billboss2001/e/27c0f49e428cf5f529405dd86922cb4ab7b82512/etnwidgets-originals1.js';
document.body.appendChild(scr);
var vendoraddress = 'etn-it-0abc123def456'
var paymentID = '5b4dc07ce2'
var amount = '7.89'
var testdiv = document.getElementById("etnwidget");
  testdiv.innerHTML = "<div data-etn-vendor='"+vendoraddress+"/"+paymentID+"/"+amount+"' data-etn-lang='en'></div>"

}
