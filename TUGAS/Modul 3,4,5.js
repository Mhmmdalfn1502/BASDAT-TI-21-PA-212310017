/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// MODUL 3
// No 1
use("Movies");

// db.createCollection("actor")
// db.createCollection("address")

// No 2
// db.address.insert([
//     {
//         id : "Fernanda",
//         fullname : "Fernanda Ramos",
//         email : "fernadaramos4@uol.com.br",
//         age : 24
//     },
//     {
//         id : "Mark",
//         fullname : "Mark Philips",
//         email : "mphilips12@shaw.ca",
//         city : "San Francisco"
//     },
//     {
//         id : "Jennifer",
//         fullname : "Jennifer Peterson",
//         email : "jenniferp@rogers.ca",
//         occupation : "teacher"
//     }
// ])

// db.actor
// .insert([{
//     id : "Fernanda",
//     fullname : "Fernanda Ramos",
//     email : "fernadaramos4@uol.com.br",
//     age : 24
// },
// {
//     id : "Mark",
//     fullname : "Mark Philips",
//     email : "mphilips12@shaw.ca",
//     city : "San Francisco"
// },
// {
//     id : "Jennifer",
//     fullname : "Jennifer Peterson",
//     email : "jenniferp@rogers.ca",
//     occupation : "teacher"
// }])

// No 3
// db.actor.update(
//     {id:"Astrid"},
//     {$set:{fullname:"Astrid John"}}
// )

// db.actor.remove(
//     {id:"Astrid"}
// )

// MODUL 4
// No 1
// db.address.insertOne({
//   Nama_Produk: "Kulkas",
//   Harga: 10000000,
//   Berat_Produk: 8.9,
//   Rusak: false,
//   Tanggal_Masuk: new Date(),
//   Tag: ["Elektronik", "Perabotan"],
//   Dimensi: {
//     tinggi: 80,
//     panjang: 50,
//     lebar: 20,
//   },
//   Id_Product: ObjectId(),
// });

// No 2
// db.createCollection("continent", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       title: "continent validator",
//       required: ["continent", "last_update"],
//       properties: {
//         continent: {
//           bsonType: "string",
//           description: "'continent' harus dalam bentuk string dan wajib diisi.",
//         },
//         last_update: {
//           bsonType: "date",
//           description: "'last_update' harus dalam bentuk tanggal (date) dan wajib diisi.",
//         },
//       },
//     },
//   },
// });

// No 3
// db.continent.insertOne({
//     continent: "Asia",
//     last_update: ISODate()
//   })

// No 4
// db.continent.insertOne({cont : "Asia", last_update : ISOOate()})

// No 5
// db.address.aggregate([
//     {
//       $lookup: {
//         from: "actor",
//         localField: "id",
//         foreignField: "_id",
//         as: "city"
//       }
//     }
//   ])

//   db.actor.aggregate([
//     {
//       $lookup: {
//         from: "address",
//         localField: "id",
//         foreignField: "_id",
//         as: "city"
//       }
//     }
//   ])

// MODUL 5
// No 1
// db.actor.find({ fullname : { $in : [ "Fernanda Ramos","Mark Philips"] } } ).pretty()

// No 2
// db.actor.find(
//     { name: { $regex: /G$/, $options: 'i' } }
//   )

// No 3
// db.actor.find().limit(2)

// No 4
// db.actor.find().sort({ fullname: 1 })

// No 5
// db.createCollection("ArrTest")

// db.ArrTest.insertMany([
//   { name: "Document 1", numbers: [1, 2, 3] },
//   { name: "Document 2", numbers: [4, 5, 6] },
//   { name: "Document 3", numbers: [7, 8, 9] }
// ])

// db.ArrTest.updateMany({}, { $push: { numbers: 10 } })
// db.ArrTest.updateMany({}, { $pull: { numbers: 10 } })
// db.ArrTest.updateMany({}, { $addToSet: { numbers: 10 } })
