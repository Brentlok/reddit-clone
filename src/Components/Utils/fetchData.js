const fetchData = async (after) => {
  try {
    const response = await fetch(
      `https://www.reddit.com/new.json?after=${after}`
    );
    const { data } = await response.json();
    const fetchedPosts = data.children.map(
      ({ data: { id, author, url, subreddit_name_prefixed, title } }) => ({
        id,
        author,
        url,
        subreddit: subreddit_name_prefixed,
        title,
      })
    );
    return { posts: fetchedPosts, next: data.after };
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchData;
