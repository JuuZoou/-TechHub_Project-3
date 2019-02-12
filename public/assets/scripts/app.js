const Login = (action) => {
    const loginPopup = document.getElementById('loginPopup');
    
    if(action == 'open'){
        loginPopup.style.display = 'flex';
        setTimeout(() => { 
            loginPopup.style.opacity = "1";
        }, 100)
    }
    if(action == 'close'){
        loginPopup.style.opacity = "0";
        setTimeout(() => {
            loginPopup.style.display = 'none';
        }, 100)
    }
}
const Registration = (action) => {
    const registrationPopup = document.getElementById('registrationPopup');
    
    if(action == 'open'){
        registrationPopup.style.display = 'flex';
        setTimeout(() => { 
            registrationPopup.style.opacity = "1";
        }, 100)
    }
    if(action == 'close'){
        registrationPopup.style.opacity = "0";
        setTimeout(() => {
            registrationPopup.style.display = 'none';
        }, 100)
    }
}