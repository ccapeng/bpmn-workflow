import React, { useEffect } from "react";
import Modeler from 'bpmn-js/dist/bpmn-modeler.production.min';
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "./bpmnmodeler.css";

const BPMNModeler = () => {

  let modeler;
  let downloadLink = React.createRef();

  const initBPMN = () => {
    modeler = new Modeler({
      container: '#__canvas',
      keyboard: {
        bindTo: window
      }
    });
  }

  const loadBPMN = () => {
    let url = "/diagram2.bpmn";
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

  const setEncoded = (link, name, data) => {
    console.log(link)
    var encodedData = encodeURIComponent(data);
    if (data) {
      link.setAttribute('href', 
        'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
      );
      link.setAttribute('download', name);
    } else {
      //link.removeClass('active');
    }
  }

  const handleDownload = async () => {
    try {
      const { xml } = await modeler.saveXML({ format: true });
      setEncoded(downloadLink.current, "diagram.bpmn", xml);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="bpmn-container" id="__canvas"></div>
      <div className="mt-1">
        <a
          role="button"
          onClick={handleDownload}
          className="btn btn default"
          ref={downloadLink}
          >
          Download
        </a>
      </div>
    </div>
  );
}

export default BPMNModeler;