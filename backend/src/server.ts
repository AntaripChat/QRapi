import app from "./app.js";
import dbconfig from "./config/server.config.js";
import authRoutes from "./routes/auth.route.js";

authRoutes(app);

app.listen(dbconfig.PORT,()=>{
    console.log(`App Running On ${dbconfig.PORT}`);
})
