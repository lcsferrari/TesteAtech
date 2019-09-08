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
  "duration": 117630600,
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
  "name": "os passageiros devem estar no elevador",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
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
  "duration": 2690919300,
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
  "duration": 1351713500,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorChegarAoQuintoAndar()"
});
formatter.result({
  "duration": 129700,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.osPassageirosDevemEstarNoElevador()"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 82700,
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
  "duration": 141400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Alterar idade do passageiro",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador;alterar-idade-do-passageiro",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "que o passageiro \"Claudia\" que está no 1º andar chamou o elevador",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "o elevador subir para o 1º andar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "deve ser possível editar a idade dela",
  "keyword": "E "
});
formatter.step({
  "line": 20,
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
  "duration": 1697662300,
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
  "duration": 219600,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.deveSerPossívelEditarAIdadeDela()"
});
formatter.result({
  "duration": 251200,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 119000,
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
  "duration": 138200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Idade de passageiros incorreta",
  "description": "",
  "id": "transportar-passageiros-entre-os-andares-utilizando-o-elevador;idade-de-passageiros-incorreta",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 24,
  "name": "que o passageiro \"Evandro\" que está no 2º andar chamou o elevador",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "o elevador subir para o 2º andar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o elevador volta para o térreo",
  "keyword": "E "
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
  "duration": 1490773700,
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
  "duration": 144700,
  "status": "passed"
});
formatter.match({
  "location": "ElevadorSteps.oElevadorVoltaParaOTérreo()"
});
formatter.result({
  "duration": 69700,
  "status": "passed"
});
});