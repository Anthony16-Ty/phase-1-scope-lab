var customerName = "bob";
var bestCustomer;
const leastFavouriteCusomer = "someone";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customer) {
    bestCustomer = customer
}

function changeLeastFavoriteCustomer() {

    leastFavouriteCusomer = "someoneelse";
}
