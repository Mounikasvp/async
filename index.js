// Write a program where you need to log the all products data

async function fetchAndAppendData() {
    try {
      // Fetch the data from the API
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data)
      
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }

}
fetchAndAppendData()

 