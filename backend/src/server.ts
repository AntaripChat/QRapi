import app from "./app.js";
import dbconfig from "./config/server.config.js";


app.listen(dbconfig.PORT,()=>{
    console.log(`App Running On ${dbconfig.PORT}`);
})
