class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1} </h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0} </h2>
      <button> Order now</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
      </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    // Note use of bind
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://cdn.shopify.com/s/files/1/0396/8269/products/feather-euro-pillow_default_lightbox_10655_1440x.progressive.jpg",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A car",
      "https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg",
      "a nice car",
      89.99
    )
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
// note it works on class not object
App.init();
