var mongoose = require('mongoose');
var db = require('./db.js');
var EmployeeModel = mongoose.model('EmployeeModel');
var OrgModel = mongoose.model('OrgModel');
var chalk = require('chalk');

var addEmp = function(xid, xname, xloc, xoid, xoname){
    //saving an Employee
    var newEmp = new EmployeeModel();
    newEmp._id = xid;
    newEmp.name = xname;
    newEmp.location = xloc;

    newEmp.save(function(err, savedEmp){
        if(err){
            console.log(chalk.red("Error : While saving the story") + JSON.stringify(err));
        }else{
            console.log(chalk.green("Employee saved successfully. ") + JSON.stringify(savedEmp));
        }
    });

    //saving OrgModel
    var newOrg = new OrgModel();
    newOrg._id = xoid;
    newOrg.orgName = xoname;
    newOrg.employee = newEmp._id;

    newOrg.save(function(err, savedOrg){
        if(err){
            console.log(chalk.red("Error : While saving the story") + JSON.stringify(err));
        }else{
            console.log(chalk.green("Org saved successfully. ") + JSON.stringify(savedOrg));
        }
    });


   }//addEmployee

   addEmp("18169", "John", "Pune", "C100", "Oracle");
   addEmp("18170", "Ramesh", "Delhi", "C200", "Microsoft");
   addEmp("18171", "Vijay", "Bangalore", "C300", "Google");

   setTimeout(function(){  mongoose.disconnect(); }, 200);
