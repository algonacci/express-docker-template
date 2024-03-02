const { response } = require("express");
const request = require("supertest");
const app = require("../../app");

const token = 'Ceritanya Token JWT';

describe("Test GET /", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: {
        code: 200,
        message: "Success fetching the API!",
      },
      data: null,
    });
  });
});

describe("Test POST /", () => {
  test("It should respond with 200 success", async () => {
    const inputData = { message: "Hello World!" };
    const response = await request(app).post("/").send(inputData).set("Accept", "application/json").set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      status: {
        code: 201,
        message: "Success create data",
      },
      data: inputData,
    });
  });

  test("It should respond with 400 error when no input data provided", async () => {
    const response = await request(app).post("/").set("accept", "application/json").set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: {
        code: 400,
        message: "Client side error!",
      },
      data: null,
    });
  });

  test("It should respond with 401 error when no token", async () => {
    const response = await request(app).post("/").set("accept", "application/json");
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      status: {
        code: 401,
        message: "Unauthorized Access!",
      },
      data: null,
    });
  });
});

describe("Test GET /test", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/test")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: {
        code: 200,
        message: "Success fetching data",
      },
      data: response.body.data,
  });
  });

  test("It should respond with 401 error when no token", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      status: {
        code: 401,
        message: "Unauthorized Access!",
      },
      data: null,
    });
  });
});
