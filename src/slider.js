const slider = (function() {
  const i1 = document.querySelector("#i1");
  const i2 = document.querySelector("#i2");
  const i3 = document.querySelector("#i3");
  const i4 = document.querySelector("#i4");
  const i5 = document.querySelector("#i5");
  const c1 = document.querySelector("#c1");
  const c2 = document.querySelector("#c2");
  const c3 = document.querySelector("#c3");
  const c4 = document.querySelector("#c4");
  const c5 = document.querySelector("#c5");

  const images = [i1, i2, i3, i4, i5];
  const circles = [c1, c2, c3, c4, c5];

  let iActive = 1;
  let cActive = 1;

  const hideImage = () => {
    i1.style.display = "none";
    i2.style.display = "none";
    i3.style.display = "none";
    i4.style.display = "none";
    i5.style.display = "none";
    c1.style.backgroundColor = "transparent";
    c2.style.backgroundColor = "transparent";
    c3.style.backgroundColor = "transparent";
    c4.style.backgroundColor = "transparent";
    c5.style.backgroundColor = "transparent";
  }

  const changeImage = () => {
    iActive++;
    cActive++;
    if (iActive >= images.length) {
      iActive = 0;
      cActive = 0;
    }
    hideImage();
    images[iActive].style.display = "block";
    circles[cActive].style.backgroundColor = "rgb(246, 240, 227)";
  }

  const leftArrow = document.querySelector("#leftArrow");
  const rightArrow = document.querySelector("#rightArrow");

  c1.addEventListener("click", () => {
    iActive = 4;
    cActive = 4;
    changeImage();
  })
  c2.addEventListener("click", () => {
    iActive = 0;
    cActive = 0;
    changeImage();
  })
  c3.addEventListener("click", () => {
    iActive = 1;
    cActive = 1;
    changeImage();
  })
  c4.addEventListener("click", () => {
    iActive = 2;
    cActive = 2;
    changeImage();
  })
  c5.addEventListener("click", () => {
    iActive = 3;
    cActive = 3;
    changeImage();
  })

  leftArrow.addEventListener("click", () => {
    if (iActive <= 0) {
      iActive = 4;
      cActive = 4;
    } else {
      iActive = iActive - 1;
      cActive = cActive - 1;
    }   
    hideImage();
    images[iActive].style.display = "block";
    circles[cActive].style.backgroundColor = "rgb(246, 240, 227)";
  })

  rightArrow.addEventListener("click", () => {
    changeImage();
  })

  return {
    changeImage
  }
})();

export default slider;