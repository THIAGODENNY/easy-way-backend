const { index } = require('./HelloWorldController');
const httpMocks = require('node-mocks-http');
const [ req, res ] = [ httpMocks.createRequest(), httpMocks.createResponse() ];

test('The message should be: { message: "Hello World from Controller Test Evans" }', async () => {
  const message = (await index(req, res))._getJSONData();
  expect(message).toMatchObject({ message: "Hello World from Controller Test Evans" });
});