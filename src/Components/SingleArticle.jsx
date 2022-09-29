import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const { article_id } = useParams();
  const [notFound, setNotFound] = useState (false)
  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        setSingleArticle(data.article);
      })
      .catch((err) => {
        setNotFound(true)
      })
  }, [article_id]);
  if (notFound) {
    return <p>404 not found</p>
  }



  return (
    <main>
      <h1>{singleArticle.title}</h1>
      <p>{singleArticle.body}</p>
    </main>
  );
};

export default SingleArticle;
