function validar() {
    
            const nombre = document.formulario.txt_nombre.value;
            const apellido = document.formulario.txt_apellido.value;
            const rut = document.formulario.rut.value;
            const telefono = document.formulario.txt_telefono.value;
            const email = document.formulario.email.value;
            const comentarios = document.formulario.txt_comentarios.value;


            // Al menos 3 atributos deben tener más de 3 caracteres (excepto rut y teléfono)
 
                if (nombre.length<3){
                    alert("Por favor valide Nombre, mínimo de caracteres 3");
                    document.formulario.txt_nombre.focus();
                    return false;
                }

                if (apellido.length<3){
                    alert("Por favor valide Apellido, mínimo de caracteres 3");
                    document.formulario.txt_apellido.focus();
                    return false;
                }

                if (comentarios.length<3){
                    alert("Por favor valide Comentarios, mínimo de caracteres 3");
                    document.formulario.email.focus();
                    return false;
                }

            // RUT debe tener entre 9 y 10 caracteres e incluir un guion y sin puntos.
                       
                if ( !((/^\d{7,8}\-\d{1}$/).test(rut) || (/^\d{7,8}\-\k$/).test(rut) || (/^\d{7,8}\-\K$/).test(rut))) {
                    alert("Por favor valide RUT, Formato: 11222333-4 ó 11222333-K");

                    return false;
                }
    

            // Teléfono debe comenzar con 9 y tener solo 9 caracteres sin + ni guion
            
                if ( !(/^\9\d{8}$/.test(telefono))) {
                    alert("Por favor valide Teléfono, debe ser de 9 dígitos y comenzar con 9");

                    return false;
                }

            // De estar todo correctamente ingresado mostrar todos los datos en una ventana

            let ventana;

             //Mostrar ventana
                 ventana = window.open("", "", "menubar=no, scrollbars=no, width=600, height=600");
                 ventana.document.write("<p>LOS SIGUIENTES DATOS FUERON INGRESADOS CORRECTAMENTE:</p><br>");

                 //Muestra datos en la ventana creada
                 ventana.document.write("<p>Nombre      : " + nombre + "</p>");
                 ventana.document.write("<p>Apellido    : " + apellido + "</p>");
                 ventana.document.write("<p>Rut         : " + rut + "</p>");
                 ventana.document.write("<p>Teléfono       : " + telefono + "</p>");
                 ventana.document.write("<p>Email       : " + email + "</p>");
                 ventana.document.write("<p>Comentarios : " + comentarios + "</p>");
                 ventana.document.write("<button onclick=\"{ window.close(); } \">Cerrar ventana</button>");
             
               }
             
         
             
             
             document.formulario.submit() = true;
