async function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 dígitos.");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }

        // Preenchendo os campos
        document.getElementById('logradouro').innerText = data.logradouro;
        document.getElementById('bairro').innerText = data.bairro;
        document.getElementById('localidade').innerText = data.localidade;
        document.getElementById('uf').innerText = data.uf;
        document.getElementById('cep-resultado').innerText = data.cep;

    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao consultar o servidor.");
    }
}