import * as React from "react";

function SvgVisibleOn(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 12a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5c-3.73 0-6.594-1.867-8.488-3.762a15.374 15.374 0 01-2.17-2.723 9.522 9.522 0 01-.58-1.066 4.192 4.192 0 01-.17-.435A1.71 1.71 0 01.5 12c0-.209.056-.401.092-.514.044-.137.103-.284.17-.435.138-.304.333-.667.58-1.066a15.374 15.374 0 012.17-2.723C5.406 5.367 8.27 3.5 12 3.5c3.73 0 6.594 1.867 8.488 3.762.95.95 1.677 1.926 2.17 2.723.247.399.442.762.58 1.066.067.15.126.298.17.435.036.113.092.305.092.514 0 .209-.056.401-.092.514a4.183 4.183 0 01-.17.435 9.525 9.525 0 01-.58 1.066 15.382 15.382 0 01-2.17 2.723C18.594 18.633 15.73 20.5 12 20.5zm-9.414-8.374A3.232 3.232 0 012.532 12c.014-.036.032-.078.054-.126.094-.21.245-.496.456-.836.42-.68 1.053-1.531 1.884-2.362C6.594 7.008 8.979 5.5 12 5.5c3.02 0 5.406 1.508 7.074 3.176a13.372 13.372 0 011.884 2.362c.21.34.362.627.456.836.022.048.04.09.054.126a3.153 3.153 0 01-.054.126c-.094.21-.245.496-.456.836a13.37 13.37 0 01-1.884 2.362C17.406 16.992 15.021 18.5 12 18.5c-3.02 0-5.406-1.508-7.074-3.176a13.373 13.373 0 01-1.884-2.362 7.576 7.576 0 01-.456-.836z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVisibleOn;
