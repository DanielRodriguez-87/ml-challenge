const request = require("supertest");
const { expect } = require("chai");

const server = require("./../config/app");

describe("Server Test", () => {
  const query = "Apple ipod";
  const invalidQuery = "sdfdji3i4j24";
  const id = "MLA884642669";
  const invalidId = "MLA884642669P";

  describe("GET /api/items", () => {
    it("Should get products", async () => {
      const response = await request(server).get(`/api/items?q=${query}`);

      expect(response.status).to.equal(200);
      expect(response.body).not.to.be.empty;
    });

    it("Should not get products", async () => {
      const response = await request(server).get(
        `/api/items?q=${invalidQuery}`
      );

      expect(response.status).to.equal(204);
      expect(response.body).to.be.empty;
    });

    it("Should return status 400", async () => {
      const response = await request(server).get(
        `/api/items?query=${query}`
      );

      expect(response.status).to.equal(400);
      expect(response.body).to.be.empty;
    });
  });

  describe("GET /api/items/:id", () => {
    it("Should get a product", async function () {
      const response = await request(server).get(`/api/items/${id}`);

      expect(response.status).to.equal(200);
      expect(response.body).not.to.be.empty;
    });

    it("Should not get a product", async function () {
      const response = await request(server).get(`/api/items/${invalidId}`);

      expect(response.status).to.equal(500);
      expect(response.body).to.be.empty;
    });
  });

  describe("Call no existing endpoint", () => {
    it("Should return status 404", async function () {
      const response = await request(server).get(`/api/item`);

      expect(response.status).to.equal(404);
    });
  });
});
