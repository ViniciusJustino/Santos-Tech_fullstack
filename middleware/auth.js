module.exports = (req, res, next) => {

    if (req.session.logado) return next();

}