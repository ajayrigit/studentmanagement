const mongoose=require('mongoose');


async function getDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/library').then(()=>{
        console.log("connected")
    
    }).catch(()=>{
        console.log('not connected error')
    });
    

}

module.exports={
    getDatabase 
};