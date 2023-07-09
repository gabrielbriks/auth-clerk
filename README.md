
# Autenticação NextJS e NodeJS com Clerk
Implementação de um fluxo básico de autenticação do font-end com NextJS e um back-end com nestify

## Stack e Libs Utilizadas

- NextJS
- Clerk
- TailwindCSS

- Fastify
- Typescript
- TSX

## App Back-end - Destaques

### Configurações realizadas

#### Passo 1 - Configuração do projeto e instalação de libs básicas

  - ```bash
      npm init
    ```

  - ```bash
      npm i fastify dotenv
    ```

  - ```bash
      npm i typescript @types/node tsx -D
    ```

  - ```bash
      npx tsc --init
    ```

#### Passo 2 - Configurações Clerk

- Instalação de libs
  - ```bash
      npm i @clerk/clerk-sdk-node @clerk/fastify	
    ```

#### Passo 3 - Testes com rota publica e privada

- Ao chamar a rota private devemos enviar o token na requisição no campo `bearer token`, pois ao identificar que existe o usuário logado retorna a mensagem.


## App Front-end - Destaques

### Configurações realizadas

- Podemos seguir todos os passos da [documentação](https://clerk.com/docs/nextjs/get-started-with-nextjs) que é bem simples.

- Único ponto que gostaria de destacar nessa parte de configuração(_caso não saiba ou deixe passar batido_) é sobre a criação do arquivo `middleware`, que deve ser criado dentro da pasta `src` do projeto.

### Temas do Clerk

- Para trabalhar com os temas do clerk precisamos instalar as duas bibliotecas abaixo:
  ```bash
    npm i @clerk/themes @clerk/localizations
  ```
  _Lembrando que a biblioteca "@clerk/localizations" servirá para fazer internacionalização_

- Passo 1 - Internacionalização:
  - Realizar a importação do nosso idioma do `@clerk/localizations` dentro do `app/layout.tsx` e adicionar no Provider do Clerk

- Passo 2 - Temas:
  - Podemos importar [temas predefinidos]('https://clerk.com/docs/component-customization/appearance-prop') do Clerk, mas também é possível realizar [customizações com Tailwind ou CSS]('https://clerk.com/docs/component-customization/using-tailwind')

## Execução do projeto

- Deve possuir conta no [Clerk](https://clerk.com/) para preencher as variáveis de ambiente

- Executar dentro do diretório web 
  ```bash
  	npm i 
  ``` 
  
  ```bash
    npm run dev 
  ```

- Executar dentro do diretório serve
  ```bash
  	npm i 
  ``` 
  
  ```bash
    npm run dev 
  ```