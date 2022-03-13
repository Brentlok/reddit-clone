import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import fetchData from '../Utils/fetchData';

const Posts = () => {
  const [postsList, setPostsList] = useState([]);
  const nextPage = useRef('');
  const loading = useRef(false);
  const sub = useRef('');

  const params = useParams();

  const getFetchedPosts = async () => {
    const { posts, next } = await fetchData(nextPage.current, sub.current);
    nextPage.current = next;
    loading.current = false;
    setPostsList((state) => [...state, ...posts]);
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
  }, []);

  //when path changes fetch new posts
  useEffect(() => {
    loading.current = true;
    nextPage.current = '';
    sub.current = params['*'];
    setPostsList([]);
    getFetchedPosts();
  }, [params]);

  return (
    <main className="px-52 py-14 m-auto grid grid-cols-3 gap-5">
      {postsList.map(({ id, ...props }) =>
        /\.(jpg|gif|png)$/.test(props.img) ? <Post key={id} {...props} /> : null
      )}
    </main>
  );
};

export default Posts;
