$('#form-login').submit(function(e){
e.preventDefault()
var usuario =$.trim($("#user").val());
var password =$.trim($("#pass").val());
console.log(usuario.length);
if(usuario.length == "" || password == ""){
    Swal.fire({
        icon: 'warning',
        title: 'Debe ingresar un usuario y una contraseña para acceder',
    });
    return false;
}else{
    $.ajax({
        url: "bd/login.php",
        type: "POST",
        datatype: "json",
        data: {usuario,password},
        success:function(data){
        if(data == "null"){
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o Password incorrectas'
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Listo',
                confirmButtonColor: '#8E0E00',
                confirmButtonText: 'Ingresar'

            }).then((result)=>{
                if (result.value) {
                    window.location.href="../pag_inicio.php";
                }
            })
            }
            
        }
        
    });
}

});