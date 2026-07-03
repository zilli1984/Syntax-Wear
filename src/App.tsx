// Importações do TanStack Router para gerenciamento de rotas
import { createRouter, RouterProvider } from "@tanstack/react-router"

// Árvore de rotas gerada automaticamente com base na estrutura de arquivos em src/pages/
import { routeTree } from "./router-tree-gen"
import { CartProvider } from "./contexts/CartProvider"

// Cria a instância do roteador com todas as rotas definidas em routeTree
const router = createRouter({ routeTree })

// Registro do tipo do router no módulo do TanStack Router.
// Isso habilita autocomplete e verificação de tipos nos links e hooks de rota (ex: useNavigate, Link)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App