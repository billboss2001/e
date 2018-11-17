if(typeof Checkout === 'object'){
  if(typeof Checkout.$ === 'function'){
for (const a of document.querySelectorAll("label")) {
  if (a.innerHTML.includes("Electroneum")) {
    a.innerHTML="<img src=\"https://i.imgur.com/nWea0gu.png\" width=\"100px\"><a href=\"https://electroneum.com\" target=\"_blank\"><img src=\"https://i.imgur.com/blts627.png\" width=\"10px\" style=\"margin-left: 10px; margin-bottom: 5px;\"></a>"
  }
}
  }
}
