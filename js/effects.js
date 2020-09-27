const abilitiesLiEffect = (document) => {
  const abilsUl = document.querySelector("ul.of-abilities");
  const liArr = abilsUl.querySelectorAll("li");
  console.log(liArr);
  liArr.forEach((li) => {
    const img = li.querySelector("img");
    li.addEventListener("mouseenter", function () {
      img.style.height = "10rem";
    });
    li.addEventListener("mouseleave", function () {
      img.style.height = "8rem";
    });
  });
};

abilitiesLiEffect(document);
