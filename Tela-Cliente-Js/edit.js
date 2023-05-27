const loginBtn = document.getElementById("att-cad");
const modal = document.getElementById("edit-modal");

loginBtn.onclick = function () {
    modal.style.display = "block";
}

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    modal.style.display = "none";}

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).ready(function () {
        var $campo = $("#cep");
        $campo.mask('00000-000', { reverse: true });
    });

    $(document).ready(function(){
        $('#telefone').mask('(00) 0000-0000');
    });
    
    $(document).ready(function(){
        $('#telefone1').mask('(00) 0000-0000');
    });
    