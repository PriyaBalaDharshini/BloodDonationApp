import express from "express"
import donorController from "../controllers/donorController.js"

const router = express.Router()

router.post("/createDonor", donorController.createDonor)

router.get("/allDonors", donorController.getAllDonors)
router.get("/getDonor/:id", donorController.getOneDonor)

router.put("/updateDonor/:id", donorController.updateDonor)

router.delete("/deleteDonor/:id", donorController.deleteDonor)


export default router