

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Full website is loaded");
    event.preventDefault()
    
    //Verificar campos vacio
    let sendbutton = document.querySelector("button");
    sendbutton.addEventListener("click", () => {
        event.preventDefault()
        let useremail = document.querySelector("#correo-input").value;
        if (useremail == ""){
            alert("El campo Email no debe estar vacio")
        } 

        let userpassword = document.querySelector("#password-input").value;
        if (userpassword == ""){
            alert("El campo Password no debe estar vacio")
        } else if (userpassword.length <= 8){
            alert("La contraseña debe tener mas de 8 caracteres")
        } 

        if (useremail != "" && userpassword.length >= 9){
            alert(`User email ${useremail} , User Password ${userpassword}`)
        }

        
        


        
    })
});