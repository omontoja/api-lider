import { Request, Response } from 'express'
import axios from 'axios';
import { ProductModel } from '../database/models/ProductModel'

class ProductController {
	async all(req: Request, res: Response) {
		const products = await ProductModel.findAll();
		return products.length > 0 
					? res.status(200).json(products) 
					: res.status(204).json(products);
	}

	async create(req: Request, res: Response) {
		const { title, price, description, category, image } = req.body;
		const product = await ProductModel.create({
			title,
			price,
			description,
			category, 
			image
		}); 
		return res.status(201).json(product);
	}

	async show(req: Request, res: Response) {
		const id = req.params.id;
		const product = await ProductModel.findOne({
			where: { 
				id
			}
		});

		return product
					? res.status(200).json(product) 
					: res.status(204).json({ message: "Produto não encontrado"});
	}

	async update(req: Request, res: Response) {
		const id = req.params.id;
		await ProductModel.update( req.body, {
			where: { 
				id
			}
		});
		return res.status(204).send();
	}

	async delete(req: Request, res: Response) {
		const id = req.params.id;
		await ProductModel.destroy({
			where: { 
				id
			}
		});
		return res.status(204).send();
	}

	async populate(req: Request, res: Response) {
		await axios({
			method: 'GET',
			url: 'https://fakestoreapi.com/products'
		}).then((response: any)=> {
			ProductModel.bulkCreate(response.data);
			return res.status(201).json(response.data);
		});
	}
}

export default new ProductController();