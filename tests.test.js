const req = require("supertest");
const s = require("./api/server");

const data = {
  title: "Mass Effect",
  genre: "Shooter",
  releaseYear: 2007
};

const partial = {
  title: "Mass Effect", 
  // genre: "Shooter",
  releaseYear: 2007
};

describe("Games", () => {
  describe("POST to /games", () => {
    it("should return status 201", async () => {
      let res = await req(s)
        .post("/games")
        .send(data);
      expect(res.status).toBe(201);
    });

    it("returns successfully", async () => {
      let res = await req(s)
        .post("/games")
        .send(data);
      expect(res.body).toEqual({ message: "Mass Effect successfully added" });
    });
    it("returns 422 if information is incomplete", async () => {
      let res = await req(s)
        .post("/games")
        .send(partial);
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