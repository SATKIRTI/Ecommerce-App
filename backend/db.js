const mongoose = require('mongoose');
const mongoURI = 'mongodb://milkapp:kajal10@ac-k3i3j5i-shard-00-00.percdtd.mongodb.net:27017,ac-k3i3j5i-shard-00-01.percdtd.mongodb.net:27017,ac-k3i3j5i-shard-00-02.percdtd.mongodb.net:27017/milkdelightproject?ssl=true&replicaSet=atlas-149e2x-shard-0&authSource=admin&retryWrites=true&w=majority';


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("milk_product");
    let data = await fetched_data.find({}).toArray();
    let milk_category = mongoose.connection.db.collection("milk_category");
    let catData = await milk_category.find({}).toArray();
    global.milk_product = data;
    global.milk_category= catData;
    console.log();
  } catch (error) {
    const err = error;
    console.log('Error: ', err);
    if (err) {
      console.log(err);
    }
  }
};

module.exports = mongoDB;
