document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');


    form.addEventListener('submit', function(event) {
        const gmail = document.getElementById('Gmail').value;


        // Validar correo electrónico
        if (!gmail.includes('@')) {
            alert('El correo electrónico debe contener el símbolo @.');
            event.preventDefault();
            return;
        }

        // Validar campos vacíos y longitudes
        const fields = {
            'Primer Nombre': document.getElementById('PrimNom').value,
            'Segundo Nombre': document.getElementById('SegNom').value,
            'Primer Apellido': document.getElementById('PrimAp').value,
            'Segundo Apellido': document.getElementById('SegAp').value,
        };

        for (const [label, value] of Object.entries(fields)) {
            if (value.trim() === '') {
                alert(`${label} no puede estar vacío.`);
                event.preventDefault();
                return;
            }
        }

        // Validar longitud de campos
        if (fields['PrimNom'].length < 5 || fields['PrimNom'].length > 100) {
            alert('El Nombre debe de tener minimo 5 caracteres.');
            event.preventDefault();
            return;
        }
        if (fields['SegNom'].length < 5 || fields['SegNom'].length > 100) {
            alert('El segundo El Nombre debe de tener minimo 5 caracteres.');
            event.preventDefault();
            return;
        }
      
    });

});

