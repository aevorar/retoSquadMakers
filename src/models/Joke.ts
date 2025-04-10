import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface JokeAttributes {
  id: number;
  text: string;
}

interface JokeCreationAttributes extends Optional<JokeAttributes, "id"> {}

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