import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faBook, faPencilAlt, faSearch } from "@fortawesome/free-solid-svg-icons"
import noIdeaDogIcon from '../images/noideadog-icon.svg'

const Nav = () => {
  return (
    <nav className="nav">
      <a className="font-bold p-2 pt-3 hover:bg-purple-700" href="/">
        <img className="w-16 inline-block md:pr-4" src={noIdeaDogIcon}/>
        <span className="hidden md:inline-block">Impostor Syndrome</span>
      </a>
      <span className="flex-grow" />
      <a
        className="nav-link"
        href="/share-your-story"
        title="Share your story"
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={faPencilAlt}/>
        </span>
      </a>
      <a
        className="nav-link"
        href="/resources"
        title="Resources"
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={faBook}/>
        </span>
        <span className="hidden md:block">Resources</span>
      </a>
      <a
        className="nav-link"
        href="/contact"
        title="Contact"
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={faAt}/>
        </span>
        <span className="hidden md:block">Contact</span>
      </a>
      <a
        className="nav-link"
        href="/search"
        title="Search"
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={faSearch}/>
        </span>        
        <span className="hidden md:block">Search</span>
      </a>
    </nav>
  )
}

export default Nav
