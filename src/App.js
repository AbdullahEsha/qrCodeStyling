import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import QRCodeStyling from "qr-code-styling";
import img from "./qrCode.jpg";

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
        { offset: 0, color: "#21D2FF" },
        { offset: 0.7, color: "#A433FF" },
      ],
    },
  },
  cornersSquareOptions: {
    type: "dots",
  },
  cornersDotOptions: {
    type: "dots",
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
  const [imgMargin, setImgMargin] = useState(0);
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
      width: width,
      height: height,
      margin: margin,
      imageOptions: [(margin: imgMargin)],
    });
  }, [url, width, height, margin, imgMargin]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
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
                  <input type={"File"} className="form-control" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn ">
                  <h4>Image Margin</h4>
                </Col>
                <Col className="algnlf ">
                  <input type={"number"} className="form-control" min="0" />
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
                      // name="n_person"
                      // value={n_person}
                      // onChange={(event) => {
                      //   setNPerson(event.target.value);
                      // }}
                      required
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dots">Dots</option>
                      <option value="rounded">Rounded</option>
                      <option value="extraRounded">Extra Rounded</option>
                      <option value="classy">Classy</option>
                      <option value="classyRounded">Classy Rounded</option>
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
                  <input type={"color"} /> <input type={"color"} />
                  {/* <input value="" onChange={} /> */}
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn ">
                  <h4>Corners Square Style</h4>
                </Col>
                <Col className="algnlf ">
                  <div className="form-group">
                    <select
                      className="form-control"
                      // name="n_person"
                      // value={n_person}
                      // onChange={(event) => {
                      //   setNPerson(event.target.value);
                      // }}
                      required
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dots">Dots</option>
                      <option value="rounded">Rounded</option>
                      <option value="extraRounded">Extra Rounded</option>
                      <option value="classy">Classy</option>
                      <option value="classyRounded">Classy Rounded</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Corners Square Color</h4>
                </Col>
                <Col className="algnlf">
                  <input type={"color"} /> <input type={"color"} />
                  {/* <input value="" onChange={} /> */}
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn ">
                  <h4>Corners Dot Style</h4>
                </Col>
                <Col className="algnlf ">
                  <div className="form-group">
                    <select
                      className="form-control"
                      // name="n_person"
                      // value={n_person}
                      // onChange={(event) => {
                      //   setNPerson(event.target.value);
                      // }}
                      required
                    >
                      <option value="" disabled selected>
                        Choose One...
                      </option>
                      <option value="square">Square</option>
                      <option value="dots">Dots</option>
                      <option value="rounded">Rounded</option>
                      <option value="extraRounded">Extra Rounded</option>
                      <option value="classy">Classy</option>
                      <option value="classyRounded">Classy Rounded</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Corners Dot Color</h4>
                </Col>
                <Col className="algnlf">
                  <input type={"color"} /> <input type={"color"} />
                  {/* <input value="" onChange={} /> */}
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="algn">
                  <h4>Background Color</h4>
                </Col>
                <Col className="algnlf">
                  <input type={"color"} /> <input type={"color"} />
                  {/* <input value="" onChange={} /> */}
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
              <div ref={ref} />
              <br />
              <br />
              <select
                onChange={onExtensionChange}
                value={fileExt}
                class="btn btn-outline-primary"
              >
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
              </select>{" "}
              <button onClick={onDownloadClick} class="btn btn-primary ">
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
