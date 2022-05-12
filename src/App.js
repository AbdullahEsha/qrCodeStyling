import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import QRCodeStyling from "qr-code-styling";
import img from "./qrCode.jpg";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: img,
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
    margin: 20,
  },
});

export default function App() {
  const [url, setUrl] = useState("https://facebook.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
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
    <div className="App">
      <div style={styles.inputWrapper}>
        <input value={url} onChange={onUrlChange} style={styles.inputBox} />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};
