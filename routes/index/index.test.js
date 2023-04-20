const { response } = require("express");
const request = require("supertest");
const app = require("../../app");

describe("Test GET /", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
