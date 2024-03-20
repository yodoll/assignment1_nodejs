import mongoose from 'mongoose';
export default async function connect(db){
    try {
        await mongoose.connect(db);
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failed:" + error);
    }
}