import express from "express";
import router from "./routes/index.js";
import connect from './config/db.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;
const db = process.env.DB_URL || 'mongodb://127.0.0.1/db_asm1_cars';

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

connect(db);
router(app);

app.listen(port, () => {
    console.log("App listening on port " + port);
});
