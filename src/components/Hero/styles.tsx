import styled from 'styled-components'

// 1. Estilização do Formulário/Banner (Fundo com imagem)
export const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;


@media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  // Overlay azul sobre a imagem
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }
`

// 2. Estilização do Título (Onde definimos a cor branca)
export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  position: relative; // Necessário para o texto aparecer acima do overlay (&::before)
  color: #fff;        // <--- A COR BRANCA QUE VOCÊ QUERIA

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

// Exportação padrão do componente principal deste arquivo
export default FormHero
