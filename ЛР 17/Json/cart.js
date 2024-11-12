const cart = [];

fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
        let totalPrice = 0;

        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3>${product.name}</h3>
                <p class="price">${product.price.toFixed(2)} руб.</p>
                <p class="description">${product.description}</p>
                <p class="category">Категория: ${product.category}</p>
                <p class="id">ID: ${product.id}</p>
            `;
            cartItems.appendChild(listItem);
            totalPrice += product.price;
        });

        totalPriceElement.textContent = `Общая стоимость: ${totalPrice.toFixed(2)} руб.`;
    });
