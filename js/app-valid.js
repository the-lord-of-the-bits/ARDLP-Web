const form = document.getElementById("form");  
 const nombre = document.getElementById("nombre");  
 const email = document.getElementById("email");  
 const password = document.getElementById("password");  
 const cPassword = document.getElementById("c-password");  
 //Mostrar mensaje de error  
 function showError(input, message) {  
  const formControl = input.parentElement;  
  formControl.className = "input error";  
  const small = formControl.querySelector("small");  
  small.innerText = message;  
 }  
 //Mostrar mensaje de error  
 function showSuccess(input) {  
  const formControl = input.parentElement;  
  formControl.classList.add("success");  
 }  
 //Verificar campos requeridos 
 function checkRequired(inputArr) {  
  inputArr.forEach(function (input) {  
   if (input.value.trim() === "") {  
    showError(input, `${getFieldName(input)} es requerido`);  
   } else {  
    showSuccess(input);  
   }  
  });  
 }  
 // Tomar el nombre del campo 
 function getFieldName(input) {  
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
 }  
 // Verificar el largo
 function checkLenghth(input, min, max) {  
  if (input.value.length < min) {  
   showError(  
    input,  
    `${getFieldName(input)} debe tener al menos ${min} caracteres `  
   );  
  } else if (input.value.length > max) {  
   showError(  
    input,  
    `${getFieldName(input)} deben ser menos de  ${max} caracteres `  
   );  
  } else {  
   showSuccess(input);  
  }  
 }  
 // Verificar email 
 function checkEmail(input) {  
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
  if (re.test(input.value.trim())) {  
   showSuccess(input);  
  } else {  
   showError(input, "correo  inválido");  
  }  
 }  
 // Verificar pass coincidentes 
 function checkPasswordMatch(input1, input2) {  
  if (input1.value !== input2.value) {  
   showError(input2, "las contraseñas no coinciden");  
  }  
 }  
 form.addEventListener("submit", (e) => {  
  e.preventDefault();  
  checkRequired([nombre, email, password, cPassword]);  
  checkLenghth(nombre, 3, 15);  
  checkLenghth(password, 8, 25);  
  checkEmail(email);  
  checkPasswordMatch(password, cPassword);  
 });  