
setTimeout(ApresentarModal,5000);
function ApresentarModal(){
    var modal = document.querySelector(".modal")
    
    if(modal!=null){
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal a").addEventListener("click", function(){
            document.querySelector(".modal").style.display = "none";
        });
    }
}
/*Validação modal*/

if(document.forms["form_modal"] != undefined){
    var form = document.forms["form_modal"];
    form.addEventListener("submit",validarFormModal);
}
function validarFormModal(evt){
    var form = document.forms["form_modal"];
    
    var inputEmail = form.email;
    var valorEmail = form.email.value;
    var posicaoArroba = valorEmail.indexof("@");
    if
        (!valorEmail(valorEmail)){
     
            inputEmail.classname = "nao_valido";
            document.querySelector("span.nao_valido").style.display = "block";
            evt.preventdefault();
        }

}
/*Validação - fale conosco*/
if(document.forms["form_contato"] != undefined){
    
    var form = document.forms["form_contato"];
    form.addEventListener("submit", function(evt){
    
        var formValido = true;

        if(!NaoVazio(form.Nome_completo.value)){
            form.Nome_completo.classname = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.Telefone_de_contato.value)){
            form.Telefone_de_contato.classname = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.Mensagem.value)){
            form.Mensagem.classname = "nao_valido";
            formValido = false;
        }
        
        if(!ValorEmail(form.Email.value)){
            form.Email.classname = "nao_valido";
            formValido = false;
        }

        if  (!formValido){
            evt.preventdefault();
        }
    }
    );
    var inputs = document.querySelectorAll("form[name=form_contato] input[type=text]");
    for(var i = 0; i < inputs.length; i++){
        inputs[i].addEventListener("keypress", function(){
            this.classname = "";
    });
}

var textarea = document.querySelectorAll("form[name=form_contato] textarea");

textarea.addEventListener("keypress", function(){
    this.classname = "";
    document.querySelector(".texto").innerHTML = "Caractere " + this.value.length;
});
    
}
/* Funções */
function ValidarEmail(ValorEmail){
    if
        (
            ValorEmail !=""&&
            ValorEmail.indexof("@")> 3 &&
            ValorEmail.lastindexof(".") > posicaoArroba
            
        ){
            return true;
    }else{
        return false;
    }
}
function NaoVazio(texto){
    if(texto.trim().length > 0){
        return true;
    }else{
        return false;
    }
}