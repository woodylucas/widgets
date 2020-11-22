import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          className="input"
          value={term}
          onChange={(evt) => setTerm(evt.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
