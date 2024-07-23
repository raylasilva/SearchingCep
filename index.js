function validateInputLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.substring(0, maxLength);
  }
}

// const data = fetch("https://viacep.com.br/ws/{}/json/")
//   .then((resposta) => {
//     resposta.json().then((dados) => console.log(dados));
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(console.log("fim"));
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("cepForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário

      const cep = document.getElementById("cepInput").value;

      async function obterDados() {
        try {
          const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const dados = await resposta.json();
          document.getElementById("cepResultado").innerHTML += `
          
            <tr>
              <td>${dados.cep}</td>
              <td>${dados.logradouro}</td>
              <td>${dados.localidade}</td>
              <td>${dados.uf}</td>
              <td>${dados.ibge}</td>
              <td>${dados.ddd}</td>
              <td>${dados.siafi}</td>
            </tr>
            
            `;
        } catch (error) {
          document.getElementById("cepResultado") =`
          <h4>Não encontrado</h4>`
        
        }
      }

      obterDados();
    });
});
