document.addEventListener('DOMContentLoaded', function() {
    // Array con los números de WhatsApp
    const wspNumbers = [
        '56948764112',  
        '56973893988',
        '56999794960',
        '56981561685',
        '56949948868'
    ];

    // Selecciona el botón de WhatsApp 
    const wspButton = document.querySelector('.qlwapp-toggle');

    if (wspButton) {

        wspButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del botón
            const randomIndex = Math.floor(Math.random() * wspNumbers.length);
            const selectedNumber = wspNumbers[randomIndex];
            wspButton.setAttribute('data-phone', selectedNumber); // Cambia el número de teléfono
            const message = '¡Hola! Me gustaría obtener más información.';
            const wspUrl = `https://wa.me/${selectedNumber}?text=${encodeURIComponent(message)}`;
            window.open(wspUrl, '_blank'); // Abre WhatsApp con el nuevo número
        });
    }
});