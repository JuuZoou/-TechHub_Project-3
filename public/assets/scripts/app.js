const logOut = () => {
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    document.location = '/';
}
const Popup = (action, target) => {
    let x;
    let loginPopup = document.getElementById('loginPopup'),
        registrationPopup = document.getElementById('registrationPopup'),
        formInput = document.querySelectorAll('.form__input'),
        messagePopup = document.getElementById('messagePopup');
    // Login Popup
    if (action === 'open' && target === 'authorization') {
        loginPopup.style.display = 'flex';
        x = setTimeout(() => {
            clearTimeout(x); 
            loginPopup.style.opacity = "1";
        }, 100)
    }
    if (action === 'close' && target === 'authorization') {
        loginPopup.style.opacity = "0";
        x = setTimeout(() => {
            clearTimeout(x);
            loginPopup.style.display = 'none';
        }, 100)
    }
    // Registration Popup
    if (action === 'open' && target === 'registration') {
        registrationPopup.style.display = 'flex';
        x = setTimeout(() => {
            clearTimeout(x); 
            registrationPopup.style.opacity = "1";
        }, 100)
    }
    if (action === 'close' && target === 'registration') {
        registrationPopup.style.opacity = "0";
        x = setTimeout(() => {
            clearTimeout(x);
            registrationPopup.style.display = 'none';
        }, 100)
    }
    if(action === 'close'){
        for( let i = 0; i < formInput.length; i++){
            formInput[i].value = '';
        }
    }
    if(action === 'close' && target === 'message'){
        messagePopup.style.opacity = '0';
        x = setTimeout(() => {
            clearTimeout(x);
            messagePopup.style.display = 'none';
        }, 100)
    }
}
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
const SwitchTabs = (target) => {
    let switchPerson = document.getElementById('switchPerson'),
        switchCompany = document.getElementById('switchCompany'),
        tabButton = document.querySelectorAll('.popup__tab');
    // Person Switch
    if (target === 'person') {
        switchPerson.style.display = 'block';
        switchCompany.style.display = 'none';

        tabButton[0].setAttribute('class', 'switch__tab popup__tab active');
        tabButton[1].setAttribute('class', 'switch__tab popup__tab');
    }
    // Company Switch
    if (target === 'company') {
        switchPerson.style.display = 'none';
        switchCompany.style.display = 'block';

        tabButton[0].setAttribute('class', 'switch__tab popup__tab');
        tabButton[1].setAttribute('class', 'switch__tab popup__tab active');
    }

    let contentNew = document.getElementById('contentNew'),
        contentPopular = document.getElementById('contentPopular'),
        contentSale = document.getElementById('contentSale'),
        contentButton = document.querySelectorAll('.content__tab');

    if (target === 'contentNew') {
        contentNew.style.display = 'flex';
        contentPopular.style.display = 'none';
        contentSale.style.display = 'none';

        contentButton[0].setAttribute('class', 'switch__tab content__tab active');
        contentButton[1].setAttribute('class', 'switch__tab content__tab');
        contentButton[2].setAttribute('class', 'switch__tab content__tab');
    }

    if (target === 'contentPopular') {
        contentNew.style.display = 'none';
        contentPopular.style.display = 'flex';
        contentSale.style.display = 'none';

        contentButton[0].setAttribute('class', 'switch__tab content__tab');
        contentButton[1].setAttribute('class', 'switch__tab content__tab active');
        contentButton[2].setAttribute('class', 'switch__tab content__tab');
    }

    if (target === 'contentSale') {
        contentNew.style.display = 'none';
        contentPopular.style.display = 'none';
        contentSale.style.display = 'flex';

        contentButton[0].setAttribute('class', 'switch__tab content__tab');
        contentButton[1].setAttribute('class', 'switch__tab content__tab');
        contentButton[2].setAttribute('class', 'switch__tab content__tab active');
    }
}