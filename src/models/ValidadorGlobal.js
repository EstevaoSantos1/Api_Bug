import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validador: (valor) => valor !== "",
  message: "Um dos campos foi dado em branco"
});
