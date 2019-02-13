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