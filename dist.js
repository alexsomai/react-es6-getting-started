'use strict';

var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "heading"
          ),
          React.createElement(
            "th",
            null,
            "heading"
          ),
          React.createElement(
            "th",
            null,
            "heading"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement("form", { action: "" })
          )
        )
      )
    )
  );
};