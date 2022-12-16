import dotenv from "dotenv-safe";
import Login from "@src/core/auth";

dotenv.config({
    allowEmptyValues: true
});

Login();