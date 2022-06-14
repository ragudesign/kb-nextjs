// latest knowledge bases
export const getLatestKbs = `query getLatestKbs {
  kbs(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      modified
      title
      slug
      excerpt(format: RENDERED)
    }
  }
}`

// get slugs
export const getSlugs = `query getSlugs {
  kbs {
    nodes {
      slug
    }
  }
}`

// knowledge base by slug
export const getKbSlug = `query getKbSlug($id: ID!) {
  kb(id: $id, idType: SLUG) {
      id
      modified
      title
      content(format: RENDERED)
  }
}`