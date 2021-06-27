import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
import BASE_URL from "../config/constants";
import { useHistory } from 'react-router-dom';
||||||| 1bc4a35
import { useHistory } from 'react-router-dom';
=======
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
>>>>>>> faf96f804b24d5fde0f42a600414fbe93315e772
import { Card } from "react-bootstrap";
import { getDefaultValues } from "@apollo/client/utilities";

export default function ViewAllBlogs() {
  const MUTATION = gql`
    mutation Logout {
      logout
    }
  `;
  const [logout, { data1, error1 }] = useMutation(MUTATION);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [blogs, setBlogs] = useState([]);

  let history = useHistory();

  useEffect(() => {
<<<<<<< HEAD
    axios.get(BASE_URL +  'getAllBlogs').then((res)=>{
||||||| 1bc4a35
    axios.get('http://localhost:8080/getAllBlogs').then((res)=>{
=======
    axios.get("http://localhost:8080/getAllBlogs").then((res) => {
>>>>>>> faf96f804b24d5fde0f42a600414fbe93315e772
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  const [insert, { data, error }] = useMutation(gql`
    mutation Insert(
      $title: String
      $content: String
      $description: String
      $imageUrl: String
    ) {
      insertBlog(
        title: $title
        content: $content
        description: $description
        imageUrl: $imageUrl
      ) {
        blog_id
      }
    }
  `);

  return (
    <div>
      <div class="m-3 d-flex justify-content-end">
        <button
          className="btn custom-button"
          onClick={async (e) => {
            e.preventDefault();
            await logout();
          }}
        >
          <Link className="link-text" to="/">
            Logout
          </Link>
        </button>
      </div>
      <div className="my-body">
        <div className="container-fluid view-blogs-landing-div row">
          <div className="col-5 justify-content-center my-box">
            <h3 className="align-self-center" Style="padding-top: 14vh">
              <a className="my-link" href="#blogs">
                Read Stories From <br /> Inspiring People{" "}
              </a>
            </h3>
          </div>
          <div className="col-5 align-self-center my-box">
            <h3
              className="align-self-center"
              Style="padding-top: 14vh; color: #37d1d1"
            >
              {" "}
              Write Your Own Story{" "}
            </h3>
            <button
              className="btn custom-button"
              data-bs-toggle="modal"
              data-bs-target="#writeArticleModal"
            >
              Start Writing
            </button>
          </div>
        </div>
        <div
          className="container-fluid"
          Style="height: 5vh; background-color: rgb(32, 0, 69)"
        ></div>
        <div
          className="d-flex justify-content-center"
          Style="margin-top: 5vh; color: white"
        >
          <h2 className="rainbow-text">Read Stories from our Community</h2>
        </div>
        <div id="blogs" className="blog-content m-5">
          {Array.isArray(blogs) &&
            blogs.length &&
            blogs.map((blog, index) => {
              return (
                <>
                  <Card
                    className="my-card"
                    style={{ width: "60vw", height: "37vh", margin: "50px" }}
                  >
                    <Card.Body>
                      <div className="row justify-content-between">
                        <div className="col-9">
                          <Card.Text>{""}</Card.Text>
                          <Card.Title
                            style={{ height: "4vh", overflow: "hidden" }}
                          >
                            {blog.title}
                          </Card.Title>
                          <Card.Text
                            style={{ height: "10vh", overflow: "hidden" }}
                          >
                            {blog.content}
                          </Card.Text>
                          <button
                            className="btn custom-button"
                            data-bs-toggle="modal"
                            data-bs-target={`#readArticleModal-${index}`}
                          >
                            Read Full Story
                          </button>
                        </div>
                        <div className="col-3">
                          <Card.Img
                            style={{
                              height: "30vh",
                              width: "13vw",
                              objectFit: "fill",
                            }}
                            variant="top"
                            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                          />
                          <hr />
                        </div>
                      </div>
                    </Card.Body>
                    <hr />
                  </Card>
                  <div
                    className="modal fade"
                    id={`readArticleModal-${index}`}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    Style="color: black;"
                  >
                    <div className="modal-dialog modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {blogs[index].title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img
                            Style="height: 30vh; width: 30vw; object-fit: fill"
                            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                            alt="..."
                          />
                          <hr />
                          {blogs[index].description}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        {/* Read Articel Modal */}

        {/* Read Article Modal End */}

        {/* Write Article Modal */}
        <div
          class="modal fade"
          id="writeArticleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          Style="color: black"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Write Your Own Story
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="post">
                  <label htmlFor="title">
                    Title
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    Style="width: 77%"
                    type="text"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <hr />
                  <label htmlFor="content">
                    Content &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    Style="width: 77%"
                    type="text"
                    id="content"
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <hr />
                  <label htmlFor="img-url"> Image Url &nbsp;&nbsp;</label>
                  <input
                    Style="width: 77%"
                    type="url"
                    id="img-url"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <hr />
                  <textarea
                    name="blog-content"
                    id="blog-content"
                    cols="61"
                    rows="10"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={(e) => {
                      insert({
                        variables: {
                          title: title,
                          content: content,
                          description: description,
                          imageUrl: imageUrl,
                        },
                      });
                      console.log(data);
                      if (data && data.insertBlog.blog_id)
                        history.push("/view-all-blogs");
                    }}
                  >
                    Understood
                  </button>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Write Article Modal */}
          </div>
        </div>
        {/* Write Article Modal */}
      </div>
    </div>
  );
}
