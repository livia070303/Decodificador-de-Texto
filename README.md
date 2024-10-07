# Decodificador de Texto com JavaScript

Este projeto é um simples **decodificador de texto** desenvolvido com **HTML**, **CSS** e **JavaScript**. Ele permite que você criptografe e descriptografe palavras substituindo vogais por códigos pré-definidos.

## Funcionalidades

- **Criptografia de texto**: Substitui vogais (`a, e, i, o, u`) por combinações específicas de caracteres (`ai, enter, imes, ober, ufat`).
- **Descriptografia de texto**: Reverte o texto criptografado para sua forma original.
- **Cópia automática**: O texto decodificado ou criptografado pode ser copiado com um clique.
- **Validação de entrada**: Aceita apenas letras minúsculas sem acentos e sem caracteres especiais.

## Como usar

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` diretamente no seu navegador.
3. Digite uma palavra ou frase no campo de entrada.
4. Clique em **Criptografar** para codificar a palavra, ou em **Descriptografar** para decodificá-la.
5. O resultado será exibido na área de texto abaixo.
6. Se desejar, clique no botão **Copiar** para copiar o resultado para a área de transferência.

## Estrutura do Projeto

- **index.html**: Contém a estrutura básica do projeto, como o campo de entrada de texto e os botões de ação.
- **style.css**: Define o estilo da página, incluindo o layout dos botões e áreas de texto.
- **script.js**: Inclui a lógica para criptografar, descriptografar, validar a entrada e copiar o texto.

## Lógica de Codificação

A criptografia substitui as vogais conforme o seguinte:

- `a` → `ai`
- `e` → `enter`
- `i` → `imes`
- `o` → `ober`
- `u` → `ufat`

A descriptografia reverte essa substituição, retornando o texto ao seu estado original.

### Exemplo

- Entrada: `ola mundo`
- Saída Criptografada: `oberlai mufatndober`
- Descriptografando: `ola mundo`

## Validação

O código verifica se a palavra contém apenas letras minúsculas sem acentos ou caracteres especiais. Caso contrário, uma mensagem de alerta será exibida.


## Tecnologias Utilizadas

- **HTML**: Estrutura do projeto.
- **CSS**: Estilo e layout.
- **JavaScript**: Lógica de criptografia, descriptografia, e interação.
