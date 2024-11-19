// Images Array for Slider
var images = [
    "img 1.jpg",
    "img 2.jpg",
    "img 3.jpg",
    "img 4.jpg",
    "img 5.jpg",
    "img 6.jpg",
    "img 7.jpg"
  ];
  
  // Current index for image
  var currentIndex = 0;
  
  function next() {
    var currentImg = document.getElementById("slider-img");
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    currentImg.src = images[currentIndex];
  }
  function prev() {
    var currentImg = document.getElementById("slider-img");
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
    currentImg.src = images[currentIndex];
  }
  var currentImg = document.getElementById("slider-img");
  var smallImage = document.getElementsByClassName("img");
  console.log(smallImage);
  
  
  
    smallImage[0].onclick = function(){
      currentImg.src = smallImage[0].src;
    }
  
    smallImage[1].onclick = function(){
      currentImg.src = smallImage[1].src;
    }
  
    smallImage[2].onclick = function(){
      currentImg.src = smallImage[2].src;
    }
  
    smallImage[3].onclick = function(){
      currentImg.src = smallImage[3].src;
    }

    smallImage[4].onclick = function(){
        currentImg.src = smallImage[4].src;
      }

      smallImage[5].onclick = function(){
        currentImg.src = smallImage[5].src;
      }
    //   smallImage[6].onclick = function(){
    //     currentImg.src = smallImage[6].src;
    //   }


