import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import CopyToClipboard from "./Copied";

const VideoTab = (props) => {
  const [selectedTab, setSelectedTab] = useState("teacher's note");

  //   const history = withRouter();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    // window.location.href = `?${tab.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <Instruction>
      <TabsContainer>
        <Tab
          active={selectedTab === "teacher's note"}
          onClick={() => handleTabClick("teacher's note")}
        >
          <span>Teachers Note</span>
        </Tab>
        <Tab
          active={selectedTab === "questions"}
          onClick={() => handleTabClick("questions")}
        >
          Questions
        </Tab>
        <Tab
          active={selectedTab === "video transcription"}
          onClick={() => handleTabClick("video transcription")}
        >
          Video Transcription
        </Tab>
        <Tab
          className="ddnd"
          active={selectedTab === "downloads"}
          onClick={() => handleTabClick("downloads")}
        >
          Downloads
          <span>4</span>
        </Tab>
      </TabsContainer>
      <TabContent>
        {selectedTab === "teacher's note" && (
          <section className="teachersNote">
            <p>{props.stepContent.description}</p>
            {/* <h3>Import Pakages</h3>
            <CopyToClipboard text="pip install rave_python" />
            <h3>Initialization</h3>
            <h6>To instantiate in sandbox:</h6>
            <p>
              To use Rave, instantiate the Rave class with your public key. We
              recommend that you store your secret key in an environment
              variable named, <b>RAVE_SECRET_KEY. </b> Instantiating your rave
              object is therefore as simple as:
            </p>
            <CopyToClipboard text='rave = Rave("YOUR_PUBLIC_KEY")' />
            <h6>To instantiate without environment variables (Sandbox):</h6>
            <p>
              If you choose not to store your secret key in an environment
              variable, we do provide a usingEnv flag which can be set to False,
              but please be warned, do not use this package without environment
              variables in production
            </p>

            <CopyToClipboard text='rave = Rave("YOUR_PUBLIC_KEY", "YOUR_SECRET_KEY", usingEnv = False)' /> */}
          </section>
        )}
        {selectedTab === "questions" && <CommentSection />}
        {selectedTab === "video transcription" && (
          <section className="subtitle">
            <div className="eachsub">
              <p>
                Suscipit at molestie et amet tortor, risus nibh. Pellentesque
                dignissim donec cras libero, sem lorem. Quam vitae libero
                elementum sed. Mauris et velit, adipiscing urna nisi.{" "}
              </p>
              <span>00 : 02</span>
            </div>
            <div className="eachsub">
              <p>
                Suscipit at molestie et amet tortor, risus nibh. Pellentesque
                dignissim donec cras libero, sem lorem. Quam vitae libero
                elementum sed. Mauris et velit, adipiscing urna nisi. Suscipit
                at molestie et amet tortor, risus nibh. Pellentesque dignissim
                donec cras libero, sem lorem. Quam vitae libero elementum sed.
                Mauris et velit, adipiscing urna nisi.
              </p>
              <span>00 : 06</span>
            </div>
            <div className="eachsub">
              <p>
                Suscipit at molestie et amet tortor, risus nibh. Pellentesque
                dignissim donec cras libero, sem lorem. Quam vitae libero
                elementum sed. Mauris et velit, adipiscing urna nisi. Suscipit
                at molestie et amet tortor, risus nibh. Pellentesque dignissim
                donec cras libero, sem lorem. Quam vitae libero elementum sed.
                Mauris et velit, adipiscing urna nisi.
              </p>
              <span>00 : 00</span>
            </div>
          </section>
        )}
        {selectedTab === "downloads" && (
          <section className="cont_downloads">
            <div className="each_conte zip_file">
              <h4>Zip</h4>
              <p>
                Download zip source file here, open and code alonge with the
                instructor.
              </p>
            </div>
            <div className="each_conte pdf_file">
              <h4>PDF</h4>
              <p>
                Download zip source file here, open and code alonge with the
                instructor.
              </p>
            </div>
            <div className="each_conte img_file">
              <h4>Image</h4>
              <p>
                Download zip source file here, open and code alonge with the
                instructor.
              </p>
            </div>
            <div className="each_conte video_file">
              <h4>Video</h4>
              <p>
                Download zip source file here, open and code alonge with the
                instructor.
              </p>
            </div>
          </section>
        )}
      </TabContent>
    </Instruction>
  );
};

export default VideoTab;

const Instruction = styled.section`
  max-width: 800px;
  .ddnd {
    position: relative;
    span {
      background-color: var(--DarkCyan);
      width: 25px;
      height: 25px;
      color: var(--White);
      border-radius: 50%;
      top: -15px;
      position: absolute;
      right: 0;
      align-items: center;
      //   display: ;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
  .subtitle {
    border-top: var(--borderDefault);
    margin-top: 20px !important;
    padding-top: 20px !important;
    .eachsub {
      margin-bottom: 30px;
      color: var(--Gunmetal);
      @media (min-width: 990px) {
        display: flex;
        justify-content: space-between;
        p {
          width: 80%;
        }
        span {
          margin-top: 10px;
        }
      }
    }
  }
  .cont_downloads {
    .each_conte {
      padding-left: 40px;
      border-bottom: var(--borderDefault);
      padding-bottom: 10px;
      padding-top: 20px;
      position: relative;
      h4 {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;
const TabsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  font-family: var(--Nunito);
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => (props.active ? "var(--DarkCyan)" : "var(--Gunmetal)")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "var(--DarkCyan)" : "transparent")};
  margin-right: 1px;
  &:last-child {
    margin-right: 0;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  font-family: var(--Nunito);
  margin-bottom: 50px;
  h3 {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  h6 {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
