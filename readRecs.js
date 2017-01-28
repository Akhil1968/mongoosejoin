var mongoose = require('mongoose');
var db = require('./db.js');
var chalk = require('chalk');
var OrgModel = mongoose.model('OrgModel');

var query = OrgModel.findOne({ _id: 'C300' });
query.populate('employee');
query.exec(function (err, anOrg) {
  if (err) return handleError(err);
  console.log('The org id is %s', chalk.green(anOrg._id));
  console.log('The org name is %s', chalk.green(anOrg.orgName));
  console.log('The org->employee id is %s', chalk.underline.green(anOrg.employee._id));
  console.log('The org->Employee name is %s', chalk.underline.green(anOrg.employee.name));
  console.log('The org->employee location is %s', chalk.underline.green(anOrg.employee.location));
});

setTimeout(function(){  mongoose.disconnect(); }, 200);