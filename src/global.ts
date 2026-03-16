import styled, { createGlobalStyle } from 'styled-components'

// 1. Definição do Estilo Global
const EstiloGLobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    /* Removemos o 'as any' porque a interface abaixo já explica o que é o theme */
    background-color: ${(props) => props.theme.corSecundaria};
  }
`

// 2. Componente de Container
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

// 3. Tipagem (Isso é o que permite remover o 'any' lá em cima)
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
  }
}


// 4. Cores
export const Cores= {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export default EstiloGLobal

/* ANOTAÇÕES PARA O PROJETO:
- corPrincipal: Agora está com um tom de azul escuro. Use para Botões e Títulos.
- corSecundaria: Deixei um cinza claro/gelo, que combina muito bem com azul escuro.
- declare module: Importante para o VS Code não dar erro de "propriedade não encontrada" no TS.
*/
