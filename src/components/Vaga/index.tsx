import { VagaCard, VagaTitulo, VagaLink } from './style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaCard>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Nível: {props.nivel}</li>
      <li>Modalidade: {props.modalidade}</li>
      <li>Salário: {props.salarioMin} - {props.salarioMax}</li>
    </ul>
    <VagaLink href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaCard>
)

export default Vaga
