const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movieList");

arrows.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
    // console.log("You clicked", +i)
  });
});

const ball = document.querySelector(".toggleBall");
const items = document.querySelectorAll(
  ".container,.navbar-container,.sidebar,.leftMenuIcon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
