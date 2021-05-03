const buttons = document.querySelectorAll('.addtoCart');
const container = document.querySelector('.products-added');
const removed = document.querySelectorAll('.remove');
const cart = document.querySelector('.cart');
const priceDisplay = document.querySelector('.amount');

let removeProduct
buttons.forEach(btn => {
  
    btn.addEventListener('click', function(e){
       
      const clicked = e.target.parentNode.classList[1];
      
     
      const price = e.target.parentNode.childNodes[5].textContent;
      const clickedText = e.target.parentNode.childNodes[3].textContent;
      
     
      
      
      const markup = `<div class="product1 Product${clicked} remove">
      <div class="image image${clicked}"></div>
      <div class="title">${clickedText}</div>
      <div class="price cart1">${price}</div>
      </div>`
      container.insertAdjacentHTML('beforeend', markup);
      btn.textContent = 'Remove From Cart'
      
       if (btn.textContent === 'Remove From Cart') {
         removeProduct = e.target.parentNode;
         removeProduct.style.display = 'none'
         const added = parseInt(price);
         
         prices.push(added);
         console.log(prices);

         const total =  prices.reduce((acc ,pr) => acc + pr);
         console.log(total);
         priceDisplay.textContent = total +`$`;
        }
        
      });
    })
    const prices = [];

    
     
      
    
   





cart.addEventListener('click', function(){
btn.removeEventListener('click', function(){

})
});


