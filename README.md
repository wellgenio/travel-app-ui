# Travel App UI
---

<p align="center"><img src="https://img.shields.io/badge/React-18.2.0-00ADD8?style=for-the-badge&logo=React" alt="go version" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/react_native-0.73.2-00ADD8?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="go version" />&nbsp;&nbsp;<img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="license" />&nbsp;&nbsp;</p>


> Motivação: Projeto pessoal para aprender mais sobre desenvolvimendo de UIs modernas e intuitivas em [React Native](https://reactnative.dev/) de fornecendo uma experiência simples, intensa e relevante.

---

[Design: Travel App UI Exploration](https://dribbble.com/shots/15234492-Travel-App-UI-Exploration) por <b>Md Shahed Hossain</b>

---

## Imagens do aplicativo

<table cellspacing="0" cellpadding="0">
        <tr>
    <td class="first">
            <img src="https://github.com/wellgenio/travel-app-ui/blob/src/assets/screenshot/01.png" height= "400px">
    </td>
    <td class="second">
            </br>
            <img src="https://github.com/wellgenio/travel-app-ui/blob/src/assets/screenshot/02.png" height= "400px">
    </td>
    <td class="third">
            </br>
            <img src="https://github.com/wellgenio/travel-app-ui/blob/src/assets/screenshot/03.png" height= "400px">
    </td>
  </tr>
</table>

## Base da Aplicação

Vamos usar algumas dependência para agilizar as coisas:

- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (v14.0.0)
- [@react-navigation/native](https://reactnavigation.org/docs/getting-started/)  (v6.1.9)
- [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/) (v6.3.20)
- [@tanstack/react-query](https://tanstack.com/query/latest) (v5.18.1)
- [axios](https://axios-http.com/ptbr/docs/intro) (v1.6.7)
- [styled-components](https://styled-components.com/) (v6.1.8)

Para saber mais acesse a documentação.


## Rodar aplicação

Instale globalmente o ``json-server`` e execute:

```sh
npx json-server db.json
```

e em seguida, em outro terminal, rode:

```sh
npx expo start
```

## Estrutura do projeto

```sh
/src
│   
├───/assets
|   |
|   ├─/images
|   └─/screenshot
|
├───/components
│       index.tsx
├───/hooks
│       usePlaces.tx
├───/screens
|   |
|   ├─/Details
|   ├─/Home
|   └─/Splash
|
├───/theme
│       index.ts
|
└───/types
        place.ts
App.tsx
```

## License

Copyright 2023 Wellington Dos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
