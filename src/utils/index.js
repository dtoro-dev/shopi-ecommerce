export const totalPrice = (products) =>
  products.reduce((accumulator, product) => accumulator + product.price, 0);

export const totalTax = (products) => Math.round(totalPrice(products) * 0.19);

export const priceFormat = (price) => {
  console.log(price);

  if (!price) {
    return 0;
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
