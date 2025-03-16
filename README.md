# Desafio: Criando Classes para um Jogo

Este repositório contém um desafio de programação focado na criação de classes para representar um herói em um jogo de aventura. O objetivo é aplicar conceitos de POO (Programação Orientada a Objetos) utilizando classes e objetos em JavaScript.

## 🚀 Desafio

Crie uma classe genérica que represente um herói de aventura e que possua as seguintes propriedades:

* nome: Nome do herói
* idade: Idade do herói
* tipo: Tipo do herói (ex: guerreiro, mago, monge, ninja)

Além disso, a classe deve conter um método chamado atacar, que deve atender aos seguintes requisitos:

* Exibir a mensagem no console: "O {tipo} atacou usando {ataque}"
* O {tipo} deve ser substituído pelo tipo armazenado na propriedade da classe.
* O {ataque} deve variar conforme o tipo do herói, seguindo a tabela abaixo:

| Tipo | Ataque |
|------|--------|
| Mago | usou magia| 
| Guerreiro|usou espada|
| Monge | usou artes marciais|
| Ninja | usou shuriken |

## 📌 Requisitos

Utilizar conceitos como:

- Variáveis
- Operadores
- Laços de repetição (se necessário)
- Estruturas de decisão
- Funções
- Classes e Objetos

## 💡 Exemplo de Entrada e Saída

<b>Entrada:</b>
``` js
const heroi = new Heroi("Merlin", 150, "mago");
heroi.atacar();
```
<b>Saída:</b>
``` js
O mago atacou usando magia
```
## 🔧 Como executar o desafio

Clone este repositório:
``git clone https://github.com/GeCorreia4/desafio-habilidadeDeHeroi.git``

Acesse o diretório do projeto:
``cd desafio-habilidadeDeHeroi``

Execute o código em um ambiente Node.js:
``node desafio.js``

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar! 🚀
