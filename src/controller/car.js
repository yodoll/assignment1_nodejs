import Cars from '../models/carModel.js';
class CarController {
    async getAllCar(req, res){
        try {
            const cars = await Cars.find();
            res.status(200).json({
                message: 'Get All Car Completed',
                data: cars,
            })
        } catch (error) {
            res.status(400).json({
                message: error,
            })
        }
    }
    async getDetailCar(req, res){
        try {
            const cars = await Cars.findById(req.params.id);
            if(!cars) {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
            res.status(200).json({
                message: 'Get Detail Car Completed',
                data: cars,
            })
        } catch (error) {
            res.status(400).json({
                message: error,
            })
        }
    }
    async createCar(req, res){
        const createCar = await Cars.create(req.body);
        res.status(200).json({
            message: 'Create Car Completed',
            data: createCar,
        })
    }
    async updateCar(req, res){
        try {
            const cars = await Cars.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!cars) {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
            res.status(200).json({
                message: 'Update Car Completed',
                data: cars,
            })
        } catch (error) {
            res.status(400).json({
                message: error,
            })
        }
    }
    async deleteCar(req, res){
        try {
            const cars = await Cars.findByIdAndDelete(req.params.id);
            if(!cars) {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
            res.status(200).json({
                message: 'Delete Car Completed',
            })
        } catch (error) {
            res.status(400).json({
                message: error,
            })
        }
    }
}

export default CarController;