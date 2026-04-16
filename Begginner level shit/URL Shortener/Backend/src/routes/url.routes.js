import express from "express"
import { shortenUrl,getStats,redirectUrl } from "../controllers/urlController.js"
const router=express.Router()
router.post("/shorten",shortenUrl)
router.get("/stats/:code",getStats)

export default router