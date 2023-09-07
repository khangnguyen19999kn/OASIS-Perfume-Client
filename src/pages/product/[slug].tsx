import type { GetStaticPaths } from 'next'
import Head from 'next/head'

import { API_PRODUCT } from '@/constant/API/API'
import type { DetailPro } from '@/constant/types/typeProduct'
import DetailPage from '@/templates/DetailPage/DetailPage'

export default function App({ posts }: DetailPro) {
  return (
    <>
      <Head>
        <title>{posts.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`This is detail ${posts.name}`} />\
      </Head>
      <div>
        <DetailPage posts={posts} />
      </div>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(API_PRODUCT)

  const posts = await res.json()

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const res = await fetch(`${API_PRODUCT}${slug}`)
  const posts = await res.json()

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}
