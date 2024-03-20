import express from 'express';
const router = express.Router();

import CarController from '../controller/car.js';
const carController = new CarController;

router.get('/', carController.getAllCar);
router.get('/:id', carController.getDetailCar);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;