import express from 'express';
import { config } from 'dotenv';
import './src/variables.js';
import './src/templates.js';
import "./src/funciones.js";
import "./src/desectruturacion.js"
import "./src/promesas.js"
import "./src/asyncAwait.js"
config();

const app = express();
const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});