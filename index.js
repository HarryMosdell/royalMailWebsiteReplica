    <script> 

        const hamburger = document.getElementById('hamburger_menu');
        const navbar = document.getElementById('mobile_nav');
        const crossButton = document.getElementById('cross');

        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('left');
            navbar.classList.toggle('d-none');
            
        });
        
         crossButton.addEventListener('click', () => {
            navbar.classList.toggle('left'); // Toggles the class on click
            
        } );


            navbar.addEventListener('transitionend', () => {
            navbar.classList.toggle('d-none');
            
        });
    </script>
