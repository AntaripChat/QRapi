import authController from "../controller/auth.controller.js";
import middleware from "../middleware/reqAuthBody.js"

export default (app:any) =>{
    app.post('/api/signup',middleware.validateUser,authController.signup),
    app.post('/api/signup',authController.signin)
}