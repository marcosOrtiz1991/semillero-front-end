

//Entity: MIOP
//MIOP. (Button) View: EstudianteMIOForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONURHPVTJ_916736 = function(  entities, executeCommandEventArgs ) {
    let nombre = entities.MIOP.nombre;
    let apellido = entities.MIOP.apellido
    let nombreCompleto = nombre+" "+apellido;
    alert(nombreCompleto);
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.MIOP = true;

};