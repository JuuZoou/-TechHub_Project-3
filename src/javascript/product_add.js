const ProductAdd = (action) => {
    let productContainer = document.getElementById('productContainer'),
        productAdd = document.getElementById('productAdd'),
        productOpen = document.querySelector('.content__product-add'),
        productClose = document.querySelector('.content__product-close');

    if(action === 'open'){
        productContainer.style.width = 'calc(100% - 320px)';
        productAdd.style.display = 'flex';
        productOpen.style.display = 'none';
        productClose.style.display = 'block';
    }
    if(action === 'close'){
        productContainer.style.width = '100%';
        productAdd.style.display = 'none';
        productOpen.style.display = 'block';
        productClose.style.display = 'none';
    }
}