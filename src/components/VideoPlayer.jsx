import React, { useState, useEffect } from "react";
import Prev from "../assets/svgs/previous.svg";
import Next from "../assets/svgs/Next.svg";
import { SVGs } from "../assets/svgs/SVGs";
import { keyframes } from "styled-components";
import VideoTab from "./Tabs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const VideoPlayer = ({
  videos,
  currentVideoIndex,
  player,
  setCurrentVideoIndex,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // state to keep track of the countdown timer
  const [countdown, setCountdown] = useState(5);

  // state to keep track of whether the modal is open
  const [modalOpen, setModalOpen] = useState(false);
  const handlePlayPause = () => {
    if (!isPlaying) {
      player.play();
    } else {
      player.pause();
    }
    setIsPlaying(!isPlaying);
  };
  // function to start the countdown
  const startCountdown = () => {
    setModalOpen(true);
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          setModalOpen(false);
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
          return 5;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
  };

  const handleVideoEnd = () => {
    startCountdown();
  };
  useEffect(() => {
    if (player) {
      player.on("ended", handleVideoEnd);

      return () => {
        player.off("ended", handleVideoEnd);
      };
    }
  }, [player]);

  return (
    <VideoFrame>
      <HandleVideoPlayer>
        <section className="modelAll">
          <div className="video_component">
            <div data-vjs-player className="videoModel">
              <div className="video_height">
                <video
                  id="video-player"
                  className="video-js vjs-default-skin vjs-16-9"
                  width="640" // set the width of the video player to 640 pixels
                  // height="360" // set the height of the video player to 360 pixelsg
                ></video>
              </div>
            </div>
          </div>
          {modalOpen && (
            <Modal>
              <p>The next video will start in {countdown} seconds</p>
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            </Modal>
          )}

          <div className="overhead">
            <div className="trackPre">
              <div className="relative_to" onClick={handlePlayPause}>
                <div className="controls">
                  <Link to="/hello">
                    <img src={Prev} alt="" />
                  </Link>
                  <div className="playPause" onClick={handlePlayPause}>
                    {/* <PlayPauseButton className="outlined">
                      {isPlaying ? "Pause" : "Play"}
                    </PlayPauseButton> */}
                  </div>
                  <Link
                    to={`/courses/${props.stepContent.id}/${props.stepContent.id}/${props.stepContent.next_url}/`}
                  >
                    <img src={Next} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* COURSE DETAILS */}
        <section className="detailSegment">
          <div className="courseTitle">
            <h1>{props.stepContent.title}</h1>
            <p>
              Instructor:{" "}
              <span>
                {" "}
                <i>Noah Olatoye</i>{" "}
              </span>
            </p>
          </div>

          <section>
            {props.stepContent && <VideoTab stepContent={props.stepContent} />}
          </section>
        </section>
      </HandleVideoPlayer>
      {/* <footer>
        <h4>&copy; 2023 All Right Reserved</h4>

        <div className="copy">
          <h5>Terms and conditions</h5>
          <h5>Privacy Policy</h5>
        </div>
      </footer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem
        dolor aspernatur id. Ducimus, eum voluptatibus nesciunt officiis,
        cupiditate, earum eveniet maxime similique reprehenderit possimus natus
        incidunt molestias ratione distinctio!
      </p> */}
    </VideoFrame>
  );
};

export default VideoPlayer;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.5rem;
  transition: transform 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    // animation: ${pulse} 0.5s ease-in-out infinite;
  }
`;
const Modal = styled.button`
  background-color: red;
  color: white;
`;

let VideoFrame = styled.section`
  .mehn {
    width: 30%;
  }
  .videoModel {
    max-width: 990px;
    margin: 0px auto;
    // background: yellow;
    border-radius: 15px;
  }
  footer {
    box-shadow: var(--shadow);
    background: var(--White);
    padding: 10px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h4 {
      font-size: 16px;
      margin: 0;
      width: 50%;
    }
    @media (max-width: 540px) {
      text-align: center;
      h4 {
        width: 100%;
      }
      .copy {
        width: 100%;
        display: none !important;
      }
    }
    h5 {
      font-size: 16px;
      margin: 0;
    }
    .copy {
      width: 40%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .detailSegment {
    padding: 30px;
    .courseTitle {
      p {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
          margin-left: 10px;
        }
      }
    }
    h1 {
      font-size: 25px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
    @media (max-width: 540px) {
      padding: 30px 20px;
    }
  }
  .vjs-tech {
    padding-bottom: 40px;
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
    /* z-index: -100; */
    background-size: cover;
    overflow: hidden;
  }
  .modelAll {
    position: relative;
    &:hover {
      .overhead {
        display: inline-block;
      }
    }
    // .video_height {
    //   min-height: 40vh;
    // }
  }
  .overhead {
    position: absolute;
    width: 100%;
    top: 20px;
    display: none;
    transition: 0.5s;
  }

  #videoIdentity {
    padding: 20px;
    h1 {
      margin-top: 20px;
      font-size: 25px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .playPause {
    position: absolute;
    background: #00838f;
    border: 0 !important;
    top: 45% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .relative_to {
    position: relative;
    width: 100%;
    z-index: 100;
    // display: none;
    // background: #f3f3f3;
    position: absolute;
    margin: 30px 0;
    top: 0;
    height: 400px !important;
    width: 100% !important;
  }

  // @media (min-width: 1204px) {
  //   .video_height {
  //     min-height: 70vh !important;
  //   }
  // }
`;
let HandleVideoPlayer = styled.section`
  position: relative;
  background: var(--White);
  overflow: hidden;
  margin-bottom: 70px;
  @media (min-width: 1204px) {
    padding: 25px 20px;
    padding-bottom: 0;
  }
  .vjs-big-play-button {
    background: #00838f;
    border: 0 !important;
    top: 45% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .vjs-menu-content {
    background: #00838f !important;

    li {
      color: var(--White);
      color: white !important;
    }
    .vjs-menu-item vjs-selected {
      color: black !important;
    }
  }
  .video-player-dimensions {
    // height: auto !important;
    // width: 100% !important;
  }
  .trackPre {
    position: relative;

    .controls {
      // background: yellow;
      padding: 0 20px;
      display: flex;
      position: absolute;
      top: 150px;
      width: 100%;
      right: 0;
      justify-content: space-between;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
      }
    }
  }
  .vjs-play-progress {
    background: #00838f;
  }
  .vjs-control-bar {
    background: transparent;
    box-shadow: rgb(0 0 0 / 35%) 0px -43px 13px -28px inset;
  }

  .outlined {
    background: none !important;
  }
`;
