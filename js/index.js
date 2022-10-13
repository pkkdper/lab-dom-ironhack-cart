// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerText);
  const quantityValue = +quantity.value;
  let subtotal = priceValue * quantityValue;
  let subtotalValue = product.querySelector('.subtotal span');
  subtotalValue.innerText = subtotal;
  return subtotal;
}

function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  // product.querySelectorAll('.product').forEach(function (node) {});
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((element) => {
 let subTotal = updateSubtotal(element)
  total += subTotal    // adding the total from each element
  })
  // ITERATION 2
  // const allProducts = document.getElementsByClassName('product');
  //   const allSubtotals = document.querySelectorAll('.subtotal span');
  // const sum = allSubtotals.reduce((a,b) => a + b, 0);
  // total = document.querySelector('.total-value span');
  // total.innerText = sum}
  // return sum
  // // return updateSubtotal(allProducts)
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
