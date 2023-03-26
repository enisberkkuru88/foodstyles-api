const context = require("../data-models/user-data");


//Signsup new user to the system can be used for hash for password
async function create(name, email, password) {
  let user = await context.UserDM.findOne({ where: { email: email } });
  if(user!=null)
  {
    return JSON.stringify(null);
  }
  user = await context.UserDM.create({
    name:name,
    email:email,
    password:password
  });
  return JSON.stringify(user);
}

//gets user by name,password
async function get(name,password) {
    const user = await context.UserDM.findOne({ where: { name: name,password:password } });
    return JSON.stringify(user);
}

module.exports = { create,get };
