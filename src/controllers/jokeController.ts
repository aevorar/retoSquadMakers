import { RequestHandler } from "express"
import axios from "axios"
import { Joke } from "../models/Joke"
import { sequelize } from "../models"

export const getJoke: RequestHandler = async (req, res) => {
  try {
    const jokeType = req.params.type?.toLowerCase()    

    await sequelize.sync()

    if (!jokeType) {
      const joke = await Joke.findOne({
        order: sequelize.random()
      })

      if (!joke) {
        res.status(404).json({ error: "No hay chistes" })
      } else {
        res.json({ joke: joke.cuerpo})
      }
      
      return
    }

    if (jokeType === "chuck") {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      )
      res.json({ joke: response.data.value })
      return
    }

    if (jokeType === "dad") {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      res.json({ joke: response.data.joke })
      return
    }

    res.status(400).json({ error: "Tipo de chiste no válido" })
    return
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo chiste" })
    return
  }
}

export const saveJoke: RequestHandler = async (req, res) => {
  const { joke } = req.body

  if (!joke) {
    res.status(400).json({ error: "Falta el texto del chiste" })
    return
  }

  try {
    const newJoke = await Joke.create({ cuerpo: joke })    
    res.status(200).json({ message: "Chiste guardado", id: newJoke.dataValues.id })
    return
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el chiste" })
    return
  }
}

export const updateJoke: RequestHandler = async (req, res) => {
  const number = parseInt(req.query.number as string)
  const newText = req.query.newText as string

  if (isNaN(number) || !newText) {
    res.status(400).json({ error: "Parámetros inválidos" })
    return
  }

  const joke = await Joke.findByPk(number)
  if (!joke) {
    res.status(404).json({ error: "Chiste no encontrado" })
    return
  }

  joke.set({ cuerpo: newText })
  await joke.save()
  res.json({ message: "Chiste actualizado" })
  return
}

export const deleteJoke: RequestHandler = async (req, res) => {
  const number = parseInt(req.query.number as string)
  if (isNaN(number)) {
    res.status(400).json({ error: "Parámetro inválido" })
    return
  }

  const joke = await Joke.findByPk(number)
  if (!joke) {
    res.status(404).json({ error: "Chiste no encontrado" })
    return
  }

  await joke.destroy()
  res.json({ message: "Chiste eliminado" })
  return 
}
