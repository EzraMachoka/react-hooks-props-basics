import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// function BlogContent(props) {
//   return <div>{props.articleText}</div>;
// }

// function BlogPost() {
//   return (
//     <div>
//       <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
//     </div>
//   );
// }


function BlogPost() {
    return (
      <div>
        <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
        <Comment commentText="I agree with this statement. - Angela Merkel" />
        <Comment commentText="A universal truth. - Noam Chomsky" />
        <Comment commentText="Truth is singular. Its versions are mistruths. - Sonmi-451" />
      </div>
    );
  }