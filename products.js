var products = [

  {
    name: "1",
    description: "a",
    price: "bd",
    URL: "",
  },
  {
    name: "2",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "3",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "4",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "5",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "6",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "7",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "8",
    description: "",
    price: "",
    URL: "",
  },
  {
    name: "9",
    description: "",
    price: "",
    URL: "",
  },

];

var productElements = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
  var currentProducts = products[i];

productElements.innerHTML +=
  // Created overall class for each product card
  "<div class='productsCard'>" +
  // starting layout for each product: name, description, price, URL
    "<p>" + "Name: " + currentProducts.name + "</p>" +
    "<p>" + "Description: " + currentProducts.description + "</p>" +
    "<p>" + "Price: " + currentProducts.price + "</p>" +
    "<img src = currentProducts.URL>" +
  "</div>";
};


