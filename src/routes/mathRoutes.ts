import express from "express"
import {
  getLcm,
  incrementNumber
} from "../controllers/mathController"

const router = express.Router()

router.get("/lcm", getLcm)
router.get("/increment", incrementNumber)

export default router
