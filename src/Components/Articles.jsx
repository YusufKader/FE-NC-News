import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const {topic} = useParams()
  useEffect(() => {
    axios
      .get("https://ncnewsyk.herokuapp.com/api/articles", {
        params: { topic:topic}
      })
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, [topic]);

  return (
    <main>
      <h1>Articles</h1>
      <ol>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <p> Date published: {article.created_at}</p>
              <p>By {article.author}</p>
            </li>
          );
        })}
      </ol>
    </main>
  );
};

export default Articles;
