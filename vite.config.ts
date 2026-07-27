import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Configuração principal do Vite para rodar o projeto React com roteamento e Tailwind.
// Documentação oficial: https://vite.dev/config/
export default defineConfig({
  // Plugins usados para dar suporte ao React.
  plugins: [
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
