import bcrypt from "bcrypt";
const signup = (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    };
    res.status(200).send(userData);
};
const signin = (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
    };
    res.status(200).send(userData);
};
export default {
    signup,
    signin
};
