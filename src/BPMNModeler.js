import React, { useEffect } from "react";
import Modeler from 'bpmn-js/dist/bpmn-modeler.production.min';
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "./bpmnmodeler.css";

const BPMNModeler = () => {

  let modeler;

  const initBPMN = () => {
    modeler = new Modeler({
      container: '.__canvas',
      keyboard: {
        bindTo: window
      }
    });
  }

  const loadBPMN = () => {
    let url = "/diagram.bpmn";
    let params = {
      method: 'GET'
    }
    fetch(url, params).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.text();
    }).then(response => {
      modeler.importXML(response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
    

  }

  useEffect(() => {
    initBPMN()
    loadBPMN();
  }, []);

  
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
    <div class="bpmn-container __canvas"></div>
  );
}

export default BPMNModeler;