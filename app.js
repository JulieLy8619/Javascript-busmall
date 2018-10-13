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
//it isn't checking the previous image on the screen, i get duplicates
//so what it is doing is that it  runs through left, and updates left, moves on the middle updates middle and then moves on to right. I lost the prev left and middle because it got reassigned by the time it makes it to right
//maybe try it in on
//if have time maybe i could turn this into a for loop to cut out some code
// var randomNumberLeft = function () {
//   do {
//     var randomNumberL = Math.floor(Math.random() * allProductImagesArray.length);
//   } while (randomNumberL === productLeftImageArrayIndex || randomNumberL === productMiddleImageArrayIndex || randomNumberL === productRightImageArrayIndex);

//   return randomNumberL;
// };

// var randomNumberMiddle = function () {
//   do {
//     var randomNumberM = Math.floor(Math.random() * allProductImagesArray.length);
//   } while (randomNumberM === productLeftImageArrayIndex || randomNumberM === productMiddleImageArrayIndex || randomNumberM === productRightImageArrayIndex);

//   return randomNumberM;
// };

// var randomNumberRight = function () {
//   do {
//     var randomNumberR = Math.floor(Math.random() * allProductImagesArray.length);
//   } while (randomNumberR === productLeftImageArrayIndex || randomNumberR === productMiddleImageArrayIndex || randomNumberR === productRightImageArrayIndex);

//   return randomNumberR;
// };

var randomIndexNumber = function () {
  var number = Math.floor(Math.random() * allProductImagesArray.length);
  return number;
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

    // var maybeLeft = randomNumberLeft();
    // var maybeMiddle = randomNumberMiddle();
    // var maybeRight = randomNumberRight();
    // console.log('maybe left ' + maybeLeft);
    // console.log('maybe middle ' + maybeMiddle);
    // console.log('maybe right ' + maybeRight);
    // console.log('productLeftImageArrayIndex ' + productLeftImageArrayIndex);
    // console.log('productMiddleImageArrayIndex ' + productMiddleImageArrayIndex);
    // console.log('productRightImageArrayIndex ' + productRightImageArrayIndex);
    console.log('BEFORE RANDOM productLeftImageArrayIndex ' + productLeftImageArrayIndex);
    console.log('BEFORE RANDOM productMiddleImageArrayIndex ' + productMiddleImageArrayIndex);
    console.log('BEFORE RANDOM productRightImageArrayIndex ' + productRightImageArrayIndex);
    do {
      var maybeLeft = randomIndexNumber();
    } while (maybeLeft === productLeftImageArrayIndex || maybeLeft === productMiddleImageArrayIndex || maybeLeft === productRightImageArrayIndex);

    do {
      var maybeMiddle = randomIndexNumber();
    } while (maybeMiddle === maybeLeft || maybeMiddle === productLeftImageArrayIndex || maybeMiddle === productRightImageArrayIndex || maybeMiddle === productMiddleImageArrayIndex);

    do {
      var maybeRight = randomIndexNumber();
    } while (maybeRight === maybeLeft || maybeRight === maybeMiddle || maybeRight === productLeftImageArrayIndex || maybeRight === productMiddleImageArrayIndex || maybeRight === productRightImageArrayIndex);

    console.log('maybe left ' + maybeLeft);
    console.log('maybe middle ' + maybeMiddle);
    console.log('maybe right ' + maybeRight);
    console.log('BEFORE productLeftImageArrayIndex ' + productLeftImageArrayIndex);
    console.log('BEFORE productMiddleImageArrayIndex ' + productMiddleImageArrayIndex);
    console.log('BEFORE productRightImageArrayIndex ' + productRightImageArrayIndex);

    productLeftImageArrayIndex = maybeLeft;
    productMiddleImageArrayIndex = maybeMiddle;
    productRightImageArrayIndex = maybeRight;

    // console.log('AFTER maybe left ' + maybeLeft);
    // console.log('AFTER maybe middle ' + maybeMiddle);
    // console.log('AFTER maybe right ' + maybeRight);
    console.log('AFTER productLeftImageArrayIndex ' + productLeftImageArrayIndex);
    console.log('AFTER productMiddleImageArrayIndex ' + productMiddleImageArrayIndex);
    console.log('AFTER productRightImageArrayIndex ' + productRightImageArrayIndex);
   
    // () {
    //   productLeftImageArrayIndex = maybeLeft;
    
    // (maybeMiddle !== productLeftImageArrayIndex || maybeMiddle !== productMiddleImageArrayIndex || maybeMiddle !== productRightImageArrayIndex || maybeMiddle !== maybeLeft) {
    //   productMiddleImageArrayIndex = maybeMiddle;
    // }
    // (maybeRight !== productLeftImageArrayIndex || maybeRight !== productMiddleImageArrayIndex || maybeRight !== productRightImageArrayIndex || maybeRight !== maybeLeft || maybeRight !== maybeMiddle) {
    //   productRightImageArrayIndex = maybeRight;
    // }


    // productLeftImageArrayIndex = randomNumberLeft();
    // productMiddleImageArrayIndex = randomNumberMiddle();
    // productRightImageArrayIndex = randomNumberRight();

    productLeftImage.src = allProductImagesArray[productLeftImageArrayIndex].src;
    productMiddleImage.src = allProductImagesArray[productMiddleImageArrayIndex].src;
    productRightImage.src = allProductImagesArray[productRightImageArrayIndex].src;

    productMiddleImage.name = allProductImagesArray[productLeftImageArrayIndex].name;
    productMiddleImage.name = allProductImagesArray[productMiddleImageArrayIndex].name;
    productRightImage.name = allProductImagesArray[productRightImageArrayIndex].name;

    //need to figure out how to get name to print to screen
    //this doesn't work
    //in theory it should be from when I assign the .name but it wasn't tied to the ID on the HTML page
    // productLeftDescription = productLeftImage.name;
    // productMiddleDescription = productMiddleImage.name;
    // productRightDescription = productRightImage.name;

  }
};

