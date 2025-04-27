import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {name:"Dream Portfolio", description: "A website to showcase all my work."},
    {name:"AI Chatbot", description: "An intelligent chatbot for customer support."},
  ];
  return (
    <div id="main" className="ns-wrapper">
    {projects.map((project, index)=>(
      <div key={index}>
        <h1 data-ns-test="project-name">{project.name}</h1>
        <h6 data-ns-test="project-description">{project.description}</h6>
      </div>
    ))}
    </div>
  )
}


export default App;
