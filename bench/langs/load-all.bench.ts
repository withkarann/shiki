import { bundledLanguages, createHighlighter } from 'shiki'
import { it } from 'vitest'

const langs = Object.keys(bundledLanguages)

it(`createHighlighter with all ${langs.length} bundled languages`, async ({ bench }) => {
  await bench('load all languages', async () => {
    const highlighter = await createHighlighter({ langs, themes: [] })
    highlighter.dispose()
  }).run({ iterations: 10, time: 0, warmupIterations: 2, warmupTime: 0 })
})
