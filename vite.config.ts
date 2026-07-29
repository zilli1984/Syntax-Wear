import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";

// Configuração principal do Vite para rodar o projeto React com roteamento e Tailwind.
// Documentação oficial: https://vite.dev/config/
export default defineConfig({
  // Plugins usados para dar suporte ao React.
  plugins: [
    // Gera/atualiza router-tree-gen.ts automaticamente a partir de src/pages.
    // Precisa vir antes do react() para processar as rotas primeiro.
    tanstackRouter({
      routesDirectory: "./src/pages",
      generatedRouteTree: "./src/router-tree-gen.ts",
      target: "react",
      routeToken: "layout",
    }),
    // Habilita suporte ao React no Vite.
    react(),
  ],
  // Resolução de caminhos para importar arquivos com alias.
  resolve: {
    alias: {
      // Alias @ para apontar sempre para a pasta src.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
