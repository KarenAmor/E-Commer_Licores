const addToShoppingCartButtons = document.querySelectorAll('.addToCart'); //Seleccionamos los botones con la clase addToCart.
addToShoppingCartButtons.forEach((addToCartButton) => {          
    addToCartButton.addEventListener('click', addToCartClicked);
});                                                                       //Agregamos el evento click a cada boton.

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked)

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer'); //Selección el contenedor del carrito.


function addToCartClicked(event) {                   //Creamos la función para seleccionar los productos que se clickean. 
    const button = event.target;
    const item = button.closest('.productos')        //El elemento mas cercano de la clase productos 
    
    const itemTitle = item.querySelector('.nombre').textContent;         
    const itemPrice = item.querySelector('.precio').textContent;     
    const itemImg = item.querySelector('.imagenProducto').src;     

    addItemToShoppingCart(itemTitle, itemPrice, itemImg)
}    

function addItemToShoppingCart(itemTitle, itemPrice, itemImg){                 //Función para agregar los productos al carrito

    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for(let i = 0; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerText === itemTitle){
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;
            $('.toast').toast('show');
            updateShoppingCartTotal()
            return;
        };
        
    };

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${itemImg} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;

      shoppingCartRow.innerHTML = shoppingCartContent;
      shoppingCartItemsContainer.append(shoppingCartRow);

      shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

      shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);



      updateShoppingCartTotal()
}


function updateShoppingCartTotal(){                 //Función para actualizar el precio total
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    
    shoppingCartItems.forEach(shoppingCartItem =>{
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', '')); //Quitamos el símbolo $

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);   
        
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        total.className = "total"
        
    });

    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;    
}

function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event){
    const input = event.target
    if(input.value <= 0){
        input.value = 1;
    };
    updateShoppingCartTotal();
};

function comprarButtonClicked() {
    const total = document.querySelector('.shoppingCartTotal');
    const numeroTotal = Number(total.textContent.replace('$', ''))
    if(numeroTotal == 0){
        const target = document.querySelector('.comprarButton')
        // target.removeAttribute('data-target');
        target.setAttribute('data-target', '#comprarModal2')
        
    }else{
        const target = document.querySelector('.comprarButton')
        target.setAttribute('data-target','#comprarModal');
        shoppingCartItemsContainer.innerHTML = '';
        updateShoppingCartTotal();
    }
  }

$(document).ready(function(){
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    $('.category_item').click(function(){
        
        const catProduct = $(this).attr('category');
        
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocutando productos
        $('.productos').hide();
        
        //mostrando productos

        $('.productos[category="'+catProduct+'"]').show();



    })

    $('.category_item[category="all"]').click(function(){
        $('.productos').show();
    })
})
