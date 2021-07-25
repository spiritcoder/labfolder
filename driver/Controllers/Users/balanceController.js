const { createResponse } = require("../../utils/createResponse");
const axios = require("axios");

class Balance {

  async getCurrentBalance(req, res, error) {

    const requestData = req.query.requestString;

    try {

        console.log("Sending Command: Send stable weight value")
        console.log(`Sending: ${requestData}`);
      const response = await axios.get(
        `http://localhost:5000/getBalance?requestString=${requestData}`
      );
      let weightValue = response.data.data;
      console.log(weightValue);
      return createResponse(res, 200, "data", weightValue);
      
    } catch (error) {
      console.error(error);
      return createResponse(res, 401, "An error occured");
    }
  }
}

module.exports = new Balance();
