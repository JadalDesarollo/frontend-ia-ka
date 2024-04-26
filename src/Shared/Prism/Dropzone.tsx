import React, { Component } from 'react';
import { DropzoneArea } from "material-ui-dropzone";

interface DropzoneProps { }

interface DropzoneState {
  files: any[];
}

export class Dropzone extends Component<DropzoneProps, DropzoneState> {
  state: { files: never[]; };
  setState(arg0: { files: any[]; }) {
    throw new Error('Method not implemented.');
  }
  constructor(props: DropzoneProps) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange = (files: any[]) => {
    this.setState({
      files: files
    });
  };

  render() {
    return (
      <DropzoneArea
        acceptedFiles={['image/*']}
        onChange={this.handleChange}
        showFileNames
        showAlerts={true}
        filesLimit={100}
        dropzoneText="Drag and Drop a file here or Click"
      />
    );
  }
}
