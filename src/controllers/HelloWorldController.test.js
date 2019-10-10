const { index } = require("./HelloWorldController");
const httpMocks = require("node-mocks-http");

test('The message should be: { message: "Hello World from Controller Test Evans" }', async () => {
  const message = (await index(
    httpMocks.createRequest(),
    httpMocks.createResponse()
  ))._getJSONData();

  expect(message).toMatchObject({
    message: "Hello World from Controller Test Evans with Tests"
  });
});
