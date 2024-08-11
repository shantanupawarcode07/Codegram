import PostForm from "@/components/forms/PostForm"


const CreatePost = () => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="comman-container w-[60%] overflow-scroll custom-scrollbar">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/add-post.svg" alt="add"
          width={16}
          height={36}
          
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>
        <PostForm action={"Create"}/>

      </div>

    </div>
  )
}

export default CreatePost