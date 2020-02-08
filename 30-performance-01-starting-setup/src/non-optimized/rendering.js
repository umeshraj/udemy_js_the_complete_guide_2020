export function renderProducts(products, deleteProductFn) {
  const productListEl = document.getElementById('product-list');
  productListEl.innerHTML = '';
  products.forEach(product => {
    const newListEl = document.createElement('li');
    const prodTitleEl = document.createElement('h2');
    const prodPriceEl = document.createElement('p');
    const prodDeleteButtonEl = document.createElement('button');

    prodTitleEl.innerHTML = product.title;
    prodPriceEl.innerHTML = product.price;
    prodDeleteButtonEl.innerHTML = 'DELETE';

    prodDeleteButtonEl.addEventListener(
      'click',
      deleteProductFn.bind(null, product.id)
    );

    newListEl.appendChild(prodTitleEl);
    newListEl.appendChild(prodPriceEl);
    newListEl.appendChild(prodDeleteButtonEl);

    productListEl.appendChild(newListEl);
  });
}
