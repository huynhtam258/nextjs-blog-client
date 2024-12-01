import config from "@/config/config.json";
// import { getListPage } from "@/lib/contentParser";
// import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
// import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { postConverter } from "@/converters/post.converter";
import { getPosts } from "@/services/post.service";
// import { getCategories } from "@/services/category.service";
import PostList from "@/components/PostList";
// const { blog_folder } = config.settings;

interface IProps {
  searchParams: {
    page?: number
  }
}
const Posts = async (props: IProps) => {
  const { searchParams } = props
  
  let totalPages = 0
  let currentPage = searchParams.page || 1
  let postList = [] as Post[]

  const getPostList = async () => {
    const postsResponse = await getPosts({ page: currentPage })
    postList = postsResponse.data.map((post: any): Post => {
      return postConverter(post)
    })
    totalPages = postsResponse.lastPage
    currentPage = postsResponse.currentPage
  }
  await getPostList()
  // const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  // const { title, meta_title, description, image } = postIndex.frontmatter;
  
  // const categoriesResponse = await getCategories()
  // const categoryList = categoriesResponse.map((category: any) => category.name)
  
  return (
    <>
      {/* <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} /> */}
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="lg:col-8">
              <PostList
                postList={postList}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>

            {/* <PostSidebar
              categories={categoryList}
              tags={['1', '2', '3', '4', '5', '6']}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
