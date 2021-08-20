import PropTypes from "prop-types";
import React, { useReducer } from "react";
import styled from "styled-components";
import AccordionHeader from "./AccordionHeader";
import AccordionParagraph from "./AccordionParagraph";
import { color } from "../global/styles";

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 500px;
  background-color: white;
  border-bottom: 1px solid ${color.gray10};
`;

const actionTypes = { simple: "simple", controlled: "controlled" };

function reducer(openIndexes, action) {
  let { payload } = action;

  switch (action.type) {
    case actionTypes.simple: {
      return openIndexes.includes(payload)
        ? openIndexes.filter((i) => i !== payload)
        : [...openIndexes, payload];
    }
    case actionTypes.controlled: {
      return openIndexes.includes(payload) ? [] : [payload];
    }
    default: {
      console.log(`There is no action of ${action.type}`);
    }
  }
}

export default function Accordion({ type }) {
  const [openIndexes, dispatch] = useReducer(reducer, [0]);

  return (
    <>
      <StyledAccordion>
        <AccordionHeader
          onClick={() => dispatch({ type: type, payload: 1 })}
          isOpen={openIndexes.includes(1)}
        >
          Header
        </AccordionHeader>
        <AccordionParagraph isOpen={openIndexes.includes(1)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et
          commodi provident id voluptatum eos deserunt alias, delectus ea
          repellendus.
        </AccordionParagraph>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionHeader
          onClick={() => dispatch({ type: type, payload: 2 })}
          isOpen={openIndexes.includes(2)}
        >
          Header
        </AccordionHeader>
        <AccordionParagraph isOpen={openIndexes.includes(2)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et
          commodi provident id voluptatum eos deserunt alias, delectus ea
          repellendus.
        </AccordionParagraph>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionHeader
          onClick={() => dispatch({ type: type, payload: 3 })}
          isOpen={openIndexes.includes(3)}
        >
          Header
        </AccordionHeader>
        <AccordionParagraph isOpen={openIndexes.includes(3)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et
          commodi provident id voluptatum eos deserunt alias, delectus ea
          repellendus.
        </AccordionParagraph>
      </StyledAccordion>
    </>
  );
}

Accordion.propTypes = {
  type: PropTypes.oneOf(["controlled", "simple"]),
};
