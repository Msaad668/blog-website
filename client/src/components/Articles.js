import React, { Fragment } from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Axios from "axios";

const Articles = ({ posts }) => {
  const deleteHandeler = (id) => {
    Axios.delete(`http://localhost:5000/articles/${id}`)
      .then(() => alert("article deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      {!posts.length ? (
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
        posts.map((article, key) => {
          return (
            <div key={key} className='container'>
              <Link
                to={{
                  pathname: `/articles/${article._id}`,
                }}>
                <h2>{article.title}</h2>
              </Link>
              <p>{article.article}</p>
              <span className='badge badge-secondary p-2'>
                {article.authorname}
              </span>
              <div className='row my-5'>
                <div className='col-sm-2'>
                  <Link
                    to={`/edit-article/${article._id}`}
                    className='btn btn-outline-success'>
                    Edit Article
                  </Link>
                </div>
                <div className='col-sm-2'>
                  <button
                    onClick={() => deleteHandeler(article._id)}
                    className='btn btn-outline-danger'>
                    Delete article
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })
      )}
    </MainContainer>
  );
};

export default Articles;

const MainContainer = styled.div`
  margin: 5rem 0;
`;
