import ehUmCPF from "./valida-cpf.js";

const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); //quando retira o focus do elemento
})

function verificaCampo(campo){
    if (campo.name =="cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
}