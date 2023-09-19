//Outsource JS library
import React, { useContext, useState } from "react";
//Internal JS
import xpic from "../../assets/images/twitterX.jpeg";
//Components
import Firstpage from "./FirstPage";
import Login from "./Login";
import RegisterUser from "./Register";
//Context
import { EntryPageNavContext } from "../../context/EntryPageNavContext";
//Pages
//CSS Imports

function EntryPage() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const { entryPageNum } = useContext(EntryPageNavContext);

  return (
    <>
      <section className="entryPageMainContainer">
        <section
          className={
            isActive
              ? "entryPageMainLeftContainer active"
              : "entryPageMainLeftContainer"
          }
        >
          Twitter
        </section>
        <section
          className={
            isActive
              ? "entryPageMainRightContainer active"
              : "entryPageMainRightContainer"
          }
        >
          <div class="icon" onClick={toggleActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-three-dots spinner-border"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          {entryPageNum === 1 ? (
            <Login />
          ) : entryPageNum === 2 ? (
            <RegisterUser />
          ) : (
            <Firstpage isActive={isActive} />
          )}
        </section>
      </section>
      <footer className="entryPageFooter">
        <nav>
          <a className="footerLink" href="mailto:serkantrmn85@gmail.com">
            Contact to Developer{" "}
          </a>
          <a
            className="footerLink"
            href="https://serkan-toraman.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer Website{" "}
          </a>
        </nav>
      </footer>
    </>
  );
}

export default EntryPage;
