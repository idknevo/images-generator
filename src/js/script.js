const imgsContainer = document.querySelector(".images-container");
const btn = document.querySelector(".btn");

const addNewImages = function (noOfImages) {
  for (let i = 0; i < noOfImages; i++) {
    const newImage = document.createElement("img");
    const randomNumber = Math.ceil(Math.random() * 2000);
    newImage.src = `https://picsum.photos/300?random=${randomNumber}`;
    imgsContainer.append(newImage);
  }
};

btn.addEventListener("click", () => {
  addNewImages(8);
});

