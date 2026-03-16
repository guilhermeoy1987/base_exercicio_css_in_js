import { Container } from '../../global'
import FormHero, { HeroTitle } from './styles'

const Hero = () => (
  <FormHero>
    <Container>
      {/* Remova as tags <h2> internas, deixe apenas o texto */}
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais
      </HeroTitle>
    </Container>
  </FormHero>
)

export default Hero
