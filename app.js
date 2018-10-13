//building the outline//
//add blurb about purpose of this code: 
  //what information will we take in
  //what do we do with the information
  //why are we doing this, what is it for

'use strict';

//=======global variables======//
//image 1, description 1 and previous selection 1
var productLeftImage = document.getElementById('left');
var productLeftDescription = document.getElementById('leftimagedescription');
var productLeftImageArrayIndex = 0;
//image 2, description 2 and previous selection 2
var productMiddleImage = document.getElementById('middle');
var productMiddleDescription = document.getElementById('middleimagedescription');
var productMiddleImageArrayIndex = 10;
//image 3. description 3 and previous selection 3
var productRightImage = document.getElementById('right');
var productRightDescription = document.getElementById('rightimagedescription');
var productRightImageArrayIndex = 19;
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
  this.src = source;
  this.name = name;
  this.likes = 0;
  this.appeared = 0;
  allProductImagesArray.push(this);
};

//=======Functions======//

//choose a random image, that isn't one of the other 3 and wasn't just on screen before
//if have time maybe i could turn this into a for loop to cut out some code
var randomNumberLeft = function () {
  do {
    var randomNumberLeft = Math.floor(Math.random() * allProductImagesArray.length);
    return randomNumberLeft;
  } while (randomNumberLeft === productLeftImageArrayIndex || randomNumberLeft === productMiddleImageArrayIndex || randomNumberLeft === productRightImageArrayIndex);
};

var randomNumberMiddle = function () {
  do {
    var randomNumberMiddle = Math.floor(Math.random() * allProductImagesArray.length);
    return randomNumberMiddle;
  } while (randomNumberMiddle === productLeftImageArrayIndex || randomNumberMiddle === productMiddleImageArrayIndex || randomNumberMiddle === productRightImageArrayIndex);
};

var randomNumberRight = function () {
  do {
    var randomNumberRight = Math.floor(Math.random() * allProductImagesArray.length);
    return randomNumberRight;
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
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.id);
  if(event.target.id ==='left' || event.target.id === 'middle' || event.target.id === 'right') {
    if (event.target.id === 'left') {
      allProductImagesArray[productLeftImageArrayIndex].likes++;
    } else if (event.target.id === 'middle') {
      allProductImagesArray[productMiddleImageArrayIndex].likes++;
    } else {
      allProductImagesArray[productRightImageArrayIndex].likes++;
    }

    allProductImagesArray[productLeftImageArrayIndex].appeared++;
    allProductImagesArray[productMiddleImageArrayIndex].appeared++;
    allProductImagesArray[productRightImageArrayIndex].appeared++;

    console.log('before new random number ' + productLeftImageArrayIndex);
    productLeftImageArrayIndex = randomNumberLeft();
    productMiddleImageArrayIndex = randomNumberMiddle();
    productRightImageArrayIndex = randomNumberRight();
    console.log('after new random number ' + productLeftImageArrayIndex);

    // console.log(productLeftImage);
    // console.log(allProductImagesArray[productLeftImageArrayIndex]);

    // console.log('before ' + productLeftImage.src);
    productLeftImage.src = allProductImagesArray[productLeftImageArrayIndex].src;
    // console.log('after ' + productLeftImage.src);

    productMiddleImage.src = allProductImagesArray[productMiddleImageArrayIndex].src;
    productRightImage.src = allProductImagesArray[productRightImageArrayIndex].src;
    productLeftImage.name = allProductImagesArray[productLeftImageArrayIndex].name;
    productMiddleImage.name = allProductImagesArray[productMiddleImageArrayIndex].name;
    productRightImage.name = allProductImagesArray[productRightImageArrayIndex].name;

    productLeftDescription = productLeftImage.name;
    productMiddleDescription = productMiddleImage.name;
    productRightDescription = productRightImage.name;

  }
};

//create the objects
new ProductImageConstructor ('./images/bag.jpg', 'Luggage');
new ProductImageConstructor ('./images/banana.jpg', 'Banana Slicer');
new ProductImageConstructor ('./images/bathroom.jpg', 'Fancy Toliet Holder');
new ProductImageConstructor ('./images/boots.jpg', 'Toesless Rain Boots');
new ProductImageConstructor ('./images/breakfast.jpg', 'Breakfast all in one');
new ProductImageConstructor ('./images/bubblegum.jpg', 'Meatball Gum');
new ProductImageConstructor ('./images/chair.jpg', 'Chair');
new ProductImageConstructor ('./images/cthuluhu.jpg', 'Monster Action Figure');
new ProductImageConstructor ('./images/dog-duck.jpg', 'Duck Lips for Dogs');
new ProductImageConstructor ('./images/dragon.jpg', 'Dragon Meat');
new ProductImageConstructor ('./images/pen.jpg', 'Pen Utensils');
new ProductImageConstructor ('./images/pet-sweep.jpg', 'Feet Mops');
new ProductImageConstructor ('./images/scissors.jpg', 'Pizza Slice Scissors');
new ProductImageConstructor ('./images/shark.jpg', 'Shark Sleeping Bag');
new ProductImageConstructor ('./images/sweep.jpg', 'Baby Onsie Mop');
new ProductImageConstructor ('./images/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new ProductImageConstructor ('./images/unicorn.jpg', 'Unicorn Meat');
new ProductImageConstructor ('./images/usb.jpg', 'USB Tenticle');
new ProductImageConstructor ('./images/water-can.jpg', 'Self Watering Can');
new ProductImageConstructor ('./images/wine-glass.jpg', 'Unique Wine Glass');
//console.log(allProductImagesArray);

//calling the handling for click
imageSection.addEventListener('click', productClickHandler);