//create the objects
//if i can get the name then I can figure out why/which image doesn't work, i don't think i see sweep or usb
//it was .gif and .png, that is why those two didn't show
new ProductImageConstructor ('./images/bag.jpg', 'Luggage');
new ProductImageConstructor ('./images/banana.jpg', 'Banana Slicer');
new ProductImageConstructor ('./images/bathroom.jpg', 'Fancy Toliet Holder');
new ProductImageConstructor ('./images/boots.jpg', 'Toesless Rain Boots');
new ProductImageConstructor ('./images/breakfast.jpg', 'Breakfast all in one');
new ProductImageConstructor ('./images/bubblegum.jpg', 'Meatball Gum');
new ProductImageConstructor ('./images/chair.jpg', 'Chair');
new ProductImageConstructor ('./images/cthulhu.jpg', 'Monster Action Figure');
new ProductImageConstructor ('./images/dog-duck.jpg', 'Duck Lips for Dogs');
new ProductImageConstructor ('./images/dragon.jpg', 'Dragon Meat');
new ProductImageConstructor ('./images/pen.jpg', 'Pen Utensils');
new ProductImageConstructor ('./images/pet-sweep.jpg', 'Feet Mops');
new ProductImageConstructor ('./images/scissors.jpg', 'Pizza Slice Scissors');
new ProductImageConstructor ('./images/shark.jpg', 'Shark Sleeping Bag');
new ProductImageConstructor ('./images/sweep.png', 'Baby Onsie Mop');
new ProductImageConstructor ('./images/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new ProductImageConstructor ('./images/unicorn.jpg', 'Unicorn Meat');
new ProductImageConstructor ('./images/usb.gif', 'USB Tenticle');
new ProductImageConstructor ('./images/water-can.jpg', 'Self Watering Can');
new ProductImageConstructor ('./images/wine-glass.jpg', 'Unique Wine Glass');


//calling the handling for click
imageSection.addEventListener('click', productClickHandler);

