var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chalk = require('chalk');
var dbURI = 'mongodb://127.0.0.1/joinsdb';

//--- connections etc
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

//Schema
var EmployeeSchema =  new Schema({
  _id: String,
  name: String,
  location: String
}, {collection: 'emp'});

var OrgSchema = new Schema({
  _id: String,
  orgName: String,
  employee: {
    ref: 'EmployeeModel',
    type: String
  }
}, {collection: 'org'});

//Models
mongoose.model('EmployeeModel', EmployeeSchema);
mongoose.model('OrgModel', OrgSchema);