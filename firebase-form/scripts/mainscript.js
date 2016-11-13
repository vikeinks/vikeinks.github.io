
'use strict';
// Initialize Firebase

// Shortcuts to DOM Elements.

window.addEventListener('load', function() {
/*  function Product(posterName, length, width, mattePrice, glossyPrice, vinylPrice){
    this.productType = name;
    this.wid = width;
    this.leng = length;
    this.mattePrice = mattePrice;
    this.glossyPrice = glossyPrice;
    this.vinylPrice = vinylPrice;
  };
  var products = [new Product("flyer", 8, 11, "0.80", "1.63", "3.95"), new Product("banner", 24, 72, "13.51",	"20.14",	"48.62"), new Product("posters", 12, 18, "2.53",	"3.78",	"9.12"),
    new Product("posters", 11, 17, "2.19",	"3.27",	"7.89"), new Product("posters", 24, 36, "6.34", "15.76", "38.05")];

  var formText = '<hr/><section class="form-horizontal"> <h4 class="underline center"> Contact Info </h4><br><div class="sm-spacer"> </div><div class="row form-group"> <label class="control-label col-sm-2" for="name"> Name:</label> <div class="col-sm-8"> <input type="text" class="form-control" id="name" placeholder="Enter your name" ng-model="name" required=""> </div></div><spacer></spacer> <br><div class="form-group"> <label class="control-label col-sm-2" for="email">Email:</label> <div class="col-sm-4"> <input type="email" class="form-control" id="email" placeholder="Enter email" ng-model="email" required=""> </div><label class="control-label col-sm-2" for="date">Date Required by:</label> <div class="col-sm-3"> <input type="date" class="form-control" id="date" placeholder="Enter date required" ng-model="date" required=""> </div></div></section><div class="col-sm-9"> </div>';

  for(int i = 0; i < products.length; i++){
    var curr = product[i];
    var temp = curr.productName + curr.leng + "x" + curr.wid;
    formText += '<hr/><div class="row"> <div class="col-md-1"> </div><div class="col-md-2" style="top: 50%;transform: translateY(-50%);"><br><br><br><br><br><input type="checkbox" name="' + temp + '" value="' + temp + " id=" + temp + '" checked>' + curr.productName + " " + curr.leng + "x" + curr.wid;
    formText += '<img src="/images/poster.jpg" alt="' + curr.productName + '" style="width:' + curr.wid + 'em;height:' + curr.leng + 'em;"> </div><div class="col-md-1"> </div>';
    formText += '<div class="col-md-8"> <ul> <li>Paper Type: <ul> <li class="element"> Matte ($' + curr.mattePrice + ')- <span> &emsp;Quantity <input type="number" value="0" id="matteQuant-' + curr.leng + "-" + curr.wid + '"> </span> </li>';
    formText += '<li class="element"> Glossy ($' + curr.glossyPrice + ')- <span> &emsp;Quantity <input type="number" value="0" id="glossyQuant-' + curr.leng + "-" + curr.wid + '"> </span> </li>';
    formText += '<li class="element" > Vinyl ($' + curr.vinylPrice + ')- <span> &emsp; Quantity <input type="number" value="0" id="vinylQuant-' + curr.leng + "-" + curr.wid + '"> </span> </li></ul> </li></ul> </div></div><hr/>';
  }
  formText += '<button type="submit" class="col-sm-2 btn btn-default btn-lg" id="finishedButton" onsubmit="submitForm()">Finished! </button>';

  document.getElementById("vikeForms").html = formText; */

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
      //console.log(document.getElementById("vikeForms").value);

      firebase.auth().signInAnonymously().then(user =>{
          firebase.database().ref('orders').push({
            name, customerEmail, daterequired, matte8x11, glossy8x11, vinyl8x11, matte11x17, glossy11x17, vinyl11x17, matte12x18, glossy12x18, vinyl12x18, matte24x18, glossy24x18, vinyl24x18, matte24x72, glossy24x72, vinyl24x72, status,
          });
        })
        .catch(error => {
          console.log(error);
        });

        console.log("done!");
      window.open("http://localhost:5000/finished.html");


  });
/*
  vikeForms.onsubmit = function(e) {
      e.preventDefault();
      if(poster8_11.checked == 'true'){

        console.log("true")
      }
      else{
        console.log("false");
      }
    };*/
});



/*var  vikeForms = document.getElementById("vikeForms");
var poster8_11 = document.getElementById("poster-8-11");
  var matte8_11 = document.getElementById("Matte-8-11");
  var matteQuantity8_11 = document.getElementById("matteQuant-8-11");
  var glossy8_11 = document.getElementById("Glossy-8-11");
  var glossyQuantity8_11 = document.getElementById("glossyQuant-8-11");
  var vinyl8_11 = document.getElementById("Vinyl-8-11");
  var vinylQuantity8_11 = document.getElementById("vinylQuant-8-11");
var name = document.getElementById("name");
var email = document.getElementById("email");
var date = document.getElementById("date");
var submitButton = document.getElementById("finishedButton");
// Bind Sign in button.function Product(width, length, mattePrice, glossyPrice, vinylPrice){
  this.wid = width;
  this.leng = length;
  this.mattePrice = mattePrice;
  this.glossyPrice = glossyPrice;
  this.vinylPrice = vinylPrice;
};

var banners = [new Product(12, 36, 0.53, 1.31, 3.17), new Product(24, 72, 2.11, 5.25, 12.68)];
var flyers = [new Product(8.5, 11, 0.24, 0.41, 0.82)];
var posters = [new Product(25, 39, 1.19, 2.96, 7.16), new Product(12, 18, 0.26, 0.66, 1.59), new Product(11, 17, 0.23, 0.57, 1.37),
  new Product(36, 60, 5.28, 13.13, 31.71), new Product(12, 28, 0.41, 1.02, 2.47), new Product(36, 72, 6.34, 15.76, 38.05)];
*/




// Initialize Firebase

//form controller
/*angular.module('formExample', [])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);

var Firebase = require("firebase");
VikeForms.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  //this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  //this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

window.onload = function(){
  window.vikeforms = new vikeForm();
}
*/
// posters






//insert banners, flyers, and posters

/*$(document).ready(function(){
    var bannersStr = "";
    var flyersStr = "";
    var postersStr = "";
    for(i = 0; i < banners.length; i++){
      bannersStr += "test";
    }
    for(i = 0; i < flyers.length; i++){
      flyersStr += "";
    }
    for(i = 0; i < posters.length; i++){
      postersStr += "";
    }
    $("#banners").html(bannersStr);
    $("#flyers").html(flyersStr);
    $("#posters").html(postersStr);

    }
});*/
