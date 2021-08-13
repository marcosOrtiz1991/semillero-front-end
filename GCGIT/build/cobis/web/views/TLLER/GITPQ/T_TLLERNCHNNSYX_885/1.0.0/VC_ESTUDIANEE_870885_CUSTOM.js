/* variables locales de T_TLLERNCHNNSYX_885*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.estudianteegvmform;
    

    //"TaskId": "T_TLLERNCHNNSYX_885"


    	

//Entity: EstudianteEV
//EstudianteEV. (Button) View: EstudianteEGVMForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONGOUUDGK_525993 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteEV = true;
    
    let nombre=entities.EstudianteEV.nombre;
    let apellido=entities.EstudianteEV.apellido;
    
    alert(nombre+" "+apellido);

};



}));
