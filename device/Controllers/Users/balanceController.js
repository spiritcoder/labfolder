const { createResponse } = require("../../utils/createResponse");

class Balance {
  async getCurrentBalance(req, res, error) {
    let requestString = req.query.requestString;
    let asciiValue = await getRequestASCIIValue(requestString);
    let response = "";

    if (asciiValue == "[0x73,0x0a]" || asciiValue == "[0x73]") {
      console.log("Command recognized.");
      let weightValue = getRandomWeightValue();

      if (weightValue > 120) {
        response = `Su+`;
      } else if (weightValue < 0.0014) {
        response = `Su-`;
      } else {
        response = `SuSuuuuu${weightValue}.00ug`;
      }
    }

    console.log("Listening");
    return createResponse(res, 200, "we got here", response);
  }
}

function getRandomWeightValue() {
  return Math.floor(Math.random() * 200 + 1);
}

async function getRequestASCIIValue(input) {
  //to create a fix for nodeJS error in processing new lines, I added these next two lines
  let addPadding = input.replace("\\n", "\\\n");
  let splitInput = addPadding.split("\\");
  function pad_output(input) {
    var l = input.length;
    if (l == 0) return "00";
    if (l == 1) return "0" + input;
    return input;
  }

  var arr1 = [];

  splitInput.forEach((element) => {
    var hex = element.charCodeAt().toString(16);
    hex = "0x" + pad_output(hex);
    arr1.push(hex);
  });

  console.log(`Received: [${arr1.join(",")}] is ${input}`);
  return `[${arr1.join(",")}]`;
}

module.exports = new Balance();
