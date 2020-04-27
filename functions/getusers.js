const axios = require("axios");

exports.handler = (event, context, callback) => {
  const { API_URL, API_CLIENT, API_CLIENT_SECRET } = process.env;

  const URL = `${API_URL}?client_id=${API_CLIENT}&client_secret=${API_CLIENT_SECRET}`;

  //Send Response Back
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  };

  //Make API Call
  const getStat = () => {
    axios
      .get(URL)
      .then((response) => {
        send(response.data);
      })
      .catch((error) => {
        send(error);
      });
  };

  //Check GET Request
  if (event.httpMethod == "GET") {
    getStat();
  }
};
