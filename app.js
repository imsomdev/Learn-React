const heading = React.createElement(
    "h1", 
    {
        id: "title"
    }, 
    "Hello World");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);