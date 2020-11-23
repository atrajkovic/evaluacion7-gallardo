function iniciar(){
  const nombre=document.getElementById("nombre")
  const apellido=document.getElementById("apellido")
  const email=document.getElementById("email")
  nombre.addEventListener("input", validacion, false)
  apellido.addEventListener("input", validacion, false)
  fecha.addEventListener("input", validacion, false)
  validacion()

}

function validacion(){
  if(nombre.value==''){
    nombre.setCustomValidity('Complete su nombre');
    nombre.style.background='#FFDDDD';
  }else{
    nombre.setCustomValidity('');
    nombre.style.background='#FFFFFF';
  }

  if(apellido.value==''){
    apellido.setCustomValidity('Complete su apellido')
    apellido.style.background='#FFDDDD'
  }else{
    apellido.setCustomValidity('')
    apellido.style.background='#FFFFFF'
  }
  }

  window.addEventListener("load", iniciar, false);