async function buscaEndereco(cep) {
    try {
        var cep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var converteCep = await cep.json();

        if(converteCep.erro){
            throw Error('CEP NÂO EXISTE');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');
        
        cidade.value = converteCep.localidade;
        logradouro.value = converteCep.logradouro;
        bairro.value = converteCep.bairro;
        estado.value = converteCep.uf;


        console.log(converteCep);
        return converteCep;
    

    } catch(erro) {
        console.log(erro);
    }
    


}


var cep = document.getElementById('cep');

cep.addEventListener("focusout", () => buscaEndereco(cep.value));

