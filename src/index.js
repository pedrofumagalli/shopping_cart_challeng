document.addEventListener('DOMContentLoaded', () =>  {
  const items = [
    {
      id: 1, 
      name: 'Product 1',
      priceunit: 100,
      imgSrc: 'images/image1.png',
      total: 100,
    },
    {
      id: 2, 
      name: 'Product 2',
      priceunit: 200,
      imgSrc: 'images/image2.png',
      total: 200,
    },
    {
      id: 3, 
      name: 'Product 3',
      priceunit: 300,
      imgSrc: 'images/image3.png',
      total: 300,
    },
  ];
  
  function increment(index){
    const elQty = document.getElementById(`qty-item-${index}`);
    console.log(elQty);
    elQty.value = parseInt(elQty.value) + 1;
  }

  function decrement(index) {
    const elQty = document.getElementById(`qty-item-${index}`);
    console.log(elQty);
    elQty.value = parseInt(elQty.value) - 1;
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
      <h3>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.priceunit)}</h3>
      <h3>${item.total}</h3>
    </div>
    `);
    const btnSum = document.getElementById(`btn-sum-${index}`);
    btnSum.addEventListener('click', () => increment(index));
    const btnsubtract = document.getElementById(`btn-subtract-${index}`);
    btnsubtract.addEventListener('click', () => decrement(index));
  });

  const count = document.getElementById('head');
  count.insertAdjacentHTML('beforeend', `<h2>(${items.length})</h2>`);

 
  
});





                               


