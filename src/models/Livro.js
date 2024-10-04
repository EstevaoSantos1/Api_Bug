import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true,"Titulo obrigatorio"]},
    autor: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "Autor obrigatorio"]
    },
    editora: 
    {
      type: String, 
      required: [true,"Editora Obrigatoria"],
      enum:{
        values: ["Classica","Casa do Terror"],
        message: "A Editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate:{
        validator: (valor) => {
          return valor >= 10 && valor <= 3000;
        },
        message: "O número de páginas deve estar entre 10 e 3000. Valor fornecido {VALUE}"
      }
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;