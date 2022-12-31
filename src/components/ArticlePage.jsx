import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LiveTimeStamp from "./LiveTimeStamp";
function ArticlePage() {
  const { allArticles } = useSelector((state) => state.allArticle);
  const Navigator = useNavigate();
  const { id } = useParams();
  const article = allArticles?.data[id];
  function handleClick() {
    Navigator("/");
  }

  return (
    <article>
      <button
        onClick={handleClick}
        className="bg-black dark:bg-blue-400 text-white px-4 mx-10 rounded-sm my-6 py-1"
      >
        Back To Home
      </button>
      <section className="flex dark:text-white justify-center items-center flex-col lg:flex-row pb-24 px-0 lg:px-10 gap-8">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-80   max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div>
          <h1 className=" headerTitle pb-2 px-0 no-underline">
            {article.title}
          </h1>
          <p>{article.description}</p>
          <div className="flex divide-x-2 font-medium tracking-wider  my-4 space-x-4">
            <h2>By: {article.author || "anonymous"}</h2>
            <h2 className="pl-4 ">Source : {article.source}</h2>
            <p className="px-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
