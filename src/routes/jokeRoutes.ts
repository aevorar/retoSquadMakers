import { Router, Request, Response } from "express";
import {
  getJoke,
  saveJoke,
  updateJoke,
  deleteJoke,
} from "../controllers/jokeController";

const router = Router();

router.get("/", getJoke);
router.get("/:type", getJoke);
router.post("/", saveJoke);
router.put("/", updateJoke);
router.delete("/", deleteJoke);

export default router;
