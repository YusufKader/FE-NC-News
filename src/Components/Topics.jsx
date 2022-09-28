import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get("https://ncnewsyk.herokuapp.com/api/topics").then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);

  return(
    <main>
        <h1>Topics</h1>
        <ol>
            {topics.map((topic) => {
                return(
                    <li>
                        <div key={topic.slug}>

                        <Link to={`/topics/${topic.slug}`}>
                        <h3>{topic.slug}</h3>
                        </Link>
                        <p>{topic.description}</p>
                        </div>
                    </li> 

                )
            })}
        </ol>
    </main>
  )
};

export default Topics;