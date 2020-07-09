import React, {useState} from 'react';
import ImageMapper from 'react-image-mapper';
import carScheme from '../carScheme.png'; 

function Ride() {
  const [state, setState] = useState(0);

  const load = () => {
		setState({ ...state, msg: "Interact with image !" });
  };
  
	const clicked = (area) => {
		setState({
      ...state,
			msg: `You clicked on ${area.name} at coords ${JSON.stringify(
				area.coords
      )} !`
		});
	};

  const moveOnArea = (area, evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			moveMsg: `You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	};


  const enterArea = (area) => {
      setState({ ...state, hoveredArea: area });
  }

  const leaveArea = (area) => {
      setState({...state, hoveredArea: null });
  }

  const getTipPosition = (area) => {
      return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  const clickedOutside = (evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
  };
  
	const moveOnImage = (evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
		});
	};

  const URL1 = "https://cdn.seatguru.com/en_US/img/20200702143825/seatguru/airlines_new/Asiana/Asiana_Airbus_A320-200.jpg"
  const MAP1 = {
    name: "my-map",
    areas: [
      { name: "1",  shape: "rect", coords: [31,520,71,538], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "2",  shape: "rect", coords: [79,520,119,538], preFillColor: "rgba(103, 128, 159, 0.3)", fillColor: "rgba(103, 128, 159, 0" },
      { name: "3",  shape: "rect", coords: [31,494,71,514], preFillColor: "rgba(103, 128, 159, 0.3)", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "4",  shape: "rect", coords: [79,494,119,514], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "5",  shape: "rect", coords: [31,465,71,485], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "6",  shape: "rect", coords: [79,465,119,485], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "7",  shape: "rect", coords: [31,440,71,460], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "8",  shape: "rect", coords: [79,440,119,460], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "9",  shape: "rect", coords: [31,411,71,431], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "10",  shape: "rect", coords: [79,411,119,431], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "11",  shape: "rect", coords: [31,386,71,406], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "12",  shape: "rect", coords: [79,386,119,406], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "13",  shape: "rect", coords: [31,356,71,376], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "14",  shape: "rect", coords: [79,356,119,376], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "15",  shape: "rect", coords: [31,332,71,352], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "16",  shape: "rect", coords: [79,332,119,352], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "17",  shape: "rect", coords: [31,302,71,322], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "18",  shape: "rect", coords: [79,302,119,322], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "19",  shape: "rect", coords: [31,278,71,298], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "20",  shape: "rect", coords: [79,278,119,298], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "21",  shape: "rect", coords: [31,249,71,269], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "22",  shape: "rect", coords: [79,249,119,269], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "23",  shape: "rect", coords: [31,224,71,244], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "24",  shape: "rect", coords: [79,224,119,244], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "25",  shape: "rect", coords: [31,195,71,215], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "26",  shape: "rect", coords: [79,195,119,215], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "27",  shape: "rect", coords: [31,170,71,190], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "28",  shape: "rect", coords: [79,170,119,190], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "29",  shape: "rect", coords: [31,141,71,161], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "30",  shape: "rect", coords: [79,141,119,161], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "31",  shape: "rect", coords: [31,116,71,136], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "32",  shape: "rect", coords: [79,116,119,136], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "33",  shape: "rect", coords: [31,87,71,107], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "34",  shape: "rect", coords: [79,87,119,107], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "35",  shape: "rect", coords: [31,62,71,82], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
      { name: "36",  shape: "rect", coords: [79,62,119,82], preFillColor: "", fillColor: "rgba(0, 0, 255, 0.3)"  },
            
    ]
  }


  const URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"
  const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
      { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
      { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
      { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
      { name: "5", shape: "circle", coords: [170, 100, 25 ] },
    ]
  }

  return (
    <div className="Main">
      <header className="App-header">
        <p> Ride Component </p>
        {/*
        <img class="plane" src="https://cdn.seatguru.com/en_US/img/20200702143825/seatguru/airlines_new/Asiana/Asiana_Airbus_A320-200.jpg" usemap="#seatmap"></img>
        <div>
           <map id="seatmap" name="seatmap">
             <area shape="rect" coords="134,343,170,390" href="sun.htm" alt=""/> 
             <area shape="rect" coords="166,343,195,390" href="sun.htm" alt=""/> 
             <area shape="rect" coords="227,343,263,390" alt="11"/> 
             <area shape="rect" coords="259,343,288,390" alt="12"/> 
             <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun" title = "Sun"/>
             <area shape="rect" coords="82,0,100,126" href="mercur.htm" alt="Mercury" title = "Mercury"/>
          </map>
        </div>
        */}
      </header>    
      {/*
      <div className="container">
      <ImageMapper src={URL} map={MAP} width={500}
        onLoad={() => load()}
        onClick={area => clicked(area)}
        onMouseEnter={area => enterArea(area)}
        onMouseLeave={area => leaveArea(area)}
        onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
        onImageClick={evt => clickedOutside(evt)}
        onImageMouseMove={evt => moveOnImage(evt)}
      />
      {
        state.hoveredArea &&
        <span className="tooltip"
            style={{ ...getTipPosition(state.hoveredArea)}}>
          { state.hoveredArea && state.hoveredArea.name}
        </span>
      }
      </div>
    */}
      <div className="container">
      <ImageMapper src={carScheme} map={MAP1}
        onLoad={() => load()}
        onClick={area => clicked(area)}
        onMouseEnter={area => enterArea(area)}
        onMouseLeave={area => leaveArea(area)}
        onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
        onImageClick={evt => clickedOutside(evt)}
        onImageMouseMove={evt => moveOnImage(evt)}
      />
      {
        state.hoveredArea &&
        <span className="tooltip"
            style={{ ...getTipPosition(state.hoveredArea)}}>
          { state.hoveredArea && state.hoveredArea.name}
        </span>
      }
      <p>{state.msg}</p>
      </div>
    </div>
  );
}

export default Ride;
