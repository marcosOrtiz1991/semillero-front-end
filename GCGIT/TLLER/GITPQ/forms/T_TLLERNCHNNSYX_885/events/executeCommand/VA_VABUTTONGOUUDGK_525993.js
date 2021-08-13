

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