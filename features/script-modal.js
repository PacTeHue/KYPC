const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");

// Открытие модального окна для входа
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Открытие модального окна для регистрации
registerBtn.onclick = function() {
    registerModal.style.display = "block";
}

// Закрытие модального окна для входа
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Закрытие модального окна для регистрации
closeRegister.onclick = function() {
    registerModal.style.display = "none";
}

// Закрытие модальных окон при клике вне их содержимого
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === registerModal) {
        registerModal.style.display = "none";
    }
}

// ------------------------------------------------------------------------------
    const items = document.querySelectorAll('.list-group-item');
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });


    const closeButtons = document.querySelectorAll('.close');


    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

 
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
    // --------------------------------------------------------------------------