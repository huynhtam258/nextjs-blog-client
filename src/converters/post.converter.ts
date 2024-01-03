import { convertSlugUrl } from "@/utils/api"

export const postConverter = (post: any) => {
  return {
    frontmatter: {
      title: post.title,
      meta_title: post.title,
      description: post.description,
      image: '/images/image-placeholder.png',
      categories: [],
      author: `${post.user.first_name} ${post.user.last_name}`,
      tags: [],
      date: post.publish_date,
      draft: false,
    },
    slug: convertSlugUrl(post.title) + `-${+ post.id}.html`,
    content: post.content
  }
}