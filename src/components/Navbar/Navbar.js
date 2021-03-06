import "./Navbar.scss"
import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { useOnClickOutside } from "./ClickOutsideHook"
import { genreGridActive } from "../../redux/genres/genres.actions"

//language
import { useContext } from "react"
import { LangContext } from "../../redux/languages/languages.context"
import { AccountContext } from "../../redux/account/account.context"

//icons
import { NetflixLogo } from "../Logos/NetflixLogo"
import { IconNotification } from "../Icons/IconNotification"
import { IconCaretDown } from "../Icons/IconCaretDown"
import { IconPencil } from "../Icons/IconPencil"
import { IconAccount } from "../Icons/IconAccount"
import { IconQuestion } from "../Icons/IconQuestion"

import AccountMenu from "../AccountMenu/AccountMenu"

import Jens from "../../assets/images/accounts/jens.jpg"
import Zico from "../../assets/images/accounts/zico.jpg"
import Michael from "../../assets/images/accounts/michael.jpg"
import Roibin from "../../assets/images/accounts/roibin.png"
import Fatos from "../../assets/images/accounts/fatos.webp"
import Janou from "../../assets/images/accounts/janou.jpg"
import Miki from "../../assets/images/accounts/miki.jpg"
import Alfijah from "../../assets/images/accounts/alfijah.jpg"
import Wesley from "../../assets/images/accounts/wesley.jpg"
import Carolyn from "../../assets/images/accounts/carolyn.webp"
import { useDispatch } from "react-redux"

const Navbar = () => {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const node = useRef()
  const point = useRef()
  const notificationsElement = useRef()
  const { language } = useContext(LangContext)
  const currentAccount = useContext(AccountContext)

  const allAccounts = [
    { name: "Alfijah", source: Alfijah },
    { name: "Zico", source: Zico },
    { name: "Michael", source: Michael },
    { name: "Miki", source: Miki },
    { name: "Wesley", source: Wesley },
    { name: "Janou", source: Janou },
    { name: "Carolyn", source: Carolyn },
    { name: "Roibin", source: Roibin },
    { name: "Fatos", source: Fatos },
    { name: "Jens", source: Jens },
  ]
  const profilePic = allAccounts.find((e) => e.name === currentAccount.account)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const submenu = () => {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }
  const accountMenu = () => {
    !isClicked ? setIsClicked(true) : setIsClicked(false)
  }
  const notificationsDropdown = () => {
    !notifications ? setNotifications(true) : setNotifications(false)
  }

  let activeClassName = "active-bold"

  useOnClickOutside(node, () => setDropdown(false))
  useOnClickOutside(point, () => setIsClicked(false))
  useOnClickOutside(notificationsElement, () => setNotifications(false))

  return (
    <header>
      <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
        <NavLink to="/" className="logo-link">
          <picture>
            <NetflixLogo />
          </picture>
        </NavLink>

        <ul className="primary-nav" ref={node}>
          <li className="navigation-menu" onClick={() => submenu()}>
            <button className="menu-trigger">
              {language === "EN" ? "Browse" : "Bladeren"}
            </button>

            {dropdown ? (
              <div className="sub-menu ">
                <div className="callout-arrow"></div>
                <div className="topbar"></div>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item ">
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      {language === "EN" ? "Home" : "Homepagina"}
                    </NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink
                      to="/genre"
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      Genres
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
          <li className="navigation-tab current active">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {language === "EN" ? "Home" : "Homepagina"}
            </NavLink>
          </li>
          <li className="navigation-tab">
            <NavLink
              to="/genre"
              onClick={() => {
                dispatch(genreGridActive(false))
              }}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Genres
            </NavLink>
          </li>
        </ul>

        <div className="secondary-nav">
          <div className="nav-element">
            <div className="searchBox">
              <SearchBar />
            </div>
          </div>
          <div className="nav-element">
            <span className="notifications-element" ref={notificationsElement}>
              <button
                className="notifications-menu"
                onClick={() => notificationsDropdown()}
              >
                <div className="notifications-icon">
                  <IconNotification />
                </div>
                {notifications ? <div className="callout-arrow"></div> : ""}
              </button>
              {notifications ? (
                <div className="sub-menu">
                  <div className="topbar"></div>
                  <ul className="sub-menu-list">
                    <li className="sub-menu-item">
                      <ul className="notifications-container">
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1494342311068-0acb56cfa61d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                  alt="cat-project"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  {language === "EN"
                                    ? "New Arrival"
                                    : "Nieuw op Netflix"}
                                </div>
                                <div className="notifications-body">
                                  The Cat Project
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim">
                                    {" "}
                                    {language === "EN"
                                      ? "2 days ago"
                                      : "2 dagen geleden"}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image ">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                  alt="doggo"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  {language === "EN"
                                    ? "New Arrival"
                                    : "Nieuw op Netflix"}
                                </div>
                                <div className="notifications-body">
                                  {language === "EN" ? "Season 5" : "Seizoen 5"}
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim">
                                    {language === "EN" ? "Today" : "Vandaag"}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                                  alt="monkey"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  {language === "EN"
                                    ? "Now Available"
                                    : "Nu te zien"}
                                </div>
                                <div className="notifications-body">
                                  MonkeyTime
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim">
                                    {" "}
                                    {language === "EN"
                                      ? "4 days ago"
                                      : "4 dagen geleden"}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </span>
          </div>
          <div className="nav-element" ref={point}>
            <div className="account-menu-item" onClick={() => accountMenu()}>
              <button className="account-dropdown-button">
                <NavLink to="" className="account-link">
                  <span className="profile-link">
                    <img
                      src={
                        currentAccount.account === "defaultAccount"
                          ? "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          : profilePic.source
                      }
                      alt={currentAccount.account}
                      className="profile-icon"
                    />
                  </span>
                </NavLink>
                <span className={isClicked ? "caret rotate" : " caret"}>
                  <IconCaretDown />
                </span>
              </button>
              {isClicked ? (
                <div className="account-drop-down ">
                  <div className="callout-arrow"></div>

                  <ul className="sub-menu-list profiles">
                    <AccountMenu />
                    <li className="sub-menu-item profile-link">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconPencil />
                        <span>
                          {language === "EN"
                            ? "Manage Profiles"
                            : "Profielen beheren"}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="sub-menu-list responsive-links"></ul>

                  <ul className="account-links sub-menu-list">
                    <li className="sub-menu-item">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconAccount />
                        <span>{language === "EN" ? "Account" : "Account"}</span>
                      </NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconQuestion />
                        <span>
                          {language === "EN" ? "Help Centre" : "Helpcentrum"}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="account-links sub-menu-list sign-out-links">
                    <li className="sub-menu-item">
                      <NavLink to="" className="sub-menu-link ">
                        {language === "EN"
                          ? "Sign out of Netflix"
                          : "Uitloggen"}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
