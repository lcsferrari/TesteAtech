$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Elevador.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Transportar passageiros entre os andares utilizando o elevador",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 5,
  "name": "que o elevador está no térreo",
  "keyword": "Dado "
});
formatter.match({
  "location": "ElevadorSteps.queOElevadorEstáNoTérreo()"
});
formatter.result({
  "duration": 164895700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Entrada e saída de passageiros do elevador",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador;entrada-e-saída-de-passageiros-do-elevador",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que o passageiro \"Claudia\" que está no 1º andar chamou o elevador",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "que o passageiro \"Evandro\" que está no 2º andar chamou o elevador",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o elevador chegar ao quinto andar",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o elevador volta para o térreo",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Claudia",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "ElevadorSteps.passageiroChamaElevador(String,int)"
});
formatter.result({
  "duration": 1713769100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evandro",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "ElevadorSteps.passageiroChamaElevador(String,int)"
});
formatter.result({
  "duration": 578178100,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorChegarAoQuintoAndar()"
});
formatter.result({
  "duration": 2717000,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 5,
  "name": "que o elevador está no térreo",
  "keyword": "Dado "
});
formatter.match({
  "location": "ElevadorSteps.queOElevadorEstáNoTérreo()"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Alterar idade do passageiro",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador;alterar-idade-do-passageiro",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "que o passageiro \"Claudia\" que está no 1º andar chamou o elevador",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "o elevador subir para o 1º andar",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "deve ser possível editar a idade dela",
  "keyword": "Entao "
});
formatter.step({
  "line": 19,
  "name": "o elevador volta para o térreo",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "Claudia",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "ElevadorSteps.passageiroChamaElevador(String,int)"
});
formatter.result({
  "duration": 2148897200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "ElevadorSteps.elevadorSubirParaOAndar(int)"
});
formatter.result({
  "duration": 175500,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.deveSerPossívelEditarAIdadeDela()"
});
formatter.result({
  "duration": 102200,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 178600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 5,
  "name": "que o elevador está no térreo",
  "keyword": "Dado "
});
formatter.match({
  "location": "ElevadorSteps.queOElevadorEstáNoTérreo()"
});
formatter.result({
  "duration": 126600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Idade de passageiros incorreta",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador;idade-de-passageiros-incorreta",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 23,
  "name": "que o passageiro \"Evandro\" que está no 2º andar chamou o elevador",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "o elevador subir para o 2º andar",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "o elevador volta para o térreo",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Evandro",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "ElevadorSteps.passageiroChamaElevador(String,int)"
});
formatter.result({
  "duration": 1772812800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "ElevadorSteps.elevadorSubirParaOAndar(int)"
});
formatter.result({
  "duration": 131700,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 105500,
  "status": "passed"
});
});