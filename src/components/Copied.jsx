import React, { useState } from "react";
import styled from "styled-components";
import CopiedClip from "../assets/svgs/copied.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
`;

const Text = styled.p`
  margin: 0;
`;

const CopyIcon = styled.i`
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    color: #0070f3;
  }z
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: 60px;
  background-color: #555;
  color: var(--White);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -30px;
  // opacity: 0;
  transition: opacity 0.3s;
`;

const ContainerWithTooltip = styled(Container)`
  border: var(--borderDefault);
  filter: drop-shadow(0px 7px 64px rgba(0, 0, 0, 0.07));
  border-radius: 5px;
  padding: 8px 15px;
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
  .copiedHello {
    position: relative;
  }
  span {
    cursor: pointer;
    margin-left: 30px;
    cursor: pointer;
    color: var(--Gunmetal);
  }
`;

const CopyToClipboard = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <ContainerWithTooltip>
      <Text>{text}</Text>
      <div className="copiedHello">
        <span className="material-symbols-outlined" onClick={handleCopyClick}>
          content_copy
        </span>{" "}
        {isCopied && <Tooltip>Copied!</Tooltip>}
      </div>
    </ContainerWithTooltip>
  );
};

export default CopyToClipboard;
