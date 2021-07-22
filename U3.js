/* Declarando la función  */

function esMayor(edad1, edad2) 
{
  if (edad1<edad2)
  {
     return false;
  }
  else{
    return true;
  }
}


/*
* Declarando la variable 'mycar';
* Se crea e inicializa el nuevo objeto;
* para hacer referencia a él mediante 'mycar'* 
*/
imayor=0;
const usuario=[];
const edad=[];
for (let i=0;i<3;i++){
  usuario.push(prompt('Ingrese nombre de usuario ' + (i+1),'Nombre'));
  edad.push(Number(prompt('Ingrese edad  del usuario ' + (i+1), 'Edad')));
  if (esMayor(edad[i], edad[imayor])){
      imayor=i;
  }
}
alert('El usuario nro '+ (imayor +1) + ' llamado ' + usuario[imayor] + ' es el mayor  - con edad de ' +edad[imayor] +' años');
