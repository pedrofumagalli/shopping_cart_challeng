document.addEventListener('DOMContentLoaded', () =>  {
  const items = [
    {
      id: 1, 
      name: 'Product 1',
      price: 100,
      imgSrc: 'images/image1.png',
      total: 100,
    },
    {
      id: 2, 
      name: 'Product 2',
      price: 200,
      imgSrc: 'images/image2.png',
      total: 200,
    },
    {
      id: 3, 
      name: 'Product 3',
      price: 300,
      imgSrc: 'images/image3.png',
      total: 300,
    },
    {
      id: 4, 
      name: 'Product 4',
      price: 400,
      imgSrc: 'images/image3.png',
      total: 400,
    },
  ];
  
  function increment(index, price) {
    const elQty = document.getElementById(`qty-item-${index}`);
    elQty.value = parseInt(elQty.value) + 1;
    const elTotal = document.getElementById(`price-total-${index}`);
    elTotal.innerHTML = Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price * elQty.value);
  }

  function decrement(index, price) {
    const elQty = document.getElementById(`qty-item-${index}`);
    console.log(elQty.value);
    if (parseInt(elQty.value) > 1 ) {
      elQty.value = parseInt(elQty.value) - 1;
      const elTotal = document.getElementById(`price-total-${index}`);
      elTotal.innerHTML = Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price * elQty.value);
    } 
  }

  items.map((item, index) => {
  const elProducts = document.getElementById('products');
    elProducts.insertAdjacentHTML('beforeend', `
      <div class="product">
        <img src="${item.imgSrc}">
        <h2>${item.name}</h2>
        <div class="input">
          <button type="button" id="btn-subtract-${index}" class="btnenter">-</button>
          <input type="text" name="number" id="qty-item-${index}" value="1" class="inputnumber">
          <button type="button" id="btn-sum-${index}" class="btnenter">+</button>
        </div>
        <h3>${Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(item.price)}</h3>
        <h3 id="price-total-${index}">${Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(item.price)}</h3>
      </div>
    `);
    
    const btnSum = document.getElementById(`btn-sum-${index}`);
    console.log(btnSum);
    btnSum.addEventListener('click', () => increment(index, item.price));

    const btnsubtract = document.getElementById(`btn-subtract-${index}`);
    console.log(btnsubtract);
    btnsubtract.addEventListener('click', () => decrement(index, item.price)); 
  });

  const count = document.getElementById('head');
  count.insertAdjacentHTML('beforeend', `<h2>(${items.length})</h2>`);
});





                               


