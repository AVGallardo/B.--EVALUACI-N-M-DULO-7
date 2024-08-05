this.mainMenu();

function mainMenu() {

    var mainOption = Number(prompt("\n\¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. \n\Estoy aquí para ayudarte en lo que necesites. \n\Escribe el número de la opción que buscas: \n\
1.- Boletas y Pagos \n\ 2.- Señal y Llamadas \n\ 3.- Oferta Comercial \n\ 4.- Otras Consultas"));        
    !Number.isInteger(mainOption) ? this.mainMenu() : this.choice(mainOption); 
}

function choice(mainOption){
    
    switch (mainOption) {
        case 1:
            this.payBill();
            break;
        case 2:
            this.callSignal();
            break;
        case 3:
            this.sale();
            break;
        case 4:
            this.other();
            break;
        default:
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
            this.mainMenu();
            break;
    }
}

function payBill() {
    var option = Number(prompt("Boletas Y Pagos: \n\ 1.- Ver Boleta \n\ 2.- Pagar Cuenta"));
    !Number.isInteger(option) || option > 2 ? this.payBill() : option == 2 ? alert("Usted está siendo transferido. Espere por favor...") : alert("Haga clic para descargar su boleta"); 
}

function callSignal() {
    var option = Number(prompt("Señal y Llamadas: \n\ 1.- Problemas con la Señal \n\ 2.- Problemas con las Llamadas"));
    !Number.isInteger(option) || option > 2 ? this.callSignal() : application = prompt("A continuación escriba su solicitud");
    alert("Estimado usuario, su solicitud: " +application + " ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos");
}

function sale() {
    var option = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! \n Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
    option.toLowerCase() == 'si' ? alert("Un ejecutivo contactará con usted") : option.toLowerCase() == 'no' ? alert("Gracias por preferir nuestro servicio") : this.sale() ;
}

function other(){
    var consult = prompt("A continuación escriba su consulta");
    alert("Estimado usuario, su consulta: " +consult + " ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos");
}