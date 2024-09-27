  const hamburger = document.getElementById('hamburger_menu');
        const navbar = document.getElementById('mobile_nav');
    
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('left'); // Toggles the class on click
        });
        
         const crossButton = document.getElementById('cross');
    
         crossButton.addEventListener('click', () => {
            navbar.classList.toggle('left'); // Toggles the class on click
        });
