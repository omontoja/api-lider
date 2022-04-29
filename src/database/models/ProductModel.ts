import { DataTypes } from 'sequelize';
import { db } from '../db';

export const ProductModel = db.define('products', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL(10,2),
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});