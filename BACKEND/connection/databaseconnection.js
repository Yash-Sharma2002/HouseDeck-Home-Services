import mongoose from 'mongoose';


const Connection =  async() =>{
    const URL = "mongodb+srv://YashForHouseDeck:Yash2493@housedeck-cluster.z3iki.mongodb.net/HouseDeck-Cluster?retryWrites=true&w=majority"
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
            console.log('connect');
    } catch(error) {
        console.log('Error: from database ', error.message);
    }
}

export default Connection;