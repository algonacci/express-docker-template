//Response handler
const resCustom = (code, message, data, res) => {
    res.status(code).json({
        status: {
          code,
          message,
        },
        data,
    });
};

//Response Success
const res200 = (message, data, res) => {
    res.status(200).json({
        status: {
          code: 200,
          message,
        },
        data,
    });
};

const res201 = (message, data, res) => {
    res.status(201).json({
        status: {
          code: 201,
          message,
        },
        data,
    });
};

//Response Fail
const res400 = (res) => {
    res.status(400).json({
        status: {
          code: 400,
          message: "Client side error!",
        },
        data: null,
    });
};

const res401 = (res) => {
    res.status(401).json({
        status: {
          code: 401,
          message: "Unauthorized Access!",
        },
        data: null,
    });
};

const res403 = (res) => {
    res.status(403).json({
        status: {
          code: 403,
          message: "Forbidden",
        },
        data: null,
    });
};

const res404 = (res) => {
    res.status(404).json({
        status: {
          code: 404,
          message: "URL not found!",
        },
        data: null,
    });
};

const res405 = (res) => {
    res.status(405).json({
        status: {
          code: 405,
          message: "Request method not allowed!",
        },
        data: null,
    });
};

const res500 = (res) => {
    res.status(500).json({
        status: {
          code: 500,
          message: "Server error!",
        },
        data: null,
    });
};

module.exports = {
    resCustom,
    res200,
    res201,
    res400,
    res401,
    res403,
    res404,
    res405,
    res500,
}
  