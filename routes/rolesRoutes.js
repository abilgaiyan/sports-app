const keys = require('../config/keys');
//const requireLogin = require('../middlewares/requireLogin');
const rolesdata = [{
    "id":1,   
    "rolename": "PI",
    "username": [
        "rudra@singh.com",
        "shenly@glenn.com",
        "victor@twick.com"
    ],
    "permissions": {
        "dataupload": true,
        "settings": true,
        "newusers": true,
        "datadownload": true,
        "changepermission": true,
        "createstudy": true,
        "createbattery": true
    }
},
{
    "id":2,
    "rolename": "coPI",
    "username": [
        "pratap@singh.com",
        "tony@glenn.com"
    ],
    "permissions": {
        "dataupload": true,
        "settings": false,
        "newusers": true,
        "datadownload": false,
        "changepermission": true,
        "createstudy": false,
        "createbattery": false
    }
},
{
    "id":3,
    "rolename": "coordinator",
    "username": [
        "amit@singh.com"
    ],
    "permissions": {
        "dataupload": true,
        "settings": true,
        "newusers": false,
        "datadownload": false,
        "changepermission": false,
        "createstudy": false,
        "createbattery": false
    }
}];


module.exports = app => {
   app.get('/api/roles',  async (req, res) => {
     //console.log(req.body);
    
   //  console.log('aaaa');
   
      res.send(rolesdata);
   });

   app.get('/api/roles/:id',  async (req, res) => {
    //console.log(req.body);
   const id = req.params.id;
    console.log(id);
  
  let result = rolesdata.find(obj => {
      console.log(obj.id);
    return obj.id == id
  })
  
     console.log(result);
     res.send(result);
  });

   app.post('/api/roles',  async (req, res) => {
      const role = req.body;
      console.log(role);
      res.send(role);
   })
   app.put('/api/roles/:id',  async (req, res) => {
    const role = req.body;
    console.log(role);
    res.send(role);
 })
}