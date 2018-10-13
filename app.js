//building the outline//
//add blurb about purpose of this code: 
  //what information will we take in
  //what do we do with the information
  //why are we doing this, what is it for

  'use strict';

//=======global variables======//
//image 1 and previous selection 1
var productLeftImage = document.getElementById('left');
var productLeftImageArrayIndex = 0;
//image 2 and previous selection 2
var productMiddleImage = document.getElementById('middle');
var productMiddleImageArrayIndex = 10;
//image 3 and previous selection 3
var productRightImage = document.getElementById('right');
var productRightImageArrayIndex = 21;
//image section
var imageSection = document.getElementById('clickme');
//array of all the images
var allProductImagesArray = [];
//total clicks, for when they pick 25 times it makes a graph
var clickCounter = 0;

//=======Construction function======//
//build the object: needs to contain the following info
  //image source
  //title for image
  //likes count
  //appearance count
  //add object to all images array
var ProductImageConstructor = function (source, name) {
  this.src= source;
  this.name = name;
  this.likes = 0;
  this.appeared = 0;
  allProductImagesArray.push(this);
};

//=======Functions======//

//choose a random image, that isn't one of the other 3 and wasn't just on screen before
var randomNumberLeft = function () {
  do {
    var randomNumberLeft = Math.floor(Math.random() * allProductImagesArray.length);
  } while (randomNumberLeft === productLeftImageArrayIndex || randomNumberLeft === productMiddleImageArrayIndex || randomNumberLeft === productRightImageArrayIndex);
};

var randomNumberMiddle = function () {
  do {
    var randomNumberMiddle = Math.floor(Math.random() * allProductImagesArray.length);
  } while (randomNumberMiddle === productLeftImageArrayIndex || randomNumberMiddle === productMiddleImageArrayIndex || randomNumberMiddle === productRightImageArrayIndex);
};

var randomNumberRight = function () {
  do {
    var randomNumberRight = Math.floor(Math.random() * allProductImagesArray.length);
  } while (randomNumberRight === productLeftImageArrayIndex || randomNumberRight === productMiddleImageArrayIndex || randomNumberRight === productRightImageArrayIndex);
};


//handler function
  //check they clicked on an image
  //calls the random for all 3 images
  //increase likes
  //increase appeared
  //increase total click counts
  //update assigning the current image
  //for lab 11, make a list render
  //for lab 12,  add count to render chart and stop listener
var productClickHandler = function (event) {
  if(event.target.id==='left' || event.target.id === 'middle' || event.target.id === 'right') {

  };
};

//create the objects
new ProductImageConstructor ('./images/bag.jpg', 'Luggage');
new ProductImageConstructor ('./images/bag.jpg', 'Banana Slicer');
new ProductImageConstructor ('./images/bag.jpg', 'Fancy Toliet Holder');
new ProductImageConstructor ('./images/bag.jpg', 'Toesless Rain Boots');
new ProductImageConstructor ('./images/bag.jpg', 'Breakfast all in one');
new ProductImageConstructor ('./images/bag.jpg', 'Meatball Gum');
new ProductImageConstructor ('./images/bag.jpg', 'Chair');
new ProductImageConstructor ('./images/bag.jpg', 'Monster Action Figure');
new ProductImageConstructor ('./images/bag.jpg', 'Duck Lips for Dogs');
new ProductImageConstructor ('./images/bag.jpg', 'Dragon Meat');
new ProductImageConstructor ('./images/bag.jpg', 'Pen Utensils');
new ProductImageConstructor ('./images/bag.jpg', 'Feet Mops');
new ProductImageConstructor ('./images/bag.jpg', 'Pizza Slice Scissors');
new ProductImageConstructor ('./images/bag.jpg', 'Shark Sleeping Bag');
new ProductImageConstructor ('./images/bag.jpg', 'Baby Onsie Mop');
new ProductImageConstructor ('./images/bag.jpg', 'Tauntaun Sleeping Bag');
new ProductImageConstructor ('./images/bag.jpg', 'Unicorn Meat');
new ProductImageConstructor ('./images/bag.jpg', 'USB Tenticle');
new ProductImageConstructor ('./images/bag.jpg', 'Self Watering Can');
new ProductImageConstructor ('./images/bag.jpg', 'Unique Wine Glass');
//console.log(allProductImagesArray);

//calling the handling for click
imageSection.addEventListener('click', productClickHandler)

