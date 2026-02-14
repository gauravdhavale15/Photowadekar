const rows = [
  document.getElementById("row1"),
  document.getElementById("row2"),
  document.getElementById("row3")
];

let imgIndex = 1;

for (let r = 0; r < rows.length; r++) {
  for (let i = 0; i < 3; i++) {
    const image = document.createElement("img");
    image.src = `./Assets/image${imgIndex}.png`;
    rows[r].appendChild(image);
    imgIndex++;
  }
}
