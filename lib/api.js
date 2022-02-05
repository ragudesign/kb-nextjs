// latest faqs
export const getLatestFaqs = `query GetLatestFaqs {
  faqs(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
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
  faqs {
    nodes {
      slug
    }
  }
}`

// faq by slug
export const getFaqSlug = `query getFaqSlug($id: ID!) {
  faq(id: $id, idType: SLUG) {
      id
      modified
      title
      content(format: RENDERED)
  }
}`