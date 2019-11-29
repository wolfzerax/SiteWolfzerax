function cria() {
    var bla=document.getElementById("lista").value;
    var novalinha = '<div class="input-group-text"id="box"><input type="checkbox" aria-label="Chebox para permitir input text" >'+bla+'</div>';
    document.getElementById('linha').innerHTML+=novalinha
}
