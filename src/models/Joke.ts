// models/Joke.ts
import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../config/db"

interface JokeAttributes {
  id: number
  titulo: string
  cuerpo: string
  idUsuario: number
}

interface JokeCreationAttributes extends Optional<JokeAttributes, "id" | "titulo" | "idUsuario"> {}

export class Joke extends Model<JokeAttributes, JokeCreationAttributes> implements JokeAttributes {
  public id!: number
  public titulo!: string
  public cuerpo!: string
  public idUsuario!: number
}

Joke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => `Chiste ${Date.now()}`
    },
    cuerpo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  },
  {
    sequelize,
    tableName: "Chistes",
    timestamps: false,
  }
)
