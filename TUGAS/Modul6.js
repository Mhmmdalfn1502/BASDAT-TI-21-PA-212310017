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

// Insert a few documents into the sales collection.
// Update
// db.customer.update({_id:1}, {$set : {Release_Year : 2003}});

// Remove
// db.customers.remove({_id:2});

// Remove One
// db.customer.deleteOne({age: 25})

// Remove All
// db.film.deleteMany({Length: 90});

// Limit
// db.customer.find().limit(2)

// Skip
// db.customer.find().limit(2).skip(2)

// INDEX
// ensureIndex()
// db.customer.createIndex({"_id": 1})

// unique
// db.customer.createIndex({"age":1}, {unique:true})

// sparse
// db.customer.createIndex({"last_update":1}, {sparse:true})

// expireAfterSeconds
// db.city.createIndex({"last_update": 1}, {expireAfterSeconds: 60})

// v
// db.customer.createIndex({"AddressId": 1},{v : 1})

// Weight
// db.customer.createIndex({Title: "text"}, {weights: {Title: 5}})

// default_language
// db.customer.createIndex({Email : "text"}, {default_language: "english"})

// language_override
// db.customers.createIndex({fullname : "text"}, {language_override: "spanish"})

// AGGREGATION
// $sum
// db.customer.aggregate([ {$group: {_id:null, age: {$sum: '$age' }}}])

// $avg
// db.customer.aggregate([ {$group: { _id: null, age: { $avg: '$age' } } }]);

// Min
// db.customer.aggregate([ {$group: { _id: null, age: { $min: '$age' } } }]);

// Max
// db.customer.aggregate([ {$group: { _id: null, age: { $max: '$age' }} }]);

// Push
// db.actor.updateOne({ID : 1}, {$push : {Usia: 100}})

// AddToSet
// db.actor.updateOne({ID : 1}, {$addToSet : {Usia: 99}})

// First
// db.customer.aggregate({$group: {_id: null, first: {$first: "$$ROOT"}}})

// Last
// db.customer.aggregate({$group: {_id: null, last: {$last: "$$ROOT"}}})

// PIPILINE

// $Project
// db.customer.aggregate([
//     {
//         $project: {
//           "joinedDate": 0
//         }
//     }
// ])

// $Match
// db.customer.aggregate([
//     {
//       $match: {
//         name: "John"
//       }
//     }
//   ])

// $Group
// db.customer.aggregate([
//     {
//         $group: {
//           age: 20
//         }
//     }
// ]);
// [ {age: 20}, {age:14}]

// $Sort
// db.customers.aggregate([
//     {
//         $sort: {
//           fullname: 1
//         }
//     }
// ])

// $Limit
// db.customer.aggregate([
//     {
//         $limit: 2
//     }
// ])

// $Unwind
// db.customer.aggregate([
//     {
//         $unwind: {
//             path: '$age'
//         }
//     }
// ]);
