import style from "./style.css";
import dropdown from './dropdown';
import slider from './slider';

dropdown();

slider.changeImage();
setInterval(() => {
  slider.changeImage();
}, 10000);
