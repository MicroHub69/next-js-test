import React, { useState, useEffect } from "react";
import styled from "styled-components";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { fetchAPI, HOST_URL, reqOptions } from "../assets/js/helpFunction";
import Quiz from "./Quiz";
import VideoPlayer from "./VideoPlayer";

const PlayCustom = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [player, setPlayer] = useState(null);
  const [videos, setVideos] = useState([]);

  const reqOption = reqOptions("GET", null);
  useState(() => {
    fetchAPI(
      setVideos,
      HOST_URL() +
        "/api/v1/courses/courses/Getting-Started-with-Visual-Studio-Code/",
      reqOption,
      true
    );
  });

  // console.log(videos);

  useEffect(() => {
    if (props.stepContent) {
      const options = {
        techOrder: ["html5", "flash"],
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        sourceOrder: false,
        autoplay: false,
        controls: true,
        bigPlayButtonCentered: true,
        sources: [
          {
            type: "video/mp4",
            src: props.stepContent.video,
            withCredentials: true,
          },
        ],
      };

      if (player) {
        player.dispose();
      }

      if (!player) {
        const newPlayer = videojs("video-player", options);
        setPlayer(newPlayer);

        newPlayer.on("ended", () => {
          const nextIndex = (currentVideoIndex + 1) % videos.length;
          newPlayer.src(videos[nextIndex].src);
          newPlayer.play();
        });

        return () => {
          newPlayer.dispose();
        };
      } else {
        // Only update the source video when fetch new steps.
        player.options.sources[0].src = props.stepContent.video;
      }
    }
  }, [currentVideoIndex]);

  return (
    <div>
      {props.stepContent && (
        <VideoPlayer
          videos={videos}
          currentVideoIndex={currentVideoIndex}
          player={player}
          setCurrentVideoIndex={setCurrentVideoIndex}
          stepContent={props.stepContent}
        />
      )}

      <Quiz />
    </div>
  );
};

export default PlayCustom;

// const videos = [
//   {
//     id: 1,
//     src: "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/test/intro.mp4  ",
//     title: "Help Desk Operator",
//     steps: [{}, {}, {}, {}, {}],
//   },
//   {
//     id: 2,
//     src: "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/test/Borders.mp4",
//     title: "Account Representative IV",
//     steps: [{}, {}, {}],
//   },
//   {
//     id: 3,
//     src: "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/test/colors.mp4",

