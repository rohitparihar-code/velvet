import React from "react";

import { Card } from "react-bootstrap";

export default class ViewAllBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.idkwhat = "";
  }

  render() {
    return (
      <div className="my-body">
        <div className="container-fluid view-blogs-landing-div row">
          <div className="col-5 justify-content-center my-box">
            <h3 className="align-self-center" Style="padding-top: 14vh">
              <a className="my-link" href="#blogs">Read Stories From <br /> Inspiring People </a>
            </h3>
          </div>
          <div className="col-5 align-self-center my-box">
            <h3 className="align-self-center" Style="padding-top: 14vh"> Write Your Own Story </h3>
            <button
              className="btn btn-outline-warning"
              data-bs-toggle="modal"
              data-bs-target="#writeArticleModal">
              Start
            </button>
          </div>
        </div>
        <div className="container-fluid" Style="height: 5vh; background-color: rgb(32, 0, 69)"></div>
        <div className="d-flex justify-content-center" Style="margin-top: 5vh; color: white">
          <h2>Read Stories from Peoples who have overcome fear of hiding</h2>
        </div>
        <div id="blogs" className="blog-content m-5">
          <Card style={{ width: "60vw", height: "37vh", margin: "50px" }}>
            <Card.Body>
              <div className="row justify-content-between">
                <div className="col-9">
                  <Card.Text>Author</Card.Text>
                  <Card.Title style={{ height: "4vh", overflow: "hidden" }}>
                    Some very large Blog title
                  </Card.Title>
                  <Card.Text style={{ height: "10vh", overflow: "hidden" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                  </Card.Text>
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#readArticleModal"
                  >
                    Read Full Story
                  </button>
                </div>
                <div className="col-3">
                  <Card.Img
                    style={{ height: "30vh", width: "13vw", objectFit: "fill" }}
                    variant="top"
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  />
                  <hr />
                </div>
              </div>
            </Card.Body>
            <hr />
          </Card>
          <Card style={{ width: "60vw", height: "37vh", margin: "50px" }}>
            <Card.Body>
              <div className="row justify-content-between">
                <div className="col-9">
                  <Card.Text>Author</Card.Text>
                  <Card.Title style={{ height: "4vh", overflow: "hidden" }}>
                    Some very large Blog title
                  </Card.Title>
                  <Card.Text style={{ height: "10vh", overflow: "hidden" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                  </Card.Text>
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#readArticleModal"
                  >
                    Read Full Story
                  </button>
                </div>
                <div className="col-3">
                  <Card.Img
                    style={{ height: "30vh", width: "13vw", objectFit: "fill" }}
                    variant="top"
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  />
                  <hr />
                </div>
              </div>
            </Card.Body>
            <hr />
          </Card>
          <Card style={{ width: "60vw", height: "37vh", margin: "50px" }}>
            <Card.Body>
              <div className="row justify-content-between">
                <div className="col-9">
                  <Card.Text>Author</Card.Text>
                  <Card.Title style={{ height: "4vh", overflow: "hidden" }}>
                    Some very large Blog title
                  </Card.Title>
                  <Card.Text style={{ height: "10vh", overflow: "hidden" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has
                  </Card.Text>
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#readArticleModal"
                  >
                    Read Full Story
                  </button>
                </div>
                <div className="col-3">
                  <Card.Img
                    style={{ height: "30vh", width: "13vw", objectFit: "fill" }}
                    variant="top"
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  />
                  <hr />
                </div>
              </div>
            </Card.Body>
            <hr />
          </Card>
        </div>

        {/* Read Articel Modal */}

        <div
          className="modal fade"
          id="readArticleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          Style="color: black;"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Blog Title
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
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
                    {" "}
                    Title
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input Style="width: 77%" type="text" id="title" />
                  <hr />
                  <label htmlFor="img-url"> Image Url &nbsp;&nbsp;</label>
                  <input Style="width: 77%" type="url" id="img-url" />
                  <hr />
                  <textarea
                    name="blog-content"
                    id="blog-content"
                    cols="61"
                    rows="10"
                  ></textarea>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Write Article Modal */}
      </div>
    );
  }
}
