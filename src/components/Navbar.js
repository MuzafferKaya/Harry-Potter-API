import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();
  const activeTabClass =
    "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  const deActiveTabClass =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTab("/");
        break;
      case "/home":
        setActiveTab("/home");
        break;
      case "/books":
        setActiveTab("/books");
        break;
      case "/characters":
        setActiveTab("/characters");
        break;
      case "/movies":
        setActiveTab("/movies");
        break;
      case "/potions":
        setActiveTab("/potions");
        break;
      case "/spells":
        setActiveTab("/spells");
        break;
      case "/favorites":
        setActiveTab("/favorites");
        break;
      default:
        setActiveTab("/");
        break;
    }
  }, [location]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PotterDB
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {" "}
              <li>
                {" "}
                <Link
                  to={"/home"}
                  className={
                    activeTab == "/home" ? activeTabClass : deActiveTabClass
                  }
                >
                  {" "}
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/books"}
                  className={
                    activeTab == "/books" ? activeTabClass : deActiveTabClass
                  }
                >
                  {" "}
                  Books{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/characters"}
                  className={
                    activeTab == "/characters"
                      ? activeTabClass
                      : deActiveTabClass
                  }
                >
                  {" "}
                  Characters{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/movies"}
                  className={
                    activeTab == "/movies" ? activeTabClass : deActiveTabClass
                  }
                >
                  {" "}
                  Movies{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/potions"}
                  className={
                    activeTab == "/potions" ? activeTabClass : deActiveTabClass
                  }
                >
                  {" "}
                  Potions{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/spells"}
                  className={
                    activeTab == "/spells" ? activeTabClass : deActiveTabClass
                  }
                >
                  {" "}
                  Speels{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to={"/favorites"}
                  className={
                    activeTab == "/favorites"
                      ? activeTabClass
                      : deActiveTabClass
                  }
                >
                  {" "}
                  Favorites{" "}
                </Link>{" "}
              </li>{" "}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default React.memo(NavBar);
