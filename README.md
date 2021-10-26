# Inversão de dependência com Cypress e Playwright

## Como rodar o projeto:
- Após clonar o mesmo execute um npm install ou yarn install
- Para cada framework deve ser criado um adapter que implementa a interface onde <br>
contém todos os metódos necessários, esses adpter ficam dentro da pasta src/adapters.
- Para trocar entre um framework e outro acesse a pasta src/data/automation.ts, <br> esse arquivo é responsavel por setar qual adapter será utilizado.

## Objetivo dessa inversão:
Senti que os projetos de automação estavam muito vinculados ao framework, <br>
nos forçando a usar método X ou Y, a idéia aqui é literalmente inverter <br>
essa dependência, de uma forma que o framework implemente os métodos que <br>
setamos na interface e não ao contrario. Esse conceito nos ajuda tambem a <br>
substituir as libs/frameworks utilizados alterando apenas uma linha.

