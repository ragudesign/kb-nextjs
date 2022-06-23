// knowledge base categories
export const getCats = `query getCats {
  kbsTax {
    nodes {
      id
      name
      slug
    }
  }
}`;

// get categories by slug
export const getCatSlug = `query getCatSlug($slug: [String!]) {
  kbsTax(where: {slug: $slug}) {
    nodes {
      id
      name
      kbs(where: {orderby: {field: DATE, order: DESC}}, first:1000) {
        nodes {
          id
          modified
          title
          slug
          excerpt(format: RENDERED)
        }
      }
    }
  }
}`;

// latest knowledge bases
export const getLatestKbs = `query getLatestKbs {
  kbsTax {
    nodes {
      id
      name
      kbs(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          id
          modified
          title
          slug
          excerpt(format: RENDERED)
        }
      }
    }
  }
}`;

// get slugs
export const getKbSlugs = `query getKbSlugs {
  kbs(first:1000) {
    nodes {
      slug
    }
  }
}`;

// knowledge base by slug
export const getKbSlug = `query getKbSlug($id: ID!) {
  kb(id: $id, idType: SLUG) {
      id
      modified
      title
      content(format: RENDERED)
      kbsTax {
        nodes {
          name
        }
      }
  }
}`;
