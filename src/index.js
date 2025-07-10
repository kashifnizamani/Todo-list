import "./style.css";
import Project from "./projects";
import "./eventHandler"
import { displayProjects } from "./DOM";

const first = new Project("Default");

displayProjects(first);