// Envio correo con js
function sendingEmail() {
	
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var m = document.getElementById("message").value;
    var robot = document.getElementById("demo-human").checked;
    var texto = m;
    // console.log(nombre);
    // console.log(texto);
    // console.log(robot);
    if (nombre.length<1 || email.length<1 || m.length<1 || robot == false) {
            alert("Revise el formulario.\nCompruebe los campos y el check.");  
        } else {
            alert("Hay un problema desde el servidor😥.\nPara evitar errores, vamos a redirigirle a su cliente de correo.");  

            let link = document.createElement('a')

            link.href="mailto:esfanysan@gmail.com?subject=Correo desde mi web personal&body=Hola, soy  "+nombre+
            " y mi Email es: "+email+
            "\n. \nAsunto: "+texto
            link.click()

            alert("Gracias "+nombre+" por usar mi área de contacto. \nSu mensaje ha sido redirigido para el envío con exito.")
              
            document.getElementById("contacto").reset();
        
        }
} 


//Contact con smtpjs
function sendEmail() {
    /*	var nombre = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var robot = document.getElementById("demo-human").checked;
        
        
            if (nombre.length<1 || email.length<1 || message.length<1 || robot == false) {
                alert("Revisa el formulario :)");  
            } else {
                document.getElementById("submit").onclick = alerta();
            }
    }       
    function alerta(event){*/
        var nombre = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var m = document.getElementById("message").value;
        var robot = document.getElementById("demo-human").checked;
        var texto = m;
        /*console.log(texto.length);
        console.log(nombre);
        console.log("funciona");
        alert("correo enviado con éxito"); */
        if (nombre.length<1 || email.length<1 || m.length<1 || robot == false) {
                alert("Revise el formulario");  
            } else {
                Email.send({
                    SecureToken : "6310adf6-d8ed-4dc1-a14a-0d13a2d8a989",
                    To : 'esfanysan@gmail.com',
                    From : "juangmuelas@gmail.com",
                    Subject : "Mensaje desde mi web personal",
                    Body : "<html><h3>Mensaje desde la web Estefanía Santos García</h3><p>Nombre: "+nombre+"</p><p>Email: "+email+"</p><p>Asunto: "+texto+"</p></html>",
                })
                .then(
                message => alert("Gracias "+nombre+". Su mensaje ha sido enviado con exito.")
                );
                document.getElementById("contacto").reset();
            
            }
    }
    function test(){
    console.log("funciona");
    }
    