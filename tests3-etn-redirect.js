window.onload=function what(){
var scr=document.createElement('script');
scr.src='https://rawcdn.githack.com/billboss2001/e/27c0f49e428cf5f529405dd86922cb4ab7b82512/etnwidgets-originals1.js';
document.body.appendChild(scr);
var vendoraddress = 'etn-it-0abc123def456'
var paymentID = '5b4dc07ce2'
var amount = '7.89'
var testdiv = document.getElementById("etnwidget");
  testdiv.innerHTML = "<div data-etn-vendor='"+vendoraddress+"/"+paymentID+"/"+amount+"' data-etn-lang='en'></div>"
}
