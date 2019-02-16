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