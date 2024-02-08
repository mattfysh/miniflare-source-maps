import { Miniflare, Log } from 'miniflare'

const mf = new Miniflare({
  log: new Log(),
  verbose: true,
  name: 'test',
  scriptPath: 'dist/index.js',
  modules: true,
  compatibilityDate: '2023-05-18',
  compatibilityFlags: ['nodejs_compat'],
})

const res = await mf.dispatchFetch('http://localhost:8787')
console.log(await res.text())

await mf.dispose()
