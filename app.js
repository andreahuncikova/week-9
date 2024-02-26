// const myArray = ["apple", "banana", "cherry", "grape"];


// 1. using forEach with an array, it is like a loop
// myArray.forEach(item => {
//     console.log(item)
// })

const products = [
    {
        title: 'Product 1', 
        description: 'Description for product 1',
        image: 'https://picsum.photos/200/150',
        price: 19.99,
        category: 'Electronics',
    },
    {
        title: 'Product 2', 
        description: 'Description for product 2',
        image: 'https://picsum.photos/200/150',
        price: 9.99,
        category: 'Shoes',
    },
    {
        title: 'Product 3', 
        description: 'Description for product 3',
        image: 'https://picsum.photos/200/150',
        price: 29.99,
        category: 'Shoes',
    }
];

// products.forEach(product => {
//     console.log(`Title: ${product.title}`);
// })

const filteredProducts = products.filter(product => product.category == "Shoes")
console.log(filteredProducts)

const createCard = product => {
    return`
        <div class="card">
        <h4>${product.title}</h4>
        <h2>${product.description}</h2>
        <img src="${product.image}" />
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>
        </div>
    `;
}

products.forEach(product => {
    console.log(createCard(product));
})

const productContainer = document.querySelector('.row')

// products.forEach(product => {
//     productContainer.innerHTML += createCard(product);
// })

filteredProducts.forEach(product => {
    productContainer.innerHTML += createCard(product);
})