const { forExample } = require("../../helpers/forExample");

const helloIndex = (req, res) => {
  forExample();
  res.status(200).json({
    status: {
      code: 200,
      message: "Success fetching the API!",
    },
    data: null,
  });
};

const helloPost = (req, res) => {
  const inputData = req.body;
  console.log(inputData);
  if (Object.keys(inputData).length !== 0) {
    res.status(200).json(inputData);
  } else {
    res.status(400).json({
      status: {
        code: 400,
        message: "Client side error",
      },
      data: null,
    });
  }
};

module.exports = { helloIndex, helloPost };
