const helloIndex = (req, res) => {
  res.status(200).json({
    status: {
      code: 200,
      message: "Success fetching the API!",
    },
  });
};

module.exports = { helloIndex };
