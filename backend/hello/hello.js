
exports.handler = async (event) => {

  console.log(event);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ message: 'Authenticated call!' })
  }
}