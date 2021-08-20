import React, { createPortal, useState, useEffect } from 'react'

export const ToastProvider = ({ domNode, children }) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    createPortal(children, domNode);
  });

  return <Button onClick={setOn((on) => !on)}>Make Toast</Button>;
};

<ToastProvider>
  <Toast />
</ToastProvider>;
