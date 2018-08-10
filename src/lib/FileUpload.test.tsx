import * as React from "react";
import * as ReactDOM from "react-dom";
import FileUpload from "./FileUpload";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FileUpload
      file={null}
      fieldName={"file"}
      onChange={() => {
        console.log("change");
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
