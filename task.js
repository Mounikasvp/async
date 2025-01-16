// Write a program where you need to log the all products data
async function products() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products();
// Write a program where you need to log single product data
async function products1() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products/5')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products1();

//Write a program where you need to log all categories list in the api
async function products2() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products/category-list')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products2();
//Write a program to sort the elements in the array based on the title
async function products3() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products?sortBy=title')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products3();
// Write a program to sort the elements in the array based on the title and asc order

async function products4() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products?sortBy=title&order=asc')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products4();

// Write a program to get the products based on specific category ( ex. Mobiles,watches like that )    

async function products4() {
    try{
        const allProducts = await fetch('https://dummyjson.com/products/category/smartphones')
    const getP=await allProducts.json();
    console.log(getP);
    
    }catch(error){
        console.log(error)
    }
    
    
}
products4();





//Write a program to write to get all the quotes in the same api link

async function quotes() {
    try{
        const allQuotes = await fetch('https://dummyjson.com/quotes')
    const getQuotes=await allQuotes.json();
    console.log(getQuotes);
    
    }catch(error){
        console.log(error)
    }
    
    
}
quotes();


//Write a program to get single quote

async function quotes1() {
    try{
        const allQuotes1 = await fetch('https://dummyjson.com/quotes/2')
    const getQuotes1=await allQuotes1.json();
    console.log(getQuotes1);
    
    }catch(error){
        console.log(error)
    }
    
    
}
quotes1();


//Write a program to get only 10 quotes in console (limit the range )
async function quotes10() {
    try{
        const allQuotes1 = await fetch('https://dummyjson.com/quotes?limit=10')
    const getQuotes1=await allQuotes1.json();
    console.log(getQuotes1);
    
    }catch(error){
        console.log(error)
    }
    
    
}
quotes10();
//Write a program to get all the recipes in console

async function recipes() {
    try{
        const allRecipes = await fetch('https://dummyjson.com/recipes')
    const getRecipes=await allRecipes.json();
    console.log(getRecipes);
    
    }catch(error){
        console.log(error)
    }
    
    
}
recipes();


async function recipes1() {
    try{
        const allRecipes = await fetch('https://dummyjson.com/recipes?sortBy=name&order=asc')
    const getRecipes=await allRecipes.json();
    console.log(getRecipes);
    
    }catch(error){
        console.log(error)
    }
    
    
}
recipes1();



