import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import UserService from "../services/UserService";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {parse(content)}
      </header>
    </div>
  );
};

export default Home;
