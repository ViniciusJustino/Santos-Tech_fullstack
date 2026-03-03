module.exports = (req, res, next) => {

    if (req.session.logado) return next();

    return res.status(401).json({ erro: 'Nao autorizado' });

}
