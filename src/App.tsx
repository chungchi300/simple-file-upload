import * as React from "react";
import FileUpload from "./lib/FileUpload";
class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }
  private onFileChange(event) {
    console.log(event);
    this.setState({
      file: event.target.files[0]
    });
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" />
        <FileUpload
          fieldName="testFile"
          file={this.state.file}
          onChange={this.onFileChange.bind(this)}
        />
        <FileUpload
          fieldName={"testFile"}
          file={this.state.file}
          onChange={this.onFileChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
