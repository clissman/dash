import Accordion from "./Accordion";
import AccordionHeader from "./AccordionHeader";
import AccordionParagraph from "./AccordionParagraph";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { AccordionHeader, AccordionParagraph },
  decorators: [
    (story) => (
      <div style={{ height: "500px", background: "#F1F3F4", padding: "32px" }}>
        {story()}
      </div>
    ),
  ],
};

export const SimpleAccordion = { args: { type: "controlled" } };
