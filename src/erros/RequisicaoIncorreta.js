import ErroBase from "./erroBase.js";

class RequisicaoIncorreta extends ErroBase{
  constructor(mensagem= "Dados de Requisição Incorreta"){
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;