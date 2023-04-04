const arrivalList = [
  {
    productName: "Quisque fringilla",
    productPrice: "$220",
    productImage1:
      "https://template.hasthemes.com/clothing/clothing/images/product/01.jpg",
    productImage2:
      "https://template.hasthemes.com/clothing/clothing/images/product/02.jpg",
  },
  {
    productName: "Quisque fringilla",
    productPrice: "$220",
    productImage1:
      "https://template.hasthemes.com/clothing/clothing/images/product/04.jpg",
    productImage2:
      "https://template.hasthemes.com/clothing/clothing/images/product/03.jpg",
  },
  {
    productName: "Quisque fringilla",
    productPrice: "$220",
    productImage1:
      "https://template.hasthemes.com/clothing/clothing/images/banner/02.png",
    productImage2:
      "https://template.hasthemes.com/clothing/clothing/images/product/01.jpg",
  },

  {
    productName: "Quisque fringilla",
    productPrice: "$220",
    productImage1:
      "https://template.hasthemes.com/clothing/clothing/images/product/03.jpg",
    productImage2:
      "https://template.hasthemes.com/clothing/clothing/images/product/04.jpg",
  },
];

const handleMapProducts = (items) => {
  return [items].join(" ");
};

document.getElementById("arrival").innerHTML = arrivalList.map((items) => {
  return `<div class="products_item" >
              <div class="items_image">
                <img
                  class="items_image_main"
                  src=${items.productImage1}
                  alt=${items.productName}
                />

                <img
                  class="items_image_hover"
                  src=${items.productImage2}
                  alt=${items.productName}
                />
                
              </div>

              <div class="items_content">
                <p class="items_content_name">${items.productName} </p>
                <p class="items_content_price">${items.productPrice}</p>
              </div>
            </div>`;
});
