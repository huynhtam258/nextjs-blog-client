import { useState } from "react"
import BlogCard from "./BlogCard"
import Pagination from "./Pagination"
import config from "@/config/config.json";
const { blog_folder } = config.settings;

interface IProps {
  postList: any[],
  totalPages: number,
  currentPage: number,
  classColumn?: string
}
const PostList = (props: IProps) => {
  const { postList, totalPages, currentPage, classColumn } = props
  return (
    <>
      <div className="row">
        {postList.map((post: any, index: number) => (
          <div key={`post-${index}`} className={`mb-14 ${classColumn || 'md:col-6'}`}>
            <BlogCard data={post} />
          </div>
        ))}
      </div>
      <Pagination
        section={blog_folder}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  )
}

export default PostList