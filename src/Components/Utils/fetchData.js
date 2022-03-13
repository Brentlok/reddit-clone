const fetchData = async (after, sub = '') => {
  try {
    const URL = `https://www.reddit.com/${
      sub && `r/${sub}/`
    }new.json?after=${after}`;
    const response = await fetch(URL);
    const { data } = await response.json();
    const fetchedPosts = data.children.map(
      ({
        data: { id, author, url, subreddit_name_prefixed, title, permalink },
      }) => ({
        id,
        author,
        img: url,
        subreddit: subreddit_name_prefixed,
        title,
        link: permalink,
      })
    );
    return { posts: fetchedPosts, next: data.after };
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchData;
