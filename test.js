request = require('supertest');
const SERVER = "http://localhost";
const URL = SERVER + ":3000";
console.log(URL);

describe("GET /produtos", ()=>{
  //using expect from the supertest API. Expectation over the response status
  it("Status should be 200", (done) => {
    const response = request(URL).get("/produtos").expect(200).end(done);
  });

  //using expect from jest. Expectation over the response status
  it("Status should be 200", async () => {
    const response = await request(URL).get("/produtos");
    expect(response.status).toBe(200);
  });

  //using expect from jest. Expectation over a response body field
  it("Quantidade should be 2", async () => {
    const response = await request(URL).get("/produtos");
    expect(response.body.quantidade).toBe(2);
  });
});