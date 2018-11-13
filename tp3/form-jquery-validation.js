
$(document).ready(function() {

    console.log( "DOM ready!" );

                
    
        $("#envoyer").on("click", function (event) {
            $('#myModal').modal("show");
            event.preventDefault();
            $(document).keyup(function(){

                valid = true ;

                if($("#nom").val().length == 0 ){
                    $("#nom").css("border-color","red");
                    $(".modal-title").text(" Attention : erreur de saisie ");
                    $(".modal-body").html("Le champs nom est vide. Veuillez le remplir !");
                    valid=false;
                }

                else 
                    if($("#nom").val().length < 5 ){
                    $("#nom").css("border-color","red");
                    $(".modal-title").text(" Attention : erreur de saisie ");
                    $(".modal-body").html("Le champs nom doit contenir au moins 5 caractères !");
                    valid=false;
                    }
                    else
                    if($("#Prenom").val().length < 5 ){
                        $("#Prenom").css("border-color","red");
                        $(".modal-title").text(" Attention : erreur de saisie ");
                        $(".modal-body").html("Le champs Prénom doit contenir au moins 5 caractères !");
                        valid=false;
                        }
                        
    
                        else 
                            if($("#Prenom").val().length == 0 ){
                            $("#Prenom").css("border-color","red");
                            $(".modal-title").text(" Attention : erreur de saisie ");
                            $(".modal-body").html("Le champs Prénom est vide. Veuillez le remplir !");
                            valid=false;
                            }
                            else
                                if($("#datedenaissance").val().length<5){
                                    $("#datedenaissance").css("border-color","red");
                                    $(".modal-title").text(" Attention : erreur de saisie ");
                                    $(".modal-body").html("Le champs Date de naissance doit contenir au moins 5 caractères !");
                                    valid=false;
                                    }
                                    else
                                        if($("#datedenaissance").val().length == 0 ){
                                        $("#datedenaissance").css("border-color","red");
                                        $(".modal-title").text(" Attention : erreur de saisie ");
                                        $(".modal-body").html("Le champs Date de naissance est vide. Veuillez le remplir !");
                                        valid=false;
                                        }
                                        else
                                            if($("#Adresse").val().length == 0 ){
                                                $("#Adresse").css("border-color","red");
                                                $(".modal-title").text(" Attention : erreur de saisie ");
                                                $(".modal-body").html("Le champs Adresse est vide. Veuillez le remplir !");
                                                valid=false;
                                                }
                            
                                                else 
                                                    if($("#Adresse").val().length < 5 ){
                                                    $("#Adresse").css("border-color","red");
                                                    $(".modal-title").text(" Attention : erreur de saisie ");
                                                    $(".modal-body").html("Le champs Adresse doit contenir au moins 5 caractères !");
                                                    valid=false;
                                                    }
                                                    else
                                                        if($("#email").val().length == 0 ){
                                                            $("#email").css("border-color","red");
                                                            $(".modal-title").text(" Attention : erreur de saisie ");
                                                            $(".modal-body").html("Le champs Email est vide. Veuillez le remplir !");
                                                            valid=false;
                                                            }
                                        
                                                            else 
                                                                if($("#email").val().length < 5 ){
                                                                $("#email").css("border-color","red");
                                                                $(".modal-title").text(" Attention : erreur de saisie ");
                                                                $(".modal-body").html("Le champs email doit contenir au moins 5 caractères !");
                                                                valid=false;
                                                                }
                                                                else
                                                                {
                                                                    $("#nom").css("border-color","green");
                                                                    $("#Prenom").css("border-color","green");
                                                                    $("#datedenaissance").css("border-color","green");
                                                                    $("#Adresse").css("border-color","green");
                                                                    $("#email").css("border-color","green");
                                                                    $(".modal-title").html("Bienvenue "+ $("#Prenom").val()+" "+$("#nom").val())+"<br/>"+" Vous êtes né en : "+$("#datedenaissance").val()+"<br/>";
                                                                    $(".error").text("");
                                                                    $(".modal-body").append('<img src = "https://maps.googleapis.com/maps/api/staticmap?markers=' + $("#Adresse").val() + '&zoom=12&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"><br>');
                                                                    $('#myModal').modal("show");
                                                                }
                    return valid;
                });
            });
            

            
    

});
