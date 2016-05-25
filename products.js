var products = [

  {
    name: "Air Force Flyer",
    description: "Farm-to-table whatever 90's, locavore craft beer cardigan photo booth tote bag pop-up neutra. Thundercats cray hashtag seitan viral, taxidermy blue bottle flannel gochujang.",
    price: "$199.99",
    URL: "Images/Air_Force.png",
  },
  {
    name: "Cheap-o-la",
    description: "Raw denim actually jean shorts, echo park wolf stumptown pinterest yr banjo art party pop-up green juice. Intelligentsia butcher pabst, etsy chicharrones hoodie everyday carry gluten-free viral.",
    price: "$9.99",
    URL: "Images/Cheap.jpg",
  },
  {
    name: "Gucci Gucci",
    description: "Hoodie master cleanse put a bird on it beard jean shorts chartreuse man bun yr. Letterpress mlkshk migas squid. Brooklyn actually iPhone sriracha green juice photo booth.",
    price: "$79.99",
    URL: "Images/Gucci.jpg",
  },
  {
    name: "Omega Mu",
    description: "Fixie kinfolk pabst plaid, hashtag cornhole man braid pinterest keytar chicharrones locavore stumptown raw denim food truck. Tofu ramps VHS vice, celiac yr hoodie knausgaard health goth brooklyn.",
    price: "$39.99",
    URL: "Images/Omega.jpg",
  },
  {
    name: "Rolex Rocket",
    description: "Single-origin coffee chillwave leggings tacos street art pinterest. Freegan street art chillwave, cardigan man bun lomo kinfolk mumblecore tacos four dollar toast pop-up viral.",
    price: "$2999.99",
    URL: "Images/Rolex.jpg",
  },
  {
    name: "Seiko Black 'n' Tan",
    description: "Farm-to-table actually bushwick readymade chia chambray affogato mlkshk, fingerstache you probably haven't heard of them gochujang kale chips tote bag. Selvage brooklyn ironic.",
    price: "$129.99",
    URL: "Images/Seiko.jpg",
  },
  {
    name: "Talking Is Cheap",
    description: "Offal roof party sartorial, pug synth iPhone paleo messenger bag you probably haven't heard of them normcore actually bushwick photo booth plaid. Chambray chillwave tofu fanny pack chartreuse, irony helvetica celiac.",
    price: "$89.99",
    URL: "Images/Talking.jpg",
  },
  {
    name: "Ulysse Nardin",
    description: "Beard direct trade godard fingerstache chillwave pour-over. 90's deep v ennui four loko green juice. Cold-pressed health goth pork belly fanny pack ennui semiotics waistcoat, tote bag bitters deep v keytar next level.",
    price: "$799.99",
    URL: "Images/Ulysse_Nardin.jpg",
  },
  {
    name: "Victorinox No Knife",
    description: "Beard direct trade godard fingerstache chillwave pour-over. 90's deep v ennui four loko green juice. Cold-pressed health goth pork belly fanny pack ennui semiotics waistcoat, tote bag bitters deep v keytar next level.",
    price: "$279.99",
    URL: "Images/Victorinox.jpeg",
  },

];

var productElements = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
  var currentProducts = products[i];

productElements.innerHTML +=
  // Created overall class for each product card
  "<div class='productsCard'>" +
  // starting layout for each product: name, description, price, URL, add to cart button
    "<div class='name'>" + "Name: " + currentProducts.name + "</div>" +
    "<div class='description'>" + "Description: " + currentProducts.description + "</div>" +
    "<div class='price'>" + "Price: " + currentProducts.price + "</div>" +
    "<img src =\"" + currentProducts.URL + "\">" +
    "<div class='input'>" + "<input type='submit' value='add to cart'" + "</div>" +
  "</div>";
};



