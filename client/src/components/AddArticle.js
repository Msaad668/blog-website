import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [done, setDone] = useState(false);

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
      .post("http://localhost:5000/articles/add", articles)
      .then(() => setDone(true))
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <div className='container'>
        <h1 style={{ color: "#299", fontWeight: "900" }}>Add New Article</h1>
        {done && (
          <div class='alert alert-success' role='alert'>
            Article Added succesfully
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
            Post article
          </button>
        </form>
      </div>
    </MainContainer>
  );
};

export default AddArticle;

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
