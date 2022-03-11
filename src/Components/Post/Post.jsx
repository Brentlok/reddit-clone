const Post = ({ author, url, subreddit, title }) => {
  return (
    <div className="bg-stone-800 border-2 border-stone-700 my-2 rounded-lg p-5 inline-block w-full">
      <h2 className="mb-2 text-xs text-stone-500">
        Posted by u/{author} in {subreddit}
      </h2>
      <h1 className="mb-2 text-2xl">{title}</h1>
      <img src={url} alt="reddit_post" className="w-full h-auto" />
    </div>
  );
};

export default Post;
