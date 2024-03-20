import carRouter from './car.js';
function router(app){
    app.use('/cars', carRouter);
    app.use('/', (req, res) => {
        res.send('Hello');
    })
}

export default router;