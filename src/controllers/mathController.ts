import { RequestHandler } from "express"

const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b)
}

const lcm = (a: number, b: number): number => {
  return (a * b) / gcd(a, b)
}

export const getLcm: RequestHandler = (req, res) => {
  const rawNumbers = req.query.numbers as string
  if (!rawNumbers) {
    res.status(400).json({ error: "Falta el parámetro numbers" })
    return
  }

  const numbers = rawNumbers.split(",").map(Number)
  if (numbers.some(isNaN)) {
    res.status(400).json({ error: "Todos deben ser números enteros" })
    return
  }

  const result = numbers.reduce((acc, curr) => lcm(acc, curr))
  res.json({ lcm: result })
  return
}

export const incrementNumber: RequestHandler = (req, res) => {
  const raw = req.query.number
  const num = parseInt(raw as string)
  if (isNaN(num)) {
    res.status(400).json({ error: "Número inválido" })
    return
  }

  res.json({ result: num + 1 })
}
