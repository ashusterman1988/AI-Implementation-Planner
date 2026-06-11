import React from "react";
import { createRoot } from "react-dom/client";
import ImplementationPlanGenerator from "./ImplementationPlanGenerator.jsx";

// Note: window.storage (saved plans) and the proxied Claude API endpoint are
// provided by the claude.site runtime. Running locally, saved plans are
// skipped gracefully and generation requires your own Anthropic API key
// behind a backend proxy. See README.
if (typeof window.storage === "undefined") {
  window.storage = {
    async get() { throw new Error("storage unavailable locally"); },
    async set() { return null; },
    async delete() { return null; },
    async list() { return { keys: [] }; },
  };
}

createRoot(document.getElementById("root")).render(<ImplementationPlanGenerator />);
