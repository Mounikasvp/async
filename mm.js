
async function fetchAndDisplayAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    // Display all products without sorting
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to filter and display products by category
async function fetchAndFilterProductsByCategory(category) {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    // Filter products by category (case-insensitive)
    const filteredProducts = products.filter(product =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );

    // Display filtered products
    displayProducts(filteredProducts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display products
function displayProducts(products) {
  const productListDiv = document.getElementById('product-list');
  productListDiv.innerHTML = ''; // Clear any previous content

  if (products.length === 0) {
    productListDiv.innerHTML = '<p>No products found for this category.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // Add a class for styling

    // Add product details to the div
    productDiv.innerHTML = `
      <h3>Title: ${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p>Description: ${product.description}</p>
      <p>Price: $${product.price}</p>
    `;
    productDiv.style.border = '2px solid black';
    productDiv.style.width = '350px';
    productDiv.style.margin = '10px';

    // Append the product div to the product list div
    productListDiv.appendChild(productDiv);
  });
}

// Function to fetch and display product titles only
async function fetchAndDisplayProductTitles() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  // Get and sort titles
  const sortedTitles = products.map(product => product.title).sort();
  return sortedTitles;
}

// Function to display product titles
function displayProductTitles(titles) {
  const productListDiv = document.getElementById("product-list");
  productListDiv.innerHTML = ''; // Clear any previous content

  // Display each title
  titles.forEach(title => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<strong>${title}</strong>`;
    productListDiv.appendChild(productDiv);
  });
}

// Event listener to load all products on button click
document.getElementById('load-products-btn').addEventListener('click', async () => {
  await fetchAndDisplayAllProducts();
});

// Event listener to search products by category
document.getElementById('search-products-btn').addEventListener('click', async () => {
  const category = document.getElementById('category-search').value.trim();
  if (category) {
    await fetchAndFilterProductsByCategory(category);
  } else {
    alert('Please enter a category to search for.');
  }
});

// Event listener to load product titles on button click
document.getElementById("load-titles-btn").addEventListener("click", async () => {
  const mainDiv = document.getElementById('product');
  mainDiv.style.display = "none"; // Hide main product div
  const productTitles = await fetchAndDisplayProductTitles();
  displayProductTitles(productTitles);
});

// Function to automatically fetch and display all product details in the "product" div
async function fetchAndAppendData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const mainDiv = document.getElementById('product');
    mainDiv.innerHTML = ''; // Clear previous content

    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <h3>Title: ${product.title}</h3>
        <p>Category: ${product.category}</p>
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
      productDiv.style.border = '2px solid black';
      productDiv.style.width = '350px';
      productDiv.style.margin = '10px';
      mainDiv.appendChild(productDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Automatically fetch and display full product details
fetchAndAppendData();


