import React from "react";

function News(promp) {
  return (
    <div className="component">
      <h1>{promp.value.title}</h1>
      <p className="author">{promp.value.author}</p>
      <img src={promp.value.urlToImage} />
      <p className="content">{promp.value.content}</p>
    </div>
  );
}

export default News;
