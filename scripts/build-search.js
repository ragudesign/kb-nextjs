const fetch = require('node-fetch')
const fs = require('fs')
require('dotenv').config()

const WP_API = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL

async function fetcher(query) {

  const res = await fetch(WP_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  })

  const json = await res.json()
  return json

}

const query = `query getTitleSlugs {
    kbs {
      nodes {
        title
        slug
      }
    }
  }`

async function buildJSON() {

  const response = await fetcher(query);

  const titleSlugs = response.data.kbs.nodes

  const fullParams = `${JSON.stringify(titleSlugs)}`

  fs.writeFile(process.cwd() + '/public/search.json', fullParams, function (err) {
    if (err) return console.log(err);
  })
}

buildJSON()