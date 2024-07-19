import { useContext } from "react";
import { Link } from "react-router-dom";
import { isToday } from "../../../utils/isToday";

import { BlogContext } from "../../../context/Blog.context";

import FoodLoader from "../../Loaders/FoodLoader/FoodLoader";

import "./BlogCards.styles.css";

const BlogCards = () => {
  const { blog } = useContext(BlogContext);

  return (
    <div className="blog-articles-container">
      {blog[0].id === "" ? (
        <FoodLoader />
      ) : (
        blog.map((article) => {
          const { id, imgUrl, title, text, date, authorImg, author } = article;
          return (
            <Link key={id} className="blog-article" to={"/article/" + id}>
              {isToday(date) && (
                <div className="article-new">
                  <p>NEW</p>
                </div>
              )}
              <div
                className="article-mini-img"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              ></div>
              <div className="article-mini-info">
                <div className="article-mini-title">{title}</div>
                <p className="article-mini-text">{text}</p>
              </div>
              <div className="article-mini-footer">
                <div className="article-mini-date">{date}</div>
                <div className="article-mini-author">
                  <div
                    className="article-mini-author-img"
                    style={{
                      backgroundImage: `url(${authorImg})`,
                    }}
                  ></div>
                  <span>{author}</span>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default BlogCards;
