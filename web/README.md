
# Autenticação NextJS + Clerk Auth

### Configurações

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

