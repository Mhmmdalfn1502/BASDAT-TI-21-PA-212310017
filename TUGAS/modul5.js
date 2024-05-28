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

// Select the database to use.
use("film");

// 1
// db.customer.find({ name : { $in : ['John', 'Alice'] } }).pretty()

// db.customer.find({ name : { $in: ['John']} }).pretty()

// 2
// db.customer.find( { $and : [ { name : John },{ status : active } ] } ).pretty()

// db.customer.find( { $or : [ { name : "Bob" },{ age : 25 } ] })

// db.customer.find({name : { $not : { $eq: 1 } } })

// 3
// PENGECEKAN DATA
// db.customer.find( {name : { $exists : true }}).pretty()

// MENSORTIR DATA BERDASARKAN SUATU TIPE DATA
// db.customer.find( {name : { $type : "string" } } ).pretty()

// MENCARI SEBUAH DATA BERDASARKAN KATA ATAU HURUF TERTENTU
// db.customer.find( {name : { $regex : "Alice" , $options : ‘<options>’ } } ).pretty()

// 4
// MEMBANDINGKAN
// db.customer.find( {$expr : { $gt : ["$name", "$age"] } } ).pretty()

// 5
// const FindNext = db.film.find()

// FindNext.next()
// FindNext.next()

// 6
// db.customer.find().sort({name:-1}).pretty()

// 7
// LIMIT
// db.customer.find().limit(3).pretty()

// 8
// db.customer.updateMany({_id:1}, {$unset : {name:"John"} } )

// 9
// RENAME
// db.customer.updateMany({_id : 0}, ($rename : {name : "John Doe"}))

// 10
// db.customer.updateMany({_id:10}, {nama: "Bob"}), {upsert:true}

// 11
// db.customer.find( { age : { $elemMatch : { $gt : 1, $lt : 2 } } }).pretty()

// 12
// db.customer.updateOne({_id : 1}, {$push : {results : 100} } )

// 13
// db.customer.updateOne({_id : 1}, {$pull : {results : 1600} } )

// 14
// db.customer.updateOne({_id : 1}, {$addToSet : {results : 160} } )

// db.customer.insert({
//     id : "1",
//     name: "John Doe",
//     age: "14",
//     status: "active"
// })
