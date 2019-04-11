const req = require("supertest");
const s = require("./api/server");

const allGameData = {
  title: "Mass Effect", // required
  genre: "Shooter", // required
  releaseYear: 2007 // not required
};

const partialGameData = {
  title: "Mass Effect", // required
  // genre: null, // required but left out for the test
  releaseYear: 2007 // not required
};

describe("Games", () => {
  describe("POST to /games", () => {
    it("should return status 201", async () => {
      let res = await req(s)
        .post("/games")
        .send(allGameData);
      expect(res.status).toBe(201);
    });

    it("returns successfully", async () => {
      let res = await req(s)
        .post("/games")
        .send(allGameData);
      expect(res.body).toEqual({ message: "Mass Effect successfully added" });
    });
    it("returns 422 if information is incomplete", async () => {
      let res = await req(s)
        .post("/games")
        .send(partialGameData);
      expect(res.status).toBe(422);
    });
  });

  describe("GET /games endpoint", () => {
    it("returns 200 when successful", async () => {
      let res = await req(s).get("/games");
      expect(res.status).toBe(200);
    });
    it("return empty array if no games are found", async () => {
      let res = await req(s).get("/games");
      expect(res.body).toEqual([]);
    });
    it("returns array of games", async () => {
      let res = await req(s).get("/games");
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});