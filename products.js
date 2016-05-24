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
    "<div class='name'>" + "Name: " + currentProducts.name + "</div>" +
    "<div class='description'>" + "Description: " + currentProducts.description + "</div>" +
    "<div class='price'>" + "Price: " + currentProducts.price + "</div>" +
    "<img src = currentProducts.URL>" +
  "</div>";
};


