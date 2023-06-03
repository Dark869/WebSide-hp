import { Router } from "express";
import { 
    getIndexhtml,
    getPagina1,
    getnicepage,
    getJquery,
    getNicepagejs,
    getImg1,
    getImg2,
    getImgCss1,
    getImgCss2,
    getImgCss3,
    getImgCss4,
    getImgCss5,
    getImgCss6
} from "../controllers/main.controller.js";

const router = Router();

router.get("/", getIndexhtml);

router.get("/styles/Pagina1.css", getPagina1);

router.get("/styles/nicepage.css", getnicepage);

router.get("/scripts/jquery.js", getJquery);

router.get("/scripts/nicepage.js", getNicepagejs);

router.get("/images/ImagendeWhatsApp2023-05-04alas00.10.26.jpg", getImg1);

router.get("/images/ImagendeWhatsApp2023-05-04alas21.35.59.jpg", getImg2);

router.get("/styles/images/edfmin1.jpg", getImgCss1);

router.get("/styles/images/new.png", getImgCss2);

router.get("/styles/images/6203999.jpg", getImgCss3);

router.get("/styles/images/cartoon-document-icon-in-comic-style-archive-data-file-sign-illustration-pictogram-document-business-splash-effect-concept-vector.jpg", getImgCss4);

router.get("/styles/images/53400251-contacto-o-conexin-hablar-por-telfono-personaje-de-dibujos-animados.webp", getImgCss5);

router.get("/styles/images/juicio-e1607909165931.jpg", getImgCss6);

export default router;