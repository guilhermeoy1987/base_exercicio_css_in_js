import { ThemeProvider } from 'styled-components' // 1. Importe o Provider
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Cores, Container } from './styles'


function App() {
  return (
    // 3. Envolva tudo com o ThemeProvider passando o tema de Cores
    <ThemeProvider theme={Cores}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App

