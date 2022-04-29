require('dotenv').config();
import express, { json } from 'express';
import { router } from './routes';
import { ProductModel } from './database/models/ProductModel';

const app = express();

app.use(json());
app.use(router);
app.listen(3000, async () => {
	await ProductModel.sync();
	console.log(`App running on 3000!`);
});