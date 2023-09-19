import React from "react";

function ScrollUpFunction() {
  const handleButtonClick = () => {
    const scrollToSection = document.getElementById("scrollToSection");
    if (scrollToSection) {
      scrollToSection.scrollIntoView({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <button
      type="button"
      class="btn btn-light btn-floating btn-lg"
      id="btn-back-to-top"
      onClick={handleButtonClick}
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollUpFunction;
