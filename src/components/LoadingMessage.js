import React from "react";
import { useState, useEffect } from "react";
const LoadingMessage = ({ actors }) => {
  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    if (!actors) {
      setLoadingMessage("Loading...");
    } else {
      setLoadingMessage("");
    }
  }, [actors]);

  return (
    <section className="loading">
      {loadingMessage && <p>{loadingMessage}</p>}
    </section>
  );
};

export default LoadingMessage;
