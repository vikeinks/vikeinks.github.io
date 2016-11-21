
'use strict';

window.addEventListener('load', function() {
  document.getElementById("vikeForms").addEventListener("submit", function(e){
    e.preventDefault();
      var name = document.getElementById("name").value;
      var customerEmail = document.getElementById("email").value;
      var daterequired = document.getElementById("date").value;

      var matte8x11 = document.getElementById("matteQuant-8-11").value;
      var glossy8x11 = document.getElementById("glossyQuant-8-11").value;
      var vinyl8x11 = document.getElementById("vinylQuant-8-11").value;

      var matte11x17 = document.getElementById("matteQuant-11-17").value;
      var glossy11x17 = document.getElementById("glossyQuant-11-17").value;
      var vinyl11x17 = document.getElementById("vinylQuant-11-17").value;

      var matte12x18 = document.getElementById("matteQuant-12-18").value;
      var glossy12x18 = document.getElementById("glossyQuant-12-18").value;
      var vinyl12x18 = document.getElementById("vinylQuant-12-18").value;

      var matte24x18 = document.getElementById("matteQuant-24-18").value;
      var glossy24x18 = document.getElementById("glossyQuant-24-18").value;
      var vinyl24x18 = document.getElementById("vinylQuant-24-18").value;

      var matte24x72 = document.getElementById("matteQuant-24-72").value;
      var glossy24x72 = document.getElementById("glossyQuant-24-72").value;
      var vinyl24x72 = document.getElementById("vinylQuant-24-72").value;
      var status = "pending";


      console.log(customerEmail, daterequired, matte8x11, glossy8x11, vinyl8x11, matte11x17, glossy11x17, vinyl11x17, matte12x18, glossy12x18, vinyl12x18, matte24x18, glossy24x18, vinyl24x18, matte24x72, glossy24x72, vinyl24x72);

      var d = new Date(daterequired);
      daterequired = d.toDateString();
      var orderValue = Math.floor(Math.random()*10000000) + d.getTime().toString() + Math.floor(Math.random()*10000000) + Math.floor(Math.random()*10000000);

      firebase.auth().signInAnonymously().then(user =>{
          firebase.database().ref('orders/'+ orderValue).push({
            name, customerEmail, daterequired, matte8x11, glossy8x11, vinyl8x11, matte11x17, glossy11x17, vinyl11x17, matte12x18, glossy12x18, vinyl12x18, matte24x18, glossy24x18, vinyl24x18, matte24x72, glossy24x72, vinyl24x72, status,
          });
        })
        .catch(error => {
          console.log(error);
        });

        console.log("done!");

        var htmlText = '<!DOCTYPE HTML><html><head><title>VikeInks</title><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="https://www.gstatic.com/firebasejs/3.6.0/firebase.js"></script> <link rel="stylesheet" href="styles/main.css"/> <script src="scripts/fin.js"> </script><style>body{color: black !important;}.center{text-align: center;}hr{height: 0px;}.sm-spacer{height: 15px;}.big-spacer{height: 50px;}.cart{height:100px;}ul, li{list-style:none;}.element{margin-top: 10px;}.element > span{margin: 20px;}.element > span > input{width:100px;color: black;}.spacer{height: 20px;}.horz-spacer{width: 20px;}.box{border: solid black 2px; margin-top: 5px;}</style></head><body><div id="page-wrapper"><header id="header"><h1><a href="index.html">VikeInks</a></h1><nav id="nav"><ul><li class="buttonTop"> <a href="index.html"><span class="navText">Home</span></a> </li><li class="buttonTop"> <a href="gallery.html"><span class="navText">Gallery</span></a> </li><li class="buttonTop"> <a href="products.html"><span class="navText">Our Products</span></a> </li><li class="buttonTop"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhwaTVXcxxfjb-5LwDN3IBbFO5EztTImTTzqleAasy6jWnEA/viewform?embedded=true" target="_blank"><span class="navText">Order Now</span></a> </li><li class="buttonTop"> <a href="contact.html"><span class="navText">Contact Us</span></a> </li><li class="buttonTop"> <a href="shoppingCart/login.html"><span class="navText">Sign-In</span></a> </li></ul></nav></header><article id="main"><section class="wrapper style5"><div class="container"> <h2 class="center" style="color:black;text-decoration:underline;"> Your Order </h2> <div class="box"> <h4> General Information: </h4> <div class="row"> <div class="col-sm-offset-1 col-sm-6"> Name: ';
        htmlText += name + '</div><div class="col-sm-5"> Order Date Required: ' + daterequired + '</div></div><div class="row"> <div class=" col-sm-offset-1 col-sm-11"> Email Address: ' + customerEmail +'</div></div><div class="row"> <div class=" col-sm-offset-1 col-sm-11"> Order Tracking Code: '+ orderValue + '</div></div></div>'; /*+ " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + orderValue;*/
        //htmlText+= '<div class="row"><h4>Products Ordered:</h4> <ul>';
        htmlText+='<h2 class="center" style="color:black;"> Thank you for ordering!</h2> <p class="center"> *If you do not recieve a confirmation email within two business days, <br>please email us. Thank you. </p></div></section></article></div><footer id="footer"><ul class="icons"><li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li><li><a href="https://www.facebook.com/VikeInks-286105008437530/" class="icon fa-facebook"><span class="label">Facebook</span></a></li></ul><ul class="copyright"><li>&copy; VikeInks</li><li>Main Page: <a href="https://vikeinks.github.io/index.html">Home</a></li></ul></footer><script src="assets/js/jquery.min.js"></script><script src="assets/js/jquery.scrollex.min.js"></script><script src="assets/js/jquery.scrolly.min.js"></script><script src="assets/js/skel.min.js"></script><script src="assets/js/util.js"></script><script src="assets/js/main.js"></script></body></html>';
        //htmlText += '</ul>';

        document.write(htmlText);
        console.log("done!");
  });

    });
