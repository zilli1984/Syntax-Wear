import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// Configuração principal do Vite para rodar o projeto React com roteamento e Tailwind.
// Documentação oficial: https://vite.dev/config/
export default defineConfig({
  // Plugins usados para dar suporte ao React, ao Tailwind e ao roteamento gerado automaticamente.
  plugins: [
    // Gera a árvore de rotas com base nas páginas da pasta src/pages.
    tanstackRouter({
      target: 'react',
      // Divide o código em partes menores para carregamento mais eficiente.
      autoCodeSplitting: true,
      // Arquivo onde o sistema salva a árvore das rotas.
      generatedRouteTree: "./src/router-tree-gen.ts",
      // Pasta que contém as páginas/rotas do projeto.
      routesDirectory: "./src/pages",
      // Token usado para identificar layouts nas rotas.
      routeToken: "layout"
    }),
    // Habilita suporte ao React no Vite.
    react(),
    // Habilita o Tailwind no processo de build e desenvolvimento.
    tailwindcss()
  ],
  // Resolução de caminhos para importar arquivos com alias.
  resolve: {
    alias: {
      // Alias @ para apontar sempre para a pasta src.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
