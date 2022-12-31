import React from "react";
import { useSelector } from "react-redux";
import Articles from "./Articles";
import LabelString from "./LabelString";

function NewsList() {
  const { allArticles } = useSelector((state) => state.allArticle);
  const {query} = useSelector(state => state.searchQuery)
  const {category} = useSelector(state => state.category)
  return (
    <main>
      <LabelString label={query}/>
      {category !== "all" && <h3 className="capitalize mx-10 mt-2 text-2xl underline decoration-2 decoration-blue-400 underline-offset-4 font-medium dark:text-white">{category}</h3>}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {allArticles?.data?.map((article, idx) => (
          <Articles key={idx} article={article} id={idx} />
        ))}
      </section>
    </main>
  );
}

export default NewsList;
