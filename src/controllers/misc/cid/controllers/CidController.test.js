const { index, show } = require('./CidController');
const httpMocks = require('node-mocks-http');
const cidFile = require('./data/cid.json')

let [req_test1, res_test1] = [httpMocks.createRequest({ "params": { uid: "Z71" } }), httpMocks.createResponse()];

test(`The result should be: "{"codigo": "Z71", "nome": "Pe"...`, async () => {
  const resultCid = (await show(req_test1, res_test1))._getJSONData();
  const cid = [{
    "codigo": "Z71", 
    "nome": "Pessoas em Contato Com os Serviços de Saúde Para Outros Aconselhamentos e Conselho Médico, Não Classificados em Outra Parte"
  }]
  expect(resultCid).toMatchObject(cid);
});

let [req_test2, res_test2] = [httpMocks.createRequest(), httpMocks.createResponse()];
test(`The result should be: "[{"codigo":"A00","nome":"C\u00f3lera"},{"c"...`, async () => {
  const resultCidFile = (await index(req_test2, res_test2))._getJSONData();
  expect(resultCidFile).toMatchObject(cidFile);
});