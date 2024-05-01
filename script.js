document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) 
        {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Obtener la posición del elemento objetivo
            const targetPosition = targetElement.getBoundingClientRect().top;
            
            // Animación de desplazamiento suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
