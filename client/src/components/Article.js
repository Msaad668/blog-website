import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");

  const { match } = props;
  useEffect(() => {
    Axios.get(
      `https://tech-blog1.herokuapp.com/articles/${props.match.params.id}`
    )
      .then((res) => {
        setTitle(res.data.title);
        setArticle(res.data.article);
        setAuthorname(res.data.authorname);
      })
      .catch((err) => console.log(err));
  }, [match]);

  return (
    <MainContainer>
      {!title || !article || !authorname ? (
        <Spinner
          style={{
            width: "2rem",
            display: "block",
            margin: "auto",
            marginBottom: "15rem",
          }}
          animation='border'
          role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{article}</p>
          <p className='badge badge-secondary p-2'>{authorname}</p>
          <br />
          <Link to='/' className='btn btn-primary'>
            back to home
          </Link>
        </>
      )}
    </MainContainer>
  );
};

export default Article;

const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: #299;
  }

  .btn-primary {
    background: #297;
    border: none;
    &:hover {
      background: #299;
    }
  }
`;
