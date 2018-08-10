import styled from "styled-components";
import * as React from "react";
import Delete from "./Delete";

interface Props {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  className?: string;
  file: any;
  fieldName?: string;
  onChange: any;
}
class FileUpload extends React.Component<Props, any> {
  private fileInput;
  render() {
    if (this.props.file) {
      let cancelOperation = (
        <div className={this.props.className}>
          <div className="fileName">{this.props.file.name}</div>
          <div
            className="delete"
            onClick={() =>
              this.props.onChange({ target: { name: "file", files: [] } })
            }
          >
            <Delete />
          </div>
        </div>
      );

      return cancelOperation;
    }
    return (
      <div className={this.props.className}>
        <button
          type="button"
          className="chooseFile"
          onClick={() => {
            this.fileInput.click();
          }}
          // label={this.props.file ? this.props.file.name : "Choose .zip file"}
          // labelPosition="after" //instead of before, because before would occur empty after cancel
          // style={styles.button}
          // containerElement="label"
        >
          {this.props.file ? this.props.file.name : "Choose .zip file"}
          <input
            ref={ref => (this.fileInput = ref)}
            type="file"
            style={{ display: "none" }}
            // style={styles.fileInput}
            name={this.props.fieldName}
            onChange={event => {
              this.props.onChange(event);
              this.fileInput.value = "";
            }}
          />
        </button>
      </div>
    );
  }
}

export default styled(FileUpload)`
  .fileName {
    height: 36px;
    line-height: 36px;
    border-radius: 2px;
    display: inline-block;
    text-align: left;
    color: rgba(42, 88, 173, 1);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 26px 0px 5px 0px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .delete {
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: right;
    position: absolute;
    margin: 26px 0px 5px 12px;
    cursor: pointer;
    svg {
      fill: rgba(242, 101, 34, 0.5);
      :hover {
        fill: rgba(242, 101, 34, 1);
        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      }
    }
  }
  .chooseFile {
    height: 36px;
    line-height: 36px;
    border-radius: 2px;
    border: 0px;
    display: inline-block;
    text-align: center;
    color: rgba(42, 88, 173, 1);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    width: 256px;
    margin: 26px 12px 12px 0px;
    :hover {
      background-color: rgba(42, 88, 173, 1);
      color: #fff;
      cursor: pointer;
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }
  }
`;
