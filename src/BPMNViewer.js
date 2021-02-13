import React from "react";
import ReactBpmn from 'react-bpmn';
import "./bpmnviewer.css";

const BPMNViewer = () => {

  const onShown = () => {
    console.log('diagram shown');
  }

  const onLoading = () => {
    console.log('diagram loading');
  }

  const onError = (err) => {
    console.log('failed to show diagram');
  }

  return (
    <div class="bpmn-container">
      <ReactBpmn
        url="/diagram.bpmn"
        onShown={ onShown }
        onLoading={ onLoading }
        onError={ onError }
      />
    </div>
  );
}

export default BPMNViewer;