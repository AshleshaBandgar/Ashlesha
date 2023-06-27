import React, { useState,useEffect } from "react";
import { Card } from "semantic-ui-react";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiGit
} from "react-icons/di";
import {FaCss3Alt} from "react-icons/Fa"

const TechStack = () => {
  const [width,setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  },[]);

  return (
    <div className="techstack">
      <h1>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 768 ? 5 : 2}>
          <Card raised className="item">
            {" "}
            <DiJavascript1
              style={{ width: "100%", height: "auto", color: "#FFC300" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiReact
              style={{ width: "100%", height: "auto", color: "#61DBFB" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiHtml5
              style={{ width: "100%", height: "auto", color: "#61DBFB" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <FaCss3Alt
              style={{ width: "100%", height: "auto", color: "#000000" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiGit
              style={{ width: "100%", height: "auto", color: "#000000" }}
            />{" "}
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
