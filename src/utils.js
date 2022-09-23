export function calculateTotalPrice (basket, products) {
  let totalPrice = 0;
  for (const [id, amount] of Object.entries(basket)) {
    totalPrice += products.getProductById(id).price * +amount;
  }
  return totalPrice;
};

export function updatePriceAndAmount(basket, products) {
  const totalPrice = calculateTotalPrice(basket, products);
  const totalAmount = Object.values(basket).reduce((acc, item) => acc + item, 0);
  return [totalPrice, totalAmount];
};

export function auth(login, passw) {
  let users = JSON.parse(localStorage.getItem("users"));

  if (users) {
    return users.filter((item) => {
     return login === item.login && passw === item.passw;
    }).length === 1;
  } else {
    return false;
  }
};

export function register(login, passw) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({login, passw});
  localStorage.setItem("users", JSON.stringify(users));
}
