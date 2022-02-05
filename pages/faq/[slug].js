import Head from "next/head"
import fetcher from "../../lib/fetcher"
import { getSlugs, getFaqSlug } from "../../lib/api"
import faqStyles from "../../styles/Faq.module.scss"

export default function Faq({ singlePage }) {
    return (
        <>
            <Head>
                <title>{singlePage.title}</title>
            </Head>

            <div className={faqStyles.title}>
                <h2>{singlePage.title}</h2>
            </div>

            <div className={faqStyles.pageWrapper}>
                <div dangerouslySetInnerHTML={{ __html: singlePage.content }}></div>
            </div>
        </>
    )
}


export async function getStaticPaths() {

    const response = await fetcher(getSlugs)

    const titleSlugs = response.data.faqs.nodes

    return {
        paths: titleSlugs.map((faq) => `/faq/${faq.slug}`),
        fallback: false
    }

}

export const getStaticProps = async ({ params }) => {

    const variables = {
        id: params.slug
    }

    const response = await fetcher(getFaqSlug, { variables })

    return {
        props: {
            singlePage: response.data.faq
        }
    }

}
