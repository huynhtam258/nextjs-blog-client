import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
// import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
// import { convertSlugUrl, sendRequest } from "@/utils/api";
import { postConverter } from "@/converters/post.converter";
import { getPosts } from "@/services/post.service";
import { getCategories } from "@/services/category.service";
const { blog_folder } = config.settings;

// for all regular pages
const Posts = async () => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;

  const postsResponse = await getPosts() 
  const postList = postsResponse.data.map((post: any): Post => {
    return postConverter(post)
  })

  const categoriesResponse = await getCategories()
  const categoryList = categoriesResponse.map((category: any) => category.name)
  
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="lg:col-8">
              <div className="row">
                {postList.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}
              </div>
              <Pagination
                section={blog_folder}
                currentPage={1}
                totalPages={2}
              />
            </div>

            <PostSidebar
              categories={categoryList}
              tags={['1', '2', '3', '4', '5', '6']}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
