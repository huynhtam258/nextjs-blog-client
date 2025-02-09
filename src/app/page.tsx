import PostList from '@/components/PostList';
import { postConverter } from '@/converters/post.converter';
import PageHeader from '@/partials/PageHeader';
import { getPosts } from '@/services/post.service';
import { Post } from '@/types';
import React from 'react'

const Home = async () => {
  let totalPages = 0
  let currentPage = 1
  let postList = [] as Post[]

  const getPostList = async () => {
    const postsResponse = await getPosts({ page: currentPage })
    postList = (postsResponse.data || []).map((post: any): Post => {
      return postConverter(post)
    })
    totalPages = postsResponse.lastPage
    currentPage = postsResponse.currentPage
  }
  await getPostList()
  return (
    <>
    <section className='section pt-14'>
      <div className='container'>
        <div className='row justify-content'>
          {/* <h1>Trang chủ</h1> */}
          <PageHeader title="Trang chủ" />
        </div>
        <div className='row mt-6'>
          <div className="lg:col-12">
            <PostList
              postList={postList}
              totalPages={totalPages}
              currentPage={currentPage}
              classColumn={'md:col-4'}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;