import React from "react";
import YoutubeEmbed from "../hooks/YoutubeEmbeded";

const Courses = () => {
  return (
    <div className="ui container">
      <h2>NodeJS: </h2>
      <div className="ui two column grid">
        <div className="column">
          <YoutubeEmbed embedId="zaLfOjNEOaQ" />
        </div>
        <div className="column">
          <div className="one column row">
            <YoutubeEmbed embedId="2UUYNJRhy-8" />
          </div>
        </div>
        <div className="column">
          <div className="one column row">
            <YoutubeEmbed embedId="PToSHV6fSNU" />
          </div>
        </div>
        <div className="column">
          <div className="one column row">
            <YoutubeEmbed embedId="ZX6XEAdChe4" />
          </div>
        </div>
        <div className="column">
          <div className="one column row">
            <YoutubeEmbed embedId="UE2tYTsJ-Zc" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;