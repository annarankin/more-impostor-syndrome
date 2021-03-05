import * as React from "react";
import Nav from "../components/Nav";
import "./index.css";
import noideadog from "../images/noideadog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faSearch } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="container py-4 px-8 mx-auto bg-white shadow-md min-h-full">
        <div className="text-center">
          <img
            className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded-full"
            src={noideadog}
            alt="Illustration of a dog using a computer"
          />
          <h1 className="py-4 md:py-8 mb-6 text-2xl md:text-5xl">
            <span role="img" aria-label="sparkle emoji">
              ✨
            </span>
            <span className="bg-pink-100 border-b-8 border-pink-400 shadow-md p-2 md:p-4">
              Welcome, fellow impostors!
            </span>
            <span role="img" aria-label="sparkle emoji">
              ✨
            </span>
          </h1>

          <div className="grid md:grid-cols-2 justify-items-stretch md:space-x-4">
            <div className="bg-yellow-100 text-left shadow-md py-2 px-4 md:p-6">
              <h2 className="py-3 md:py-6 text-center text-xl sm:text-2xl md:text-3xl">
                <span className="bg-white shadow-md border-b-8 border-pink-400 p-2 md:p-4">
                  What is this site?
                </span>
              </h2>
              <p className="py-3">
                This website exists to highlight stories of people in technical
                fields who've dealt with{" "}
                <a className="underline" href="https://en.wikipedia.org/wiki/Impostor_syndrome">
                  impostor syndrome
                </a>{" "}
                at all levels of experience.
              </p>
              <p className="pt-3 pb-1">I hope to provide:</p>

              <ul className="list-disc list-inside pb-3 pt-1">
                <li>Confirmation that you are not alone</li>
                <li>Resources to help you cope</li>
                <li>Space for you to share your own experience</li>
              </ul>

              <p className="text-2xl text-purple-800 italic text-center py-6">
                Know that you're not alone, and you belong in tech.
              </p>
            </div>

            <div className="bg-purple-100 text-left shadow-md p-6 flex flex-col items-center justify-center">
              <a href="/share-your-story">
                <h2 className="btn purple">
                  <span className="pr-4"><FontAwesomeIcon icon={faPencilAlt}/></span>
                  Share your experience!
                </h2>
              </a>
              <h2>
                <a href="/search">
                  <h2 className="btn pink">
                    <span className="pr-4"><FontAwesomeIcon icon={faSearch}/></span>
                    Explore stories
                  </h2>
                </a>
              </h2>
            </div>
          </div>

          <p className="italic py-12">
            Made with{" "}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>{" "}
            by Anna{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
