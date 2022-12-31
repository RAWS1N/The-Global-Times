import React, { useEffect } from "react";
import axios from "../lib/axios";
import { filterData } from "../lib/utils";
import Categories from "../lib/Categories";
import { NewsList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { AllArticleActions } from "../store/allArticleSlice";

function Homepage() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.searchQuery);
  const { category } = useSelector((state) => state.category);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("/news", {
          params: {
            categories: `${
              category === "all" ? Categories.join(",") : category
            }`,
            languages: "en",
            keywords: query,
          },
        });
        const sortedArticles = filterData(data);
        dispatch(AllArticleActions.setArticles(sortedArticles));
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, [query,category]);
  return (
    <div>
      <NewsList />
    </div>
  );
}

export default Homepage;