//     title: "Speech Pathologist",
//     steps: [{}, {}, {}, {}, {}],
//   },
//   {
//     id: 4,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJlSURBVDjLlZJJa5RBEIaf7q8nGceJRMkiKCJIEEVUXMYtp+gxKBIQXC4iIjl496IomJuiv0BQD0HBQyCHgCIqxn29CYqKGjWZaGRiJjNfd1d5mJhE8KANzdvVTT1db1Hm8p2xE6ocjiqLRYQoEESIUYiihCizdiQGJYo87jnQVgBwonq0q9DQxH+sk1ferP59dlGkCaDv7UWCBEIMeAn46Gc0hum3Y1t68D7WzwIoAPtWHvqn3ycqAR8iM4AoAPTeHfknwM4NC0hnA8IUAGBvewtXB4fZs611+u7ag2G6Ns/Eo6XKHxWYc/1DeqijmYEXY1gAYzAot18UaaiHchqYn6/j88gkxkI+lyBqGCtNcvP50CYXo6CASwy7C830PSqyq9DCwL2PdBSWs2tdnv4Hnzi+f8UfVi7dKiJiHlofBRVwFvqfFkmSmparnu/jAYDrT4anEysBSlUo/kgxRrA+CKpKJoHO9c1knaFzfTPWGhIFH4Wz3esQUaIoCULOCdVqldJEigtSa2JiDTdejgJw4+Uo2YylUvWcvvIeayBEQabsqioo5DKCDSHUemBhx5omXFLTIEo1BhKbwRiHIcGYBNSiavAhkKYB52PNwqoleb58n2RZ6xzeff3JeNmTMY7uzgaCpIAFBTVC1tVxpvcD30oTuBh18FTv67VplLk+RHyIxCBTfjMIk1x4doSm3BIMlmL5I4c3nseSpVxNcWcPrmj/28TtOX1fly6E1vw429cUaKxbBBZ+VBbRMjeQqwNnDEZV/zqyG7qvD7YtnrO1sb6RrJtHEI8RwWhETJlXH94yUvL8AgiPWj6e64RKAAAAAElFTkSuQmCC",
//     title: "Health Coach I",
//     steps: [{}, {}, {}],
//   },
//   {
//     id: 5,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEXSURBVDjLY/j//z8DJZiBLgZkz37Ynjrz4ReyDEideb89afrDf5ET7v4n2YCEqXf7qpY9/T9r76v/Xu03STMgasLteaVLHv+fufvl/6k7X/y3qrlCvAHBvTeXFC54ANbctv7p/95Nz/5rFZ0nzoCAzpuPsuc++D91x4v/jasf/y9aeP9/89rH/6VTTxJngGPDtc3xU+/879789H/5kgf/02fd+V+17OF/yZhjxBmgVXCaRT3v7BqP1mv/a1Y+/J824/b/woX3/osHHSAtECVjjqy0Lb/wP2/+3f+Zs+/8F3XfS3o0inntXWSeffJ/0tRb/0Ucdv4nKyEJW25ZYBh/5L+w5fb/ZCdlQYMNs4WMt/wfuMyEDwMA0Irn/pDRT58AAAAASUVORK5CYII=",
//     title: "Mechanical Systems Engineer",
//     steps: [{}, {}, {}],
//   },
//   {
//     id: 6,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpZNLTBNRFIb/edgWamkLsylqsaASIDUEBHfCBqohcWG6UIM7YmJMNG5cuKkudGEMYQeJYqMbCZGFYVHrStMYTIm1RU3amsgjQVQaHsXSztt7p7YqlpWT3JyZO+f/zn/OnWF0Xcf/XPzOjVgsFlQUZVCWZZ5EkGgsSZJonPD7/ecqAhKJhJ0IHjgcDr/ZXA2RiKBpMPwRl06nA+Fw6Cx5+hcQj8dPUrEgCPusVivmF5ZBq2uaDk3XCEiHSmCiKFZugSSH3G63sZHPFyAT8fvEWwLQyquv/5TRRkUA7dFkMiGbzRYrqypa29qN6vqv6nTYuzqgZJWIaBI9FGo9EZ8lUTWq03eugdM4xEax9NQ3K64ujx2+9GH8LwfFWelGMgW0eTuM6iUXzOI0jncLsLdeOZaZGb4bu3NkueNG+nnZQQlgQEhlKqL3qzXz+JJ6jI6D+2Fv7kNuMYQ9tuZah1ucCl1tHGJLgLJY/T04CnqYuo8GpQC7dwDq9idYhHrw1YCrp726qdU9ajigwyl9kdQybUGnELJ3re4mhM0w5PUFsFwGDJuDqSYDFLbxY0Xkyi3QU+A4rti3SqeuwSQu4YD2EuZaAla+g9U2ANYGXZaQnEgVPqayF0sOopFIpNvj8cBms8FStQk+8xp1+Tdo6PVBl16AUbcwN70Fc27lG8cwSH/OXr7wZH6KKVkfGRkZIKdxy+VydXoam1C/No76zhOQMqPgeTuSr2RMRqvQm31XY7Fy6Hm0tEV1zM6/MRAI9BPQvTMtSe9RXxeUjRnMhdbxbM6Br5qQDAaDLX/mM7v9ztHhrtt7a51D22u5fDq9ev38WHqyUt5PJr6PrWVr/2QAAAAASUVORK5CYII=",
//     title: "Registered Nurse",
//     steps: [{}],
//   },
//   {
//     id: 7,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACzSURBVCjPY/jPgB8yEKmg0aHxf93/6jPlR4vP5P/I+p9yFMOEuvP7/pedKerJ7cmYnNwTOx9DQaVB9/8J/3McILyw/VjcUFA//3/a/QQBPI5MOT/7f2QBHgWxCRHvg2bhVBAjEHY/8DaecAhd73/GswfCNvmPoSA4we+8x2kQywLoTP33aAqCDHzeu79xrLepN+83uq/3Xwvdm94Jrvsd9lvtN91vuF93v+Z+tX5S44ICBQA4egHkwuNCKQAAAABJRU5ErkJggg==",
//     title: "Nuclear Power Engineer",
//     steps: [{}, {}, {}],
//   },
//   {
//     id: 8,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLlZLNi1JhFMaHiP6AvN0Ls4vob2jauYiIFoGBtnFlG1fSws1gDBdXLhIhdaEuvILfjtfK0cyvRflBeHWUEBW1nHGKpmkcpWw+ani6r9DCutn0wuGFl/P8znPOeZcALP0ekUhE7vf7HR6PZ+ByuQZ2u91hsVjkUrl/PITDYbnP5xMajQb6/T46nQ5KpRJMJpNgNBrlkoB4PL7M8zwbCoWaXq93RMStVguVSgXlchmCICCXy8FgMDgkAdFolK1Wq+j1emi326jX6ygUCsjn80ilUkgkEigWi9Dr9ac6nY7TarUrc4BAINDsdruo1WpzQtEZRDiCwSDE1pDJZBCLxaDRaLg5gDispnhmvRKrJJFU/SUWBwqO4+B2u5HNZqFWq8dzAKfTyRIh6ZVAksnkrDpxkk6nIW4F4nxmrghMpVLNO7Barctms5m12Wx46bw23XRf/TF5JsP4qQwHT2QYRWXYW7+Ix6vXT5VKJadQKFYk1/g1x5z/kmUU0+otnHy04Hi4hu8HHD4n6elegr7/z38wyTA3xy+Y7mHvAb69UWDauI0PiSuQEkoCRil663CwhuMddlad3EfbD/F+4zIWAvaf0+dEm48+bdDYjdMYC3dn4snmvYViya9MYoe/NNx/fQdb69R4EKGYMwOGPHVhO0qt7r66gXdhKrJIKAkQq6nehqijflCmOov4ry38T/wEpFjkJMz8PioAAAAASUVORK5CYII=",
//     title: "Nurse",
//     steps: [{}, {}, {}],
//   },
//   {
//     id: 9,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF/SURBVDjLpZN/S8JgEMd9i1JURPSDIoIkS1FQI4iQgihStExrhGmydGObyZyyYRaybBRFQb/8vxcgBIF92275ApoHx7jjns/37p49LgCuQdzlXmEXd8RON1L4QPjM9NwbQtkXBE+eEWCe4D9+hC99j+XDO3j3b+FJ3CCcvu5a5wgQLXV6ceUT/3Xv3mWPAJayE5/fboAA4dw7nNjspmoDQqevlDAMA+12G61WC1/fP1BVFfV6HbIsUyyKIgRBAMdxVD8drf0BzIU5scl12QZY27ZM13VSbzQapFir1VCtViFJEsUsy6JQKCCfz1P9xFrFBlhX5cTGVyUb4D96oESz2SR1RVFIsVKpoFwuo1gsUpzNZsEwDDKZDNWPhQUb4D0wHHUwHCjZgKVEmxKaptHc/ZmtL8/zNLMVp1IpJJNJxGIxqh/yn9sAT1x31IHbx6L/FtiF3Sv6s+a2NMxE65jaUMwtX9CixiIiRkM8RoKc2XbRVGZhnrGcJcDAr3FQwC803UMOARws7QAAAABJRU5ErkJggg==",
//     title: "Senior Cost Accountant",
//     steps: [],
//   },
//   {
//     id: 10,
//     src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKYSURBVDjLnZPJT1NRFMb5G1wDHV5boNiqdHrvFYolCAtsGSSWKpMFKhYqlDI6oAEKaVJwCIgSphaKtLYWCgSNBgRjMNHoxsSFS3cmJmA0NMTw+R6JKKZl4eJL7sm953fOd3JPHIC4WMpcppG5SGnZc8ZjVVF6QLn975sDgfaZmvg71oRJZIRUYcuAnq/2KWroGfm3QwEn2YpLVPPvOD2oiqj9yq/mGznegl56mx6T7ZbY1M6YAM0CuZkxT0b2Wg6QW/SsApRXDsotR+d6E9Y/h9DuqoCuJq0lKoDxqU1/pITGR27mBU4h+GEcTz5OY+ClA5JbyahYzof/9TBO9B/FcWcqpA4xU3We3GJ87ntnfO5meinMvruNnqcmXA2XoDVcCc0wCYkzBaZpA7ILRJ/2O2B87jA+QT9UeDRe8svZYAG8b/txc6kc9mA+yqayYPQXwvdmBEOrA5B2p0BtFIYOWKCm5RukWwZyXIbA+0F0LpaiKaBHmVsLw4we99ccsM8a8GClF5JOMcQdou8prULrgRmQo7KI0VcE13MrGv06lE5kodhzGvdWu2GdKkTVWC4DcELcJkKyXbCb1EhAVM//M0DVUNqP2qAJd1baUDaZjTMTeXAttsPi0cM0mgvHvA0NkxYk2QRIrieOsDmEmXttH0DfVfSluSToWmpD8bgOroUOWNw6VI7koGfOBuq6EqLLTNU6ojrmP5D1HVsjmrkYezGIrlA9LjKgnrlGXJlpgbCOD0EtD0QNN8I3cZqjAlhJr4rXpB1iNLhrYffUQWoT7yUKzbxqJlHLq0jc5JYmgHMunogKYJVqF7mTrPyfgktMRTMX/CrOq1gLF3fYNrLiX+Bs8MoTwT2fQPwXgBXHGL+TaIjfinb3C7cscRMIcYL6AAAAAElFTkSuQmCC",
//     title: "Design Engineer",
//     steps: [{}, {}, {}, {}, {}],
//   },
// ];
