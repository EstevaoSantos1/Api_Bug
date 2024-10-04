import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagemError = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");


    super(`Os Seguintes erros foram encontrados: ${mensagemError}`);
  }
}

export default ErroValidacao;