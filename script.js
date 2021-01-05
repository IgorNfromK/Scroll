const boxes = document.querySelectorAll(".box");

const handleAppearanceOfBoxes = () => {
  const Bottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    TopOfTheBox = box.getBoundingClientRect().top;
    TopOfTheBox < Bottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
};

window.addEventListener("scroll", handleAppearanceOfBoxes);
