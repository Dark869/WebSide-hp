import { Router } from "express";
import { 
    getIndexhtml,
    getCasa,
    getnicepage,
    getLetter,
    getJquery,
    getNicepagejs,
    getImgPropiIntelec
} from "../controllers/main.controller.js";

const router = Router();

router.get("/", getIndexhtml);

router.get("/style/Casa.css", getCasa);

router.get("/style/nicepage.css", getnicepage);

router.get("/style/letters-style.css", getLetter);

router.get("/scripts/jquery.js", getJquery);

router.get("/scripts/nicepage.js", getNicepagejs);

router.get("/images/propiedad-intelectual.jpg", getImgPropiIntelec);

export default router;