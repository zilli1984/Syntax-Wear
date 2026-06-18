import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// Configuração principal do ESLint para manter o código consistente e evitar erros comuns.
export default defineConfig([
  // Evita verificar a pasta de build, já que ela é gerada automaticamente.
  globalIgnores(['dist']),
  {
    // Aplica as regras a arquivos TypeScript e TSX.
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Regras básicas recomendadas pelo ESLint.
      js.configs.recommended,
      // Regras recomendadas para TypeScript.
      tseslint.configs.recommended,
      // Regras para React Hooks.
      reactHooks.configs['recommended-latest'],
      // Regras específicas para projetos Vite com React Fast Refresh.
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Define o padrão ECMAScript usado na análise.
      ecmaVersion: 2020,
      // Marca variáveis globais do ambiente browser, como window e document.
      globals: globals.browser,
    },
  },
])
