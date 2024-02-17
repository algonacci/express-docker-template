const { response } = require("express");
const request = require("supertest");
const app = require("../../app");

describe("Test GET /", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/").expect("Content-Type", /json/);
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
    const response = await request(app).post("/").send(inputData).set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(inputData);
  });

  test("It should respond with 400 error when no input data provided", async () => {
    const response = await request(app).post("/").set("accept", "application/json");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: {
        code: 400,
        message: "Client side error",
      },
      data: null,
    });
  });
});
