import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import QRCodeStyling from 'qr-code-styling'
import useWindowDimensions from './useWindowDimensions'
import previewImg from './image/7382535.png'

import qrStyle1 from './image/qrstyle1.PNG'
import qrStyle2 from './image/qrstyle2.PNG'
import qrStyle3 from './image/qrstyle3.PNG'
import qrStyle4 from './image/qrstyle4.PNG'
import qrStyle5 from './image/qrstyle5.PNG'
import qrStyle6 from './image/qrstyle6.PNG'

import cornerSquare from './image/cornerSquare.png'
import cornerSquare1 from './image/cornerSquare1.png'
import cornerSquare2 from './image/cornerSquare2.png'
import cornerSquare3 from './image/cornerSquare3.png'

import cornerSquareDot from './image/cornerSquareDot.png'
import cornerSquareDot1 from './image/cornerSquareDot1.png'
import cornerSquareDot2 from './image/cornerSquareDot2.png'

import facebookRound from './image/facebook-round.png'
import linkdinRound from './image/linkdin-round.png'
import twitterRound from './image/twitter-round.png'

import bitcoinRound from './image/bitcoin-round.png'
import telegramRound from './image/telegram-round.png'
import twitchRound from './image/twitch-round.png'
import messengerRound from './image/messenger-round.png'

const color1 = '#623984'
const color2 = '#8c00ff'
const color3 = '#ffffff'

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://swopme.co',
  margin: 0,
  qrOptions: {
    typeNumber: '0',
    mode: 'Byte',
    errorCorrectionLevel: 'Q',
  },
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: { type: 'dots', color: '#623984' },
  backgroundOptions: { color: '#ffffff' },
  image: '',
  dotsOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: '#623984',
      color2: '#623984',
      rotation: 0,
    },
  },
  cornersSquareOptions: { type: 'dot', color: '#000000' },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: '#000000',
      color2: '#000000',
      rotation: 0,
    },
  },
  cornersDotOptions: { type: '', color: '#000000' },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: '#000000',
      color2: '#000000',
      rotation: 0,
    },
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: '#ffffff',
      color2: '#ffffff',
      rotation: 0,
    },
  },
})

