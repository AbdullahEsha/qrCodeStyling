import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import QRCodeStyling from "qr-code-styling";
import img from "./qrCode.jpg";

const color1 = "#21D2FF";
const color2 = "#A433FF";
const color3 = "#ffffff";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: img,
  margin: 0,
  dotsOptions: {
    color: "#4267b2",
    type: "dots",
    gradient: {
      type: "linear", //radial,
      rotation: Math.PI / 4,
      colorStops: [
        { offset: 0, color: color1 },
        { offset: 0.7, color: color2 },
      ],
    },
  },
  cornersSquareOptions: {
    type: "dot",
  },
  cornersDotOptions: {
    type: "dot",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 0,
  },
});

const App = () => {
  const [url, setUrl] = useState("https://www.swopme.co");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [margin, setMargin] = useState(0);
  const [image, setImage] = useState("");
  const [imgMargin, setImgMargin] = useState(0);
  const [dotsType, setDotsType] = useState("dots");
  const [dotsColorS, setDotsColorS] = useState(color1);
  const [dotsColorE, setDotsColorE] = useState(color2);
  const [cornersSquareType, setCornersSquareType] = useState("dot");
  const [cornersDotType, setCornersDotType] = useState("dot");
  const [backgroundColorS, setBackgroundColorS] = useState(color3);
  const [backgroundColorE, setBackgroundColorE] = useState(color3);
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
      image: image,
      width: width,
      height: height,
      margin: margin,
      imageOptions: { margin: imgMargin },
      dotsOptions: {
        type: dotsType,
        gradient: {
          colorStops: [
            { offset: 0, color: dotsColorS },
            { offset: 0.7, color: dotsColorE },
          ],
        },
      },
      cornersSquareOptions: { type: cornersSquareType },
      cornersDotOptions: { type: cornersDotType },
      backgroundOptions: {
        gradient: {
          colorStops: [
            { offset: 0, color: backgroundColorS },
            { offset: 0.7, color: backgroundColorE },
          ],
        },
      },
    });
  }, [
    url,
    image,
    width,
    height,
    margin,
    imgMargin,
    dotsType,
    cornersSquareType,
    cornersDotType,
    dotsColorS,
    dotsColorE,
    backgroundColorS,
    backgroundColorE,
  ]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onImageChange = (event) => {
    console.log("Image: ", img);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onWidthChange = (event) => {
    event.preventDefault();
    setWidth(event.target.value);
  };

  const onHeightChange = (event) => {
    event.preventDefault();
    setHeight(event.target.value);
  };

  const onMarginChange = (event) => {
    event.preventDefault();
    setMargin(event.target.value);
  };

  const onImgMarginChange = (event) => {
    event.preventDefault();
    setImgMargin(event.target.value);
  };

  const onDotsTypeChange = (event) => {
    event.preventDefault();
    setDotsType(event.target.value);
  };

  const onDotsColorSChange = (event) => {
    event.preventDefault();
    setDotsColorS(event.target.value);
  };

  const onDotsColorEChange = (event) => {
    event.preventDefault();
    setDotsColorE(event.target.value);
  };

  const onCornersSquareTypeChange = (event) => {
    event.preventDefault();
    setCornersSquareType(event.target.value);
  };

  const onCornersDotTypeChange = (event) => {
    event.preventDefault();
    setCornersDotType(event.target.value);
  };

  const onBackgroundColorSChange = (event) => {
    event.preventDefault();
    setBackgroundColorS(event.target.value);
  };

  const onBackgroundColorEChange = (event) => {
    event.preventDefault();
    setBackgroundColorE(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <>
      <Container>
        <div className="App">
          <br />
          <br />
          <Row>
            <Col>
              <Row>
                <Col className="algn">
                  <h4>Enter an Url</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    value={url}
                    onChange={onUrlChange}
                    className="form-control"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Image File</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    id="profilePic"
                    type="file"
                    onChange={onImageChange}
                    //value={image}
                    className="form-control"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn ">
                  <h4>Image Margin</h4>
                </Col>
                <Col className="algnlf ">
                  <input
                    type={"number"}
                    value={imgMargin}
                    onChange={onImgMarginChange}
                    className="form-control"
                    min="0"
                    max="30"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Height</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    type={"number"}
                    value={height}
                    onChange={onHeightChange}
                    className="form-control"
                    step="5"
                    min="0"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Width</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    type={"number"}
                    value={width}
                    onChange={onWidthChange}
                    className="form-control"
                    step="5"
                    min="0"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Margin</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    type={"number"}
                    value={margin}
                    onChange={onMarginChange}
                    className="form-control"
                    min="0"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Dots Style</h4>
                </Col>
                <Col className="algnlf">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={dotsType}
                      onChange={onDotsTypeChange}
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dots">Dots</option>
                      <option value="rounded">Rounded</option>
                      <option value="extra-rounded">Extra Rounded</option>
                      <option value="classy">Classy</option>
                      <option value="classy-rounded">Classy Rounded</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Dots Color</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    type={"color"}
                    value={dotsColorS}
                    onChange={onDotsColorSChange}
                  />{" "}
                  <input
                    type={"color"}
                    value={dotsColorE}
                    onChange={onDotsColorEChange}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Corners Square Style</h4>
                </Col>
                <Col className="algnlf ">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={cornersSquareType}
                      onChange={onCornersSquareTypeChange}
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dot">Dot</option>
                      <option value="extra-rounded">Extra Rounded</option>
                    </select>
                  </div>
                </Col>
              </Row>
              {/*<br />
               <Row>
                <Col className="algn">
                  <h4>Corners Square Color</h4>
                </Col>
                <Col className="algnlf">
                  <input type={"color"} /> <input type={"color"} />
                </Col>
              </Row> */}
              <br />
              <Row>
                <Col className="algn ">
                  <h4>Corners Dot Style</h4>
                </Col>
                <Col className="algnlf ">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={cornersDotType}
                      onChange={onCornersDotTypeChange}
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dot">Dot</option>
                    </select>
                  </div>
                </Col>
              </Row>
              {/* <br />
              <Row>
                <Col className="algn">
                  <h4>Corners Dot Color</h4>
                </Col>
                <Col className="algnlf">
                  <input type={"color"} /> <input type={"color"} />
                </Col>
              </Row> */}
              <br />
              <Row>
                <Col className="algn">
                  <h4>Background Color</h4>
                </Col>
                <Col className="algnlf">
                  <input
                    type={"color"}
                    value={backgroundColorS}
                    onChange={onBackgroundColorSChange}
                  />{" "}
                  <input
                    type={"color"}
                    value={backgroundColorE}
                    onChange={onBackgroundColorEChange}
                  />
                </Col>
              </Row>
              {/*<br />
               <Row>
                <Col className="algn ">
                  <h4>Image Size</h4>
                </Col>
                <Col className="algnlf ">
                  <input
                    type={"number"}
                    className="form-control"
                    step="0.1"
                    min="0.0"
                    max="1.0"
                  />
                </Col>
              </Row> */}
            </Col>
            <Col>
              <div id="bdrOut">
                <br />
                <div ref={ref} id="bdr" />
              </div>
              <br />
              <br />
              <select
                onChange={onExtensionChange}
                value={fileExt}
                class="btn btn-outline-primary btn-lg"
              >
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
              </select>{" "}
              <button onClick={onDownloadClick} class="btn btn-primary btn-md">
                Download
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default App;
