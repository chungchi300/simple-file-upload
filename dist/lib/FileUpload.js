var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import * as React from "react";
import DeleteForever from "./Delete.js";
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        var _this = this;
        if (this.props.file) {
            var cancelOperation = (React.createElement("div", { className: this.props.className },
                React.createElement("div", { className: "fileName" }, this.props.file.name),
                React.createElement("div", { className: "delete", onClick: function () {
                        return _this.props.onChange({ target: { name: "file", files: [] } });
                    } },
                    React.createElement(DeleteForever, null))));
            return cancelOperation;
        }
        return (React.createElement("div", { className: this.props.className },
            React.createElement("button", { type: "button", className: "chooseFile", onClick: function () {
                    _this.fileInput.click();
                } },
                this.props.file ? this.props.file.name : "Choose .zip file",
                React.createElement("input", { ref: function (ref) { return (_this.fileInput = ref); }, type: "file", style: { display: "none" }, 
                    // style={styles.fileInput}
                    name: "file", onChange: function (event) {
                        _this.props.onChange(event);
                        _this.fileInput.value = "";
                    } }))));
    };
    return FileUpload;
}(React.Component));
export default styled(FileUpload)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .fileName {\n    height: 36px;\n    line-height: 36px;\n    border-radius: 2px;\n    display: inline-block;\n    text-align: left;\n    color: rgba(42, 88, 173, 1);\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    width: 220px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 26px 0px 5px 0px;\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n  .delete {\n    height: 36px;\n    line-height: 36px;\n    display: inline-block;\n    text-align: right;\n    position: absolute;\n    margin: 26px 0px 5px 12px;\n    cursor: pointer;\n    svg {\n      fill: rgba(242, 101, 34, 0.5);\n      :hover {\n        fill: rgba(242, 101, 34, 1);\n        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n      }\n    }\n  }\n  .chooseFile {\n    height: 36px;\n    line-height: 36px;\n    border-radius: 2px;\n    border: 0px;\n    display: inline-block;\n    text-align: center;\n    color: rgba(42, 88, 173, 1);\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    width: 256px;\n    margin: 26px 12px 12px 0px;\n    :hover {\n      background-color: rgba(42, 88, 173, 1);\n      color: #fff;\n      cursor: pointer;\n      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    }\n  }\n"], ["\n  .fileName {\n    height: 36px;\n    line-height: 36px;\n    border-radius: 2px;\n    display: inline-block;\n    text-align: left;\n    color: rgba(42, 88, 173, 1);\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    width: 220px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 26px 0px 5px 0px;\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n  .delete {\n    height: 36px;\n    line-height: 36px;\n    display: inline-block;\n    text-align: right;\n    position: absolute;\n    margin: 26px 0px 5px 12px;\n    cursor: pointer;\n    svg {\n      fill: rgba(242, 101, 34, 0.5);\n      :hover {\n        fill: rgba(242, 101, 34, 1);\n        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n      }\n    }\n  }\n  .chooseFile {\n    height: 36px;\n    line-height: 36px;\n    border-radius: 2px;\n    border: 0px;\n    display: inline-block;\n    text-align: center;\n    color: rgba(42, 88, 173, 1);\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    width: 256px;\n    margin: 26px 12px 12px 0px;\n    :hover {\n      background-color: rgba(42, 88, 173, 1);\n      color: #fff;\n      cursor: pointer;\n      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=FileUpload.js.map