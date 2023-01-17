const slider = () => {
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

  do 

  for (i of images) {
    if (i === images.length) {
      i = 0;
    }
    setTimeout(() => {
      hideImage();
    }, 5000);
  }


}

const selectImage = (img) => {
  
}

export default slider;