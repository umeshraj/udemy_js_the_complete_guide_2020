class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0396/8269/products/feather-euro-pillow_default_lightbox_10655_1440x.progressive.jpg",
      price: 19.99,
      description: "A soft pillow"
    },
    {
      title: "A car",
      imageUrl:
        "https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg",
      price: 89.99,
      description: "a nice car"
    }
  ],

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
        </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
