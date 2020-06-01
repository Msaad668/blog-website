import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditArticle = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    axios
      .get(`https://tech-blog1.herokuapp.com/articles/${props.match.params.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setArticle(res.data.article);
        setAuthorname(res.data.authorname);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const articles = {
      title,
      article,
      authorname,
    };

    setTitle("");
    setArticle("");
    setAuthorname("");

    axios
      .put(
        `http://localhost:5000/articles/update/${props.match.params.id}`,
        articles
      )
      .then(() => setDone(true))
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <div className='container'>
        <h1 style={{ color: "#299", fontWeight: "900" }}>Update Article</h1>
        {done && (
          <div class='alert alert-success' role='alert'>
            Article updated succesfully
          </div>
        )}
        <form encType='multipart/form-data' onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='authrname'>Author Name</label>
            <input
              type='text'
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
              className='form-control'
              placeholder='author name...'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control'
              placeholder='Title...'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='article'> article</label>
            <textarea
              className='form-control'
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              rows='3'></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Update Article
          </button>
        </form>
      </div>
    </MainContainer>
  );
};

export default EditArticle;

const MainContainer = styled.div`
  margin: 2rem auto;
  padding: 4rem;
  width: 50.5rem;

  .btn-primary {
    background: #297;
    border: none;
    &:hover {
      background: #299;
    }
  }
`;
