import React from "react";
import { Link } from "react-router-dom";
import ReadMoreButton from "./ReadMoreButton";
import LiveTimeStamp from "./LiveTimeStamp";

function Articles({ article, id }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 dark:text-white flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full bg-gray-300 object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-1 p-4">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="flex-1 mt-2">
            <p className=" line-clamp-6">{article.description}</p>
          </section>
          <footer className="mt-4 ">
            <p className="italic my-2">Source: {article.source}</p>
            <LiveTimeStamp time={article.published_at} />
          </footer>
        </div>
        <Link to={`article/${id}`}>
          <ReadMoreButton />
        </Link>
      </div>
    </div>
  );
}

export default Articles;
