import { api } from "../../services/api";
import { Container } from "./styles";

export function SalesReport() {
  useEffect(() => {
    api.get('/sales', { withCredentials: true })
  }, [])
  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}