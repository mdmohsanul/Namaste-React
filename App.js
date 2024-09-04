const heading = React.createElement("h1", {}, "hello world from React!");
/* 
the three arguments are 
1 -- the html tag
2 -- we can set attributes (eg: id='heading' , class='header', xyz='abc')
3 -- children - the content inside that tag (for multiple children use an Array of list)
*/
console.log(heading); //object
// React element is an Js object
// heading returns a React Element and react element is an object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// the id root replaced the content with the react code (eg: if we have something written inside root id then it will be replaced)
// render method is used to put the React element or object into our page

/* 
  <div>
     <div>
        <h1></h1>
        <h2></h2>
     </div>
  </div>

  if we have to create siblings then we should wrap up into an array
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "React nested element"),
    React.createElement("h2", {}, "React nested element H2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
