export const getIndexhtml =  (req, res) => {
    res.sendFile(process.cwd() + "/client/src/index.html");
};

export const getnicepage = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/style/nicepage.css");
};

export const getCasa = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/style/Casa.css");
};

export const getLetter = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/style/letters-style.css");
};

export const getJquery = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/scripts/jquery.js");
};

export const getNicepagejs = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/scripts/nicepage.js");
};

export const getImgPropiIntelec = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/images/propiedad-intelectual.jpg");
};