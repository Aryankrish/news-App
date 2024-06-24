import React, { useState, useEffect } from "react";
import News from "./News";
import "./newsapp.css";

function Newsapp(promp) {
  const apikey = "ef4280baad954336aceb61eeb75cd9fb";
  const apiurl = `https://newsapi.org/v2/everything?q=${promp.query}&from=2022-11-29&sortBy=publishedAt&apiKey=ef4280baad954336aceb61eeb75cd9fb`;

  const [res, setres] = useState([]);
  useEffect(() => {
    func();
  }, [promp.query]);

  async function func() {
    const api = await fetch(apiurl);

    const response = await api.json();
    setres(response.articles);
  }

  return (
    <div className="main">
      {res.map((value) => {
        return <News value={value} key={value.url} />;
      })}
    </div>
  );
}

export default Newsapp;
