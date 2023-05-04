export const getIndexhtml =  (req, res) => {
    res.sendFile(process.cwd() + "/client/src/index.html");
};

export const getCss = (req, res) => {
    res.sendFile(process.cwd() + "/client/src/styles/style.css");
};