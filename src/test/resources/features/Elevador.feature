# language: pt
Funcionalidade: Transportar passageiros entre os andares utilizando o elevador

  Contexto:
    Dado que o elevador está no térreo


  Cenário: Entrada e saída de passageiros do elevador
    Dado que o passageiro "Claudia" que está no 1º andar chamou o elevador
    E que o passageiro "Evandro" que está no 2º andar chamou o elevador
    Quando o elevador chegar ao quinto andar
    Então os passageiros devem estar no elevador
    E o elevador volta para o térreo


  Cenário: Alterar idade do passageiro
    Dado que o passageiro "Claudia" que está no 1º andar chamou o elevador
    Quando o elevador subir para o 1º andar
    E deve ser possível editar a idade dela
    E o elevador volta para o térreo


  Cenário: Idade de passageiros incorreta
    Dado que o passageiro "Evandro" que está no 2º andar chamou o elevador
    Quando o elevador subir para o 2º andar
    E o elevador volta para o térreo