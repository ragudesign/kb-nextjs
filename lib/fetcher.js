const WP_API = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL

async function fetcher(query, { variables } = {}) {

    const res = await fetch(WP_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables })
    })

    const json = await res.json()
    return json

}

export default fetcher