//Write a program where you need to log all categories list in the api
async function fetchAndLogCategories() {
    try {
      // Fetch the data from the API
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
  
      // Create a array to store unique categories
      const categories = new Array();
  
      // Loop through the products and add their categories to the set
      data.products.forEach(product => {
        categories.push(product.category); // Adding category to the set
      });
  
      // Log all unique categories
      console.log('Categories:', categories); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function
  fetchAndLogCategories();
  