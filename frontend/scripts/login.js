function calcularDigVerificador(cpf) {
  multi = cpf.length + 1;
  soma = 0;

  for (const dig of cpf) {
    soma += dig * multi;
    multi--;
  }

  digVerifCal = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return digVerifCal;
}
function limparCpf(cpf){
  return cpf.replace(/\D/g, "");
}
function validarCpf(cpf) {
   //Retira o que não for dígito
  cpf = limparCpf(cpf)
  if (cpf.length === 11) {
    regRepet = /^(\d)\1+$/;
    if (!regRepet.test(cpf)) {      

      if (calcularDigVerificador(cpf.substring(0, 9)) == cpf.charAt(9)) { //CALCULAR DIGITO VERIFICADOR 1
        if(calcularDigVerificador(cpf.substring(0,10)) == cpf.charAt(10)){
            return {'valido':true, 'frase':''}
        }else{
            return false
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const btnEnviar = document.getElementById('btnEnviar')
const inpCpf = document.getElementById('cpf')
const inpNome = document.getElementById('nome')
const aviso = document.getElementById('avisoErro')
const formu = document.getElementById('formulario')
const nomeValido = 'admin'
const cpfValido = '09484691536'

btnEnviar.addEventListener('click', () => {
  if(validarCpf(inpCpf.value)) {
    console.log(inpNome.value);
    if(inpNome.value == nomeValido && limparCpf(inpCpf.value) == cpfValido)window.location.href = '../pages/cardapio.html'
    else aviso.textContent = 'Credenciais Inválidas' 
  }else aviso.textContent = "CPF inválido"
})