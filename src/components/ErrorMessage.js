import React, { useEffect, useState } from "react";

const ErrorMessage = ({ blogs }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!actors || actors.length === 0) {
      setErrorMessage("There are no blogs available right now. Please check back in a few minutes.");
    } else {
      setErrorMessage("");
    }
  }, [actors]);

  return <section className="error">{errorMessage && <p>{errorMessage}</p>}</section>;
};

export default ErrorMessage;