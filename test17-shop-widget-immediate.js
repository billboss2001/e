if (document.getElementsByClassName("payment-method-list__item__info")[0].innerHTML.indexOf("Electroneum") != -1 ) {
var currency = Shopify.checkout.currency
var paymentID = Shopify.checkout.order_id
  var currencycode = currency.toLowerCase()
  var price = {}
  var amount
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
amount = totalcost
var testdiv = document.getElementById("etnwidget");
  testdiv.innerHTML = "<div data-etn-vendor='"+vendoraddress+"/"+paymentID+"/"+amount+"' data-etn-lang='en'></div>"
           }
      }
  };
  xmlhttp.send(null);
  
       var pmt
  var pmtver
  var xmlhttp2 = new XMLHttpRequest();
  function getPaymentVer () {
xmlhttp2.open('GET', 'https://fierce-bayou-44059.herokuapp.com/etnpayments.json?_=' + new Date().getTime(), true);


xmlhttp2.onreadystatechange = function() {
   if (xmlhttp2.readyState == 4) {
       if(xmlhttp2.status == 200) {
           pmt = JSON.parse(xmlhttp2.responseText);

           for (var i = 0; i < pmt.length; i++){
if (pmt[i].payment_id == paymentID){
pmtver = pmt[i].amount
}
}

        }
   }
};
xmlhttp2.send(null);
if (pmtver == undefined) {
  setTimeout(getPaymentVer, 2000)

} else if (pmtver == amount){
  swal({
    title: '<div style = "font-family:verdana;">Payment Complete</div>',
    html: '<div style = "font-family:verdana;">Your order has been accepted</div>',
    type: 'success'
  })
}
}
getPaymentVer()
}
