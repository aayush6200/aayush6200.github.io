import React, { useState, useEffect } from "react";
import { IconButton, Tooltip, styled } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import { FaRocketchat } from "react-icons/fa";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  color: white;
  size: 2.5rem;
  color: blue;
  padding: 10px;
  z-index: 1000; // Ensure the button is above other elements
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;

const ChatbotIcon = styled(FaRocketchat)`
  background-color: #007bff;
  position: absolute;
  font-size: 10rem;
  padding: 5px;

  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
  cursor: pointer;
  &:hover {
    color: rgb(57, 134, 250);
  }
`;

function ScrollToTop() {
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleScrollToTopClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  const handleChatbotClick = () => {
    // Placeholder for chatbot click handling logic
    setIsChatbotOpen(!isChatbotOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {shouldRender && (
        <Tooltip
          title="Scroll to top"
          placement="top"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}>
          <StyledIconButton
            aria-label="scroll to top"
            onClick={handleScrollToTopClick}
            style={{ left: "20px" }}>
            <StyledArrowIcon fontSize={40} />
          </StyledIconButton>
        </Tooltip>
      )}
      <Tooltip title="Chatbot functionality will be added soon">
        <StyledIconButton
          aria-label="open chatbot"
          onClick={handleChatbotClick}
          style={{ right: "20px" }}>
          <FaRocketchat fontSize={40} />
        </StyledIconButton>
      </Tooltip>
    </>
  );
}

export default ScrollToTop;
