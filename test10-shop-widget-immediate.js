if (document.getElementsByClassName("payment-method-list__item__info")[0].innerHTML.indexOf("Electroneum") != -1 ) {
  alert('I have etn')
var currency = Shopify.checkout.currency
  var currencycode = currency.toLowerCase()
  var price = {}
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'https://supply.electroneum.com/app-value-v2.json', true);


  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
          if(xmlhttp.status == 200) {
              var price1 = JSON.parse(xmlhttp.responseText);
              price = price1["price_"+currencycode]
            var cost = Shopify.checkout.total_price
            var totalcost = Math.round(cost / price * 100) / 100
            var scr=document.createElement('script');
scr.src='https://rawcdn.githack.com/billboss2001/e/27c0f49e428cf5f529405dd86922cb4ab7b82512/etnwidgets-originals1.js';
document.body.appendChild(scr);
var vendoraddress = document.getElementById("vendorAddress").innerHTML 
var paymentID = (function co(lor){   return (lor +=
[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
&& (lor.length == 10) ?  lor : co(lor); })('');
var amount = totalcost
var testdiv = document.getElementById("etnwidget");
  testdiv.innerHTML = "<div data-etn-vendor='"+vendoraddress+"/"+paymentID+"/"+amount+"' data-etn-lang='en'></div>"
           }
      }
  };
  xmlhttp.send(null);
} else {
  alert('not this time')
}
