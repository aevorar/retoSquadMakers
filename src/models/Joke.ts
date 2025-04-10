import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

// 1. Define los atributos del modelo
interface JokeAttributes {
  id: number;
  text: string;
}

// 2. Define los atributos opcionales al crear (id se genera automáticamente)
interface JokeCreationAttributes extends Optional<JokeAttributes, "id"> {}

// 3. Crea el modelo con tipos
export const Joke = sequelize.define<Model<JokeAttributes, JokeCreationAttributes>>(
  "Joke",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "jokes",
    timestamps: false,
  }
);