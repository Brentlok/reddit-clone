const fetchData = async () => {
  try {
    const response = await fetch('https://www.reddit.com/top.json');
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
    return fetchedPosts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchData;
