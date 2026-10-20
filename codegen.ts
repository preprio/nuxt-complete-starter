import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NUXT_PREPR_GRAPHQL_URL,
  documents: ['app/queries/**/*.graphql'],
  generates: {
    'app/gql/': {
      preset: 'client',
      presetConfig: { fragmentMasking: false },
      // Nuxt's tsconfig enables verbatimModuleSyntax.
      config: { useTypeImports: true },
    },
    './graphql.schema.json': { plugins: ['introspection'] },
  },
}

export default config