const App = () => {
  // const [test, setTest] = useState()
  const [qrData, setQrData] = useState({
    url: 'https://www.swopme.co',
    width: 300,
    height: 300,
    margin: 0,
    image: '',
    imgMargin: 0,
    backgroundDots: false,
    gradientType: 'linear',
    dotsType: 'classy-rounded',
    dotsColorS: color1,
    dotsColorE: color2,
    cornersSquareType: '',
    cornersDotType: '',
    backgroundColorS: color3,
    backgroundColorE: color3,
    rotation: 0.0,
    fileExt: 'png',
  })

  const { width } = useWindowDimensions()

  const ref = useRef(
    qrCode.update({
      data: qrData.url,
      image: qrData.image,
      width: qrData.width,
      height: qrData.height,
      margin: qrData.margin,
      type: 'canvas',
      imageOptions: {
        margin: qrData.imgMargin,
        hideBackgroundDots: qrData.backgroundDots,
      },
      dotsOptions: {
        type: qrData.dotsType,
        gradient: {
          type: qrData.gradientType,
          colorStops: [
            { offset: 0, color: qrData.dotsColorS },
            { offset: 1, color: qrData.dotsColorE },
          ],
          rotation: qrData.rotation,
        },
      },
      cornersSquareOptions: {
        type: qrData.cornersSquareType,
        gradient: {
          colorStops: [
            { offset: 0, color: qrData.dotsColorS },
            { offset: 0.8, color: qrData.dotsColorE },
          ],
          rotation: qrData.rotation,
        },
      },
      cornersDotOptions: {
        type: qrData.cornersDotType,
        gradient: {
          colorStops: [
            { offset: 0, color: qrData.dotsColorS },
            { offset: 0.8, color: qrData.dotsColorE },
          ],
          rotation: qrData.rotation,
        },
      },
      backgroundOptions: {
        gradient: {
          colorStops: [
            { offset: 0, color: qrData.backgroundColorS },
            { offset: 1, color: qrData.backgroundColorE },
          ],
          rotation: qrData.rotation,
        },
      },
    }),
  )

  // const handleSaveToPC = () => {
  //   setTest({
  //     data: qrData.url,
  //     image: qrData.image,
  //     width: qrData.width,
  //     height: qrData.height,
  //     margin: qrData.margin,
  //     type: 'canvas',
  //     imageOptions: {
  //       margin: qrData.imgMargin,
  //       hideBackgroundDots: qrData.backgroundDots,
  //     },
  //     dotsOptions: {
  //       type: qrData.dotsType,
  //       gradient: {
  //         type: qrData.gradientType,
  //         colorStops: [
  //           { offset: 0, color: qrData.dotsColorS },
  //           { offset: 1, color: qrData.dotsColorE },
  //         ],
  //         rotation: qrData.rotation,
  //       },
  //     },
  //     cornersSquareOptions: {
  //       type: qrData.cornersSquareType,
  //       gradient: {
  //         colorStops: [
  //           { offset: 0, color: qrData.dotsColorS },
  //           { offset: 0.8, color: qrData.dotsColorE },
  //         ],
  //         rotation: qrData.rotation,
  //       },
  //     },
  //     cornersDotOptions: {
  //       type: qrData.cornersDotType,
  //       gradient: {
  //         colorStops: [
  //           { offset: 0, color: qrData.dotsColorS },
  //           { offset: 0.8, color: qrData.dotsColorE },
  //         ],
  //         rotation: qrData.rotation,
  //       },
  //     },
  //     backgroundOptions: {
  //       gradient: {
  //         colorStops: [
  //           { offset: 0, color: qrData.backgroundColorS },
  //           { offset: 1, color: qrData.backgroundColorE },
  //         ],
  //         rotation: qrData.rotation,
  //       },
  //     },
  //   })

  //   const fileData = JSON.stringify(test)
  //   const blob = new Blob([fileData], { type: 'text/plain' })
  //   const url = URL.createObjectURL(blob)
  //   const link = document.createElement('a')
  //   link.download = `${Date.now()}.json`
  //   link.href = url
  //   link.click()
  // }

  // console.log('jsonData', jsonData)

  useEffect(() => {
    qrCode.append(ref.current)
    // var canvas = ref.current.querySelector('canvas')
    // console.log(canvas.toDataURL())
  }, [])

  for (let e of document.querySelectorAll(
    'input[type="range"].slider-progress',
  )) {
    e.style.setProperty('--value', e.value)
    e.style.setProperty('--min', e.min === '' ? '0' : e.min)
    e.style.setProperty('--max', e.max === '' ? '1' : e.max)
    e.addEventListener('input', () => e.style.setProperty('--value', e.value))
  }

  const qrLogo = async (logoName) => {
    let response = ''
    if (logoName === 'facebook-round') {
      response = await fetch(facebookRound)
    } else if (logoName === 'linkdin-round') {
      response = await fetch(linkdinRound)
    } else if (logoName === 'twitter-round') {
      response = await fetch(twitterRound)
    } else if (logoName === 'bitcoin-round') {
      response = await fetch(bitcoinRound)
    } else if (logoName === 'telegram-round') {
      response = await fetch(telegramRound)
    } else if (logoName === 'twitch-round') {
      response = await fetch(twitchRound)
    } else if (logoName === 'messenger-round') {
      response = await fetch(messengerRound)
    }

    const blob = await response.blob()
    const qrlogores = new File([blob], 'image.jpg', { type: blob.type })

    document.querySelector('.image-preview').src = URL.createObjectURL(
      qrlogores,
    )

    document.querySelector('.remove').style.visibility = 'visible'

    setQrData({ ...qrData, image: URL.createObjectURL(qrlogores) })
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(0, 0, 0) 0%, ${qrData.dotsColorS} 50%, rgb(255, 255, 255) 100%)`,
        }}
      >
        <div className="container banner-inside">
          <h3>SOWP Qr Code</h3>
          <p>Get Your QR Code For Free</p>
        </div>
      </div>
      <Container className="card_section">
        <div className="row direction">
          <div
            className={`col-sm-12 ${width < 1200 ? 'col-md-6' : 'col-md-8'}`}
          >
            <div className="main-options">
              <div className="main-options-bar">
                <h5 className="main-bar">
                  Main Options{' '}
                  <span
                    id="main-options-plus"
                    onClick={() => {
                      document.querySelector(
                        '.main-option-content',
                      ).style.display = 'block'

                      document.querySelector(
                        '.color-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.logo-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.qrStyle-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'main-options-plus',
                      ).style.display = 'none'
                      document.getElementById(
                        'main-options-minus',
                      ).style.display = 'block'

                      document.getElementById(
                        'qrStyle-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'qrStyle-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'logo-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'logo-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'color-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'color-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    +
                  </span>
                  <span
                    id="main-options-minus"
                    onClick={() => {
                      document.querySelector(
                        '.main-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'main-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'main-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    -
                  </span>
                </h5>
              </div>
              <div className="option-content main-option-content">
                <h5>Enter an url</h5>
                <input
                  value={qrData.url}
                  onChange={(event) =>
                    setQrData({ ...qrData, url: event.target.value })
                  }
                  className="form-control"
                />
              </div>
            </div>
            <div className="main-options">
              <div className="main-options-bar">
                <h5 className="main-bar">
                  Color Options{' '}
                  <span
                    id="color-options-plus"
                    onClick={() => {
                      document.querySelector(
                        '.color-option-content',
                      ).style.display = 'block'

                      document.querySelector(
                        '.main-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.logo-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.qrStyle-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'color-options-plus',
                      ).style.display = 'none'
                      document.getElementById(
                        'color-options-minus',
                      ).style.display = 'block'

                      document.getElementById(
                        'qrStyle-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'qrStyle-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'logo-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'logo-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'main-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'main-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    +
                  </span>
                  <span
                    id="color-options-minus"
                    onClick={() => {
                      document.querySelector(
                        '.color-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'color-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'color-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    -
                  </span>
                </h5>
              </div>
              <div className="option-content color-option-content">
                <h5>QR Code Color</h5>
                <div className="color-options">
                  <input
                    type="radio"
                    name="color-options"
                    onClick={() => {
                      document.getElementById('single-color').style.display =
                        'block'
                      document.getElementById('single-text').style.display =
                        'block'
                      document.querySelector(
                        '.rotation-section',
                      ).style.display = 'none'
                      document.getElementById('gradient1-color').style.display =
                        'none'
                      document.getElementById('gradient1-text').style.display =
                        'none'
                      document.getElementById('gradient2-color').style.display =
                        'none'
                      document.getElementById('gradient2-text').style.display =
                        'none'
                      document.getElementById('qrtype').style.display = 'none'
                    }}
                    className="form-check-input"
                  />{' '}
                  <label>Single Color</label>{' '}
                  <input
                    type="radio"
                    name="color-options"
                    onClick={() => {
                      document.getElementById('single-color').style.display =
                        'none'
                      document.getElementById('single-text').style.display =
                        'none'
                      document.querySelector(
                        '.rotation-section',
                      ).style.display = 'block'
                      document.getElementById('gradient1-color').style.display =
                        'block'
                      document.getElementById('gradient1-text').style.display =
                        'block'
                      document.getElementById('gradient2-color').style.display =
                        'block'
                      document.getElementById('gradient2-text').style.display =
                        'block'
                      document.getElementById('qrtype').style.display = 'block'
                    }}
                    className="form-check-input"
                  />{' '}
                  <label>Gradient Color</label>
                  <div className="color-position">
                    <input
                      type="color"
                      id="single-color"
                      value={qrData.dotsColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorS: event.target.value,
                          dotsColorE: event.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      id="single-text"
                      value={qrData.dotsColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorS: event.target.value,
                          dotsColorE: event.target.value,
                        })
                      }
                      className="gradient-text-container form-control"
                    />
                    <input
                      type="color"
                      id="gradient1-color"
                      value={qrData.dotsColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorS: event.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      id="gradient1-text"
                      value={qrData.dotsColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorS: event.target.value,
                        })
                      }
                      className="gradient-text-container form-control"
                    />
                    <input
                      type="color"
                      id="gradient2-color"
                      value={qrData.dotsColorE}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorE: event.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      id="gradient2-text"
                      value={qrData.dotsColorE}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          dotsColorE: event.target.value,
                        })
                      }
                      className="gradient-text-container form-control"
                    />
                  </div>
                  <div className="qrtype" id="qrtype">
                    <input
                      type="radio"
                      name="qrtype"
                      checked={qrData.gradientType === 'linear' ? true : false}
                      onChange={(event) => {
                        document.querySelector(
                          '.rotation-section',
                        ).style.display = 'block'
                        if (event.target.checked) {
                          setQrData({ ...qrData, gradientType: 'linear' })
                        }
                      }}
                      className="form-check-input"
                    />
                    <label>Linear</label>
                    <input
                      type="radio"
                      name="qrtype"
                      checked={qrData.gradientType === 'radial' ? true : false}
                      onChange={(event) => {
                        document.querySelector(
                          '.rotation-section',
                        ).style.display = 'none'
                        if (event.target.checked) {
                          setQrData({ ...qrData, gradientType: 'radial' })
                        }
                      }}
                      className="form-check-input linear-option"
                    />
                    <label>Radial</label>
                  </div>
                </div>
                <h5>Background Color</h5>
                <div className="color-options">
                  <div className="color-position">
                    <input
                      type="color"
                      id="single-color-background"
                      value={qrData.backgroundColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          backgroundColorS: event.target.value,
                          backgroundColorE: event.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      id="single-text-background"
                      value={qrData.backgroundColorS}
                      onChange={(event) =>
                        setQrData({
                          ...qrData,
                          backgroundColorS: event.target.value,
                          backgroundColorE: event.target.value,
                        })
                      }
                      className="gradient-text-container form-control"
                    />
                  </div>
                </div>
                <div className="rotation-section">
                  <h5>Rotation</h5>
                  <input
                    type="range"
                    className="styled-slider slider-progress"
                    min="100.0"
                    step="0.05"
                    max="110.0"
                    onChange={(event) =>
                      setQrData({
                        ...qrData,
                        rotation: event.target.value,
                      })
                    }
                    style={{ width: '150px' }}
                  />
                </div>
              </div>
            </div>
            <div className="main-options">
              <div className="main-options-bar">
                <h5 className="main-bar">
                  Add Logo{' '}
                  <span
                    id="logo-options-plus"
                    onClick={() => {
                      document.querySelector(
                        '.logo-option-content',
                      ).style.display = 'block'

                      document.querySelector(
                        '.color-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.main-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.qrStyle-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'logo-options-plus',
                      ).style.display = 'none'
                      document.getElementById(
                        'logo-options-minus',
                      ).style.display = 'block'

                      document.getElementById(
                        'qrStyle-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'qrStyle-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'main-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'main-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'color-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'color-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    +
                  </span>
                  <span
                    id="logo-options-minus"
                    onClick={() => {
                      document.querySelector(
                        '.logo-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'logo-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'logo-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    -
                  </span>
                </h5>
              </div>
              <div className="option-content logo-option-content">
                <p
                  className="remove"
                  onClick={() => {
                    setQrData({
                      ...qrData,
                      image: '',
                    })
                    document.querySelector('.remove').style.visibility =
                      'hidden'
                    document.querySelector('.image-preview').src = previewImg
                  }}
                >
                  x
                </p>
                <img src={previewImg} alt="no logo" className="image-preview" />
                <br />
                <input
                  type="file"
                  className="file-preview"
                  onChange={(event) => {
                    document.querySelector(
                      '.image-preview',
                    ).src = URL.createObjectURL(event.target.files[0])

                    document.querySelector('.remove').style.visibility =
                      'visible'

                    setQrData({
                      ...qrData,
                      image: URL.createObjectURL(event.target.files[0]),
                    })
                  }}
                />
                <br />
                <div className="remove-logo-background">
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      if (event.target.checked) {
                        setQrData({ ...qrData, backgroundDots: true })
                      } else if (!event.target.checked) {
                        setQrData({ ...qrData, backgroundDots: false })
                      }
                    }}
                  />{' '}
                  <p>Remove Background Behind Logo</p>
                </div>
                <h5>Logo Margin</h5>
                <input
                  type="range"
                  className="styled-slider slider-progress"
                  min="100.0"
                  max="120.0"
                  onChange={(event) =>
                    setQrData({
                      ...qrData,
                      imgMargin: event.target.value - 100,
                    })
                  }
                  style={{ width: '150px' }}
                />

                <h5 style={{ marginTop: '20px' }}>Choose Logo</h5>
                <div className="logo-image-container-outside">
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                      onClick={() => qrLogo('facebook-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                      onClick={() => qrLogo('linkdin-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                      onClick={() => qrLogo('twitter-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png"
                      onClick={() => qrLogo('bitcoin-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
                      onClick={() => qrLogo('telegram-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4494/4494561.png"
                      onClick={() => qrLogo('twitch-round')}
                      alt="no_logo"
                    />
                  </div>
                  <div className="logo-image-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4494/4494508.png"
                      onClick={() => qrLogo('messenger-round')}
                      alt="no_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-options">
              <div className="main-options-bar">
                <h5 className="main-bar">
                  Customize Design{' '}
                  <span
                    id="qrStyle-options-plus"
                    onClick={() => {
                      document.querySelector(
                        '.qrStyle-option-content',
                      ).style.display = 'block'

                      document.querySelector(
                        '.logo-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.color-option-content',
                      ).style.display = 'none'
                      document.querySelector(
                        '.main-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'qrStyle-options-plus',
                      ).style.display = 'none'
                      document.getElementById(
                        'qrStyle-options-minus',
                      ).style.display = 'block'

                      document.getElementById(
                        'main-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'main-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'color-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'color-options-minus',
                      ).style.display = 'none'

                      document.getElementById(
                        'logo-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'logo-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    +
                  </span>
                  <span
                    id="qrStyle-options-minus"
                    onClick={() => {
                      document.querySelector(
                        '.qrStyle-option-content',
                      ).style.display = 'none'

                      document.getElementById(
                        'qrStyle-options-plus',
                      ).style.display = 'block'
                      document.getElementById(
                        'qrStyle-options-minus',
                      ).style.display = 'none'
                    }}
                  >
                    -
                  </span>
                </h5>
              </div>
              <div className="option-content qrStyle-option-content">
                <h5>Qr Code Style</h5>
                <div className="qr-code-style-outside">
                  <div className="qr-code-style">
                    <img
                      src={qrStyle1}
                      id="qrStyle1"
                      alt="no_image"
                      onClick={() => {
                        setQrData({ ...qrData, dotsType: 'square' })
                        document.getElementById('qrStyle1').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle6').style.border =
                          'none'
                        document.getElementById('qrStyle2').style.border =
                          'none'
                        document.getElementById('qrStyle3').style.border =
                          'none'
                        document.getElementById('qrStyle4').style.border =
                          'none'
                        document.getElementById('qrStyle5').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={qrStyle2}
                      id="qrStyle2"
                      alt="no_image"
                      onClick={() => {
                        setQrData({ ...qrData, dotsType: 'dots' })
                        document.getElementById('qrStyle2').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle1').style.border =
                          'none'
                        document.getElementById('qrStyle6').style.border =
                          'none'
                        document.getElementById('qrStyle3').style.border =
                          'none'
                        document.getElementById('qrStyle4').style.border =
                          'none'
                        document.getElementById('qrStyle5').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={qrStyle3}
                      id="qrStyle3"
                      alt="no_image"
                      onClick={() => {
                        setQrData({ ...qrData, dotsType: 'rounded' })
                        document.getElementById('qrStyle3').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle1').style.border =
                          'none'
                        document.getElementById('qrStyle2').style.border =
                          'none'
                        document.getElementById('qrStyle6').style.border =
                          'none'
                        document.getElementById('qrStyle4').style.border =
                          'none'
                        document.getElementById('qrStyle5').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={qrStyle4}
                      id="qrStyle4"
                      alt="no_image"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          dotsType: 'extra-rounded',
                        })
                        document.getElementById('qrStyle4').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle1').style.border =
                          'none'
                        document.getElementById('qrStyle2').style.border =
                          'none'
                        document.getElementById('qrStyle3').style.border =
                          'none'
                        document.getElementById('qrStyle6').style.border =
                          'none'
                        document.getElementById('qrStyle5').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={qrStyle5}
                      id="qrStyle5"
                      alt="no_image"
                      onClick={() => {
                        setQrData({ ...qrData, dotsType: 'classy' })
                        document.getElementById('qrStyle5').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle1').style.border =
                          'none'
                        document.getElementById('qrStyle2').style.border =
                          'none'
                        document.getElementById('qrStyle3').style.border =
                          'none'
                        document.getElementById('qrStyle4').style.border =
                          'none'
                        document.getElementById('qrStyle6').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={qrStyle6}
                      id="qrStyle6"
                      alt="no_image"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          dotsType: 'classy-rounded',
                        })
                        document.getElementById('qrStyle6').style.border =
                          '3px solid #623984'

                        document.getElementById('qrStyle1').style.border =
                          'none'
                        document.getElementById('qrStyle2').style.border =
                          'none'
                        document.getElementById('qrStyle3').style.border =
                          'none'
                        document.getElementById('qrStyle4').style.border =
                          'none'
                        document.getElementById('qrStyle5').style.border =
                          'none'
                      }}
                    />
                  </div>
                </div>
                <br />
                <h5>Corners Square Style</h5>
                <div className="qr-code-style-outside">
                  <div className="qr-code-style">
                    <img
                      src={cornerSquare}
                      alt="no_image"
                      id="cornerSquare"
                      onClick={() => {
                        setQrData({ ...qrData, cornersSquareType: '' })
                        document.getElementById('cornerSquare').style.border =
                          '3px solid #623984'

                        document.getElementById('cornerSquare1').style.border =
                          'none'
                        document.getElementById('cornerSquare2').style.border =
                          'none'
                        document.getElementById('cornerSquare3').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={cornerSquare1}
                      alt="no_image"
                      id="cornerSquare1"
                      onClick={() => {
                        setQrData({ ...qrData, cornersSquareType: 'square' })
                        document.getElementById('cornerSquare1').style.border =
                          '3px solid #623984'

                        document.getElementById('cornerSquare').style.border =
                          'none'
                        document.getElementById('cornerSquare2').style.border =
                          'none'
                        document.getElementById('cornerSquare3').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={cornerSquare2}
                      alt="no_image"
                      id="cornerSquare2"
                      onClick={() => {
                        setQrData({ ...qrData, cornersSquareType: 'dots' })
                        document.getElementById('cornerSquare2').style.border =
                          '3px solid #623984'

                        document.getElementById('cornerSquare').style.border =
                          'none'
                        document.getElementById('cornerSquare1').style.border =
                          'none'
                        document.getElementById('cornerSquare3').style.border =
                          'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={cornerSquare3}
                      alt="no_image"
                      id="cornerSquare3"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          cornersSquareType: 'extra-rounded',
                        })
                        document.getElementById('cornerSquare3').style.border =
                          '3px solid #623984'

                        document.getElementById('cornerSquare').style.border =
                          'none'
                        document.getElementById('cornerSquare2').style.border =
                          'none'
                        document.getElementById('cornerSquare1').style.border =
                          'none'
                      }}
                    />
                  </div>
                </div>
                <br />
                <h5>Corners Dot Style</h5>
                <div className="qr-code-style-outside">
                  <div className="qr-code-style">
                    <img
                      src={cornerSquareDot}
                      alt="no_image"
                      id="cornerSquareDot"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          cornersDotType: '',
                        })
                        document.getElementById(
                          'cornerSquareDot',
                        ).style.border = '3px solid #623984'

                        document.getElementById(
                          'cornerSquareDot1',
                        ).style.border = 'none'
                        document.getElementById(
                          'cornerSquareDot2',
                        ).style.border = 'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={cornerSquareDot1}
                      alt="no_image"
                      id="cornerSquareDot1"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          cornersDotType: 'square',
                        })
                        document.getElementById(
                          'cornerSquareDot1',
                        ).style.border = '3px solid #623984'

                        document.getElementById(
                          'cornerSquareDot',
                        ).style.border = 'none'
                        document.getElementById(
                          'cornerSquareDot2',
                        ).style.border = 'none'
                      }}
                    />
                  </div>
                  <div className="qr-code-style">
                    <img
                      src={cornerSquareDot2}
                      alt="no_image"
                      id="cornerSquareDot2"
                      onClick={() => {
                        setQrData({
                          ...qrData,
                          cornersDotType: 'dots',
                        })
                        document.getElementById(
                          'cornerSquareDot2',
                        ).style.border = '3px solid #623984'

                        document.getElementById(
                          'cornerSquareDot',
                        ).style.border = 'none'
                        document.getElementById(
                          'cornerSquareDot1',
                        ).style.border = 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-sm-12 ${width < 1200 ? 'col-md-6' : 'col-md-4'}`}
            id="qr-code-position"
          >
            <div
              ref={ref}
              id="bdr"
              style={{ backgroundColor: qrData.backgroundColorS }}
            />
            <br />
            <input
              type="range"
              className="styled-slider slider-progress"
              min="300"
              max="2000"
              // step="50"
              onChange={(event) => {
                setQrData({
                  ...qrData,
                  height: event.target.value,
                  width: event.target.value,
                })
              }}
              style={{ width: '310px' }}
            />
            <div className="quality-range">
              <label>Low Quality</label>
              <p>
                {qrData.height}
                <span>x</span>
                {qrData.width}
              </p>
              <label>High Quality</label>
            </div>
            <div className="button_dwn">
              <select
                onChange={(event) =>
                  setQrData({ ...qrData, fileExt: event.target.value })
                }
                value={qrData.fileExt}
                className="btn-button_dwn"
              >
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
              </select>{' '}
              <button
                onClick={() => {
                  qrCode.download({
                    extension: qrData.fileExt,
                  })
                }}
                class="btn-button_dwn"
              >
                Download
              </button>
              {/* <button onClick={handleSaveToPC} class="btn-button_dwn">
                Export JSON
              </button> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
