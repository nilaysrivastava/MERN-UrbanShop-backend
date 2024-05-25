const mongoose = require("mongoose");

// const connectDb = () => {
//     console.log("a");
//   mongoose.connect(process.env.DB_URI).then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     }).catch((err)=>{
//         console.log(err);
//     })
//     console.log("b");
// };

// const connectDb = () => {
//     mongoose.createConnection(process.env.DB_URI).asPromise();
// };
connectDb().catch(err => console.log(err));

async function connectDb() {
  await mongoose.connect('#');
  console.log('db connected')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectDb;
