const validateUser = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).send({
            msg: "Please provide Name"
        });
    }
    ;
    if (!req.body.email) {
        return res.status(400).send({
            msg: "Please provide Email"
        });
    }
    ;
    if (!req.body.password) {
        return res.status(400).send({
            msg: "Please provide Password"
        });
    }
    ;
    next();
};
export default {
    validateUser
};
