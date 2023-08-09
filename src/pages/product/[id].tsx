import type { GetStaticPaths } from 'next'
import Head from 'next/head'

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
  const res = await fetch(
    `https://server-oasis-perfume.onrender.com/api/v1/product/`
  )

  const posts = await res.json()

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { id } = params
  const res = await fetch(
    `https://server-oasis-perfume.onrender.com/api/v1/product/${id}`
  )
  const posts = await res.json()

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}
