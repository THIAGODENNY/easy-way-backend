const { index, show } = require("./CidController");
const httpMocks = require("node-mocks-http");
const cidFile = require("./data/cid.json");

test(`The result should be: "{"codigo": "Z71", "nome": "Pe"...`, async () => {
  const resultCid = (await show(
    httpMocks.createRequest({ body: { id: "Z71" } }),
    httpMocks.createResponse()
  ))._getJSONData();
  const cid = [
    {
      codigo: "Z71",
      nome:
        "Pessoas em Contato Com os Serviços de Saúde Para Outros Aconselhamentos e Conselho Médico, Não Classificados em Outra Parte"
    }
  ];

  expect(resultCid).toMatchObject(cid);
});

test(`The result should be: "[{"codigo":"A00","nome":"C\u00f3lera"},{"c"...`, async () => {
  const resultCidFile = (await index(
    httpMocks.createRequest(),
    httpMocks.createResponse()
  ))._getJSONData();

  expect(resultCidFile).toMatchObject(cidFile);
});
