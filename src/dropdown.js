const dropdown = () => {
  const menu = document.querySelector("#menu");
  const svgMenu = document.querySelector("#svgMenu");
  const main = document.querySelector("#main");

  svgMenu.addEventListener("mouseover", () => {
    menu.style.display = "flex";
  });

  main.addEventListener("mouseover", () => {
    menu.style.display = "none";
  });

  menu.addEventListener("mouseover", () => {
    menu.style.display = "flex";
  });

  menu.addEventListener("mouseout", () => {
    menu.style.display = "none";
  });

  svgMenu.addEventListener("onTouchTap", () => {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    } 
  });
}

export default dropdown;
