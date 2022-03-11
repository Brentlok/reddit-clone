import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import fetchData from '../Utils/fetchData';

const Posts = () => {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    const setFetchedPosts = async () => {
      setPostsList(await fetchData());
    };
    setFetchedPosts();
  }, []);

  return (
    <main className="p-5">
      {postsList.map(({ id, ...props }) =>
        /\.(jpg|gif|png)$/.test(props.url) ? <Post key={id} {...props} /> : null
      )}
    </main>
  );
};

export default Posts;
