const list = document.querySelector('ul');
const btnShow = document.getElementById('show-all');
const btnDiscount = document.getElementById('discount');
const btnResult = document.getElementById('result');
const btnFilter = document.getElementById('filter');

const formatValue = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const showAll = (productsArray) => {
    let myList = '';

    productsArray.forEach(product => {
        myList += `
            <li>
                <div class="img">
                    <img src="${product.src}" alt="${product.name}">
                </div>
                <p class="product-name">${product.name}</p>
                <p class="price">${formatValue(product.price)}</p>
            </li>
        `;
    });

    list.innerHTML = myList;
};

const discount = () => {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }));

    showAll(newPrice);
};

const result = () => {
    const totalValue = menuOptions.reduce((acc, value) => acc + value.price, 0);

    list.innerHTML = `
                <p>A soma de todos os produtos foi de:<br>
                ${formatValue(totalValue)}
            </p>`
};

const filterVegan = () => {
    const vegan = menuOptions.filter(product => product.vegan);

    showAll(vegan);
};

btnShow.addEventListener('click', () => showAll(menuOptions));
btnDiscount.addEventListener('click', discount)
btnResult.addEventListener('click', result);
btnFilter.addEventListener('click', filterVegan);