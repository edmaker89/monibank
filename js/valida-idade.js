export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value); //class date nativa do js para reconhecer datas
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade!')
    }
}

function validaIdade(data) {
    const dataAtual = new Date(); //Date() pega a data de agora
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}