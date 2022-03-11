import { useEffect, useRef, useState } from 'react';
import Post from '../Post/Post';
import fetchData from '../Utils/fetchData';

const Posts = () => {
  const [postsList, setPostsList] = useState([]);
  const nextPage = useRef('');
  const loading = useRef(false);

  const getFetchedPosts = async () => {
    const { posts, next } = await fetchData(nextPage.current);
    nextPage.current = next;
    loading.current = false;
    setPostsList((oldPosts) => [...oldPosts, ...posts]);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const fetchWhen =
        document.querySelector('body').offsetHeight - window.innerHeight - 500;
      if (fetchWhen < window.scrollY && !loading.current) {
        loading.current = true;
        getFetchedPosts();
      }
    });
    getFetchedPosts();
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
