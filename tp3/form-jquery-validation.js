$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
      

            $(document).keyup(function(){

                valid = false ;
                if($("#nom").val().length < 5 ){
                    $("#nom").css("border-color","#ff0000");
                    $(".modal-title").html("Veuillez remplir tout les champs SVP !");
                    $(".modal-body").text(" Le nom doit contenir 5 caractères ! ");
                    valid=true;
                }
                else{
                    $("#nom").css("border-color","#48DE14");
                }
                if($("#Prenom").val().length < 5 ){
                    $("#Prenom").css("border-color","#ff0000");
                    $(".modal-title").html("Veuillez remplir tout les champs SVP !");
                    $(".modal-body").text(" Le Prénom doit contenir 5 caractères ! ");
                    valid=true;
                }
                else{
                    $("#Prenom").css("border-color","#48DE14");
                }
                if($("#datedenaissance").val().length < 5 ){
                    $("#datedenaissance").css("border-color","#ff0000");
                    $(".modal-title").html("Veuillez remplir tout les champs SVP !");
                    $(".modal-body").text(" La date de naissance doit contenir 5 caractères ! ");
                    valid=true;
                }
                else{
                    $("#datedenaissance").css("border-color","#48DE14");
                }
                if($("#Adresse").val().length < 5 ){
                    $("#Adresse").css("border-color","#ff0000");
                    $(".modal-title").html("Veuillez remplir tout les champs SVP !");
                    $(".modal-body").text(" L'adresse doit contenir 5 caractères ! ");
                    valid=true;
                }
                else{
                    $("#Adresse").css("border-color","#48DE14");
                }
                if($("#email").val().length < 5 ){
                    $("#email").css("border-color","#ff0000");
                    $(".modal-title").html("Veuillez remplir tout les champs SVP !");
                    $(".modal-body").text(" L'adresse mail doit contenir 5 caractères ! ");
                    valid=true;
                }
                else{
                    $("#email").css("border-color","#48DE14");
                }

                return valid;

            });


            $("#envoyer").on("click", function (event) {
            event.preventDefault();
        
    
         if($("#nom").val() !== "" && $("#Prenom").val() !== "" && $("#datedenaissance").val() !== "" 
         && $("#Adresse").val() !== "" && $("#email").val() !== "" ){
            
            $('#myModal').modal("show");
            $(".modal-title").html("Bienvenue "+ document.querySelector("#Prenom").value);
             $('.modal-body').html("Vous étes né le: "+ document.querySelector("#datedenaissance").value+
            "</br>Et vous Habitez à: "+ document.querySelector("#Adresse").value
            +'</br><a href="https://maps.google.com/maps?q='
                                +document.querySelector("#Adresse").value
                                +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                                +document.querySelector("#Adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
        }
        
    });
    

});
