const heading = React.createElement("h1",{},"Topics covered");
const para1 = React.createElement("p",{},"The following is a list of all the topics we cover in the MDN learning area.");

const anchor1 = React.createElement("a",{href:"#" },"Getting started with the web");
const para2 = React.createElement("p",{class:"para"},"Provides a practical introduction to web development for complete beginners.");

const anchor2 = React.createElement("a",{href:"#" },"HTML — Structuring the web");
const para3 = React.createElement("p",{class:"para"},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

const anchor3 = React.createElement("a",{href:"#" },"CSS — Styling the web");
const para4 = React.createElement("p",{class:"para"},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");




const box = React.createElement("div",{style:{
    width:"530px",
    lineHeight: "20px",
    padding: "15px",
}},[heading,para1,anchor1,para2,anchor2,para3,anchor3,para4]);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(box);