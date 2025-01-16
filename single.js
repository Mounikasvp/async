//Write a program where you need to log single product data
async function fetchSingleProductData() {
    try {
      // Fetch the data from the API
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
    
      
  
      // Select the first product from the array (or any specific product)
      const product = data.products[2]; // Modify the index for other products
      console.log(product);
      
  
      // Log the details of the single product
      // console.log('Product title:', product.title);
      // console.log('Price:', product.price);
      // console.log('Description:', product.description);
      // console.log('Category:', product.category);
      // console.log('Image :', product.images);
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function
  fetchSingleProductData();
  