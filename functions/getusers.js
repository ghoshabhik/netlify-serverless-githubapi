const axios = require("axios");

exports.handler = (event, context, callback) => {
  const API_URL = "https://api.github.com/users";
  const API_CLIENT = "74d4161cd408f0b7a48b";
  const API_CLIENT_SECRET = "34f003b2d17f7695fc5b9310eef4064d2716a775";

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
