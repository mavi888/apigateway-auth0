
const authorizer = require('./authorizer');

exports.handler = async (event) => {
  
  let data;

  try {
    data = await authorizer.authenticate(event);
  }
  catch (err) {
      console.log(err);
      return `Unauthorized: ${err.message}`;
  }

  console.log('end')
  console.log(data);
  return data;
};


