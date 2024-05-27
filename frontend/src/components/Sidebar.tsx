import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo-no-bg.png';
import SidebarLinkGroup from './SidebarLinkGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null
      ? false
      : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-4xl">
              <span className="text-white">BOOK</span>
              <span className="text-secondary">HIVE</span>
            </h1>
          </div>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
              MENU
            </h3>
            <hr className="my-6 border-gray dark:border-meta-4" />
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('dashboard') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20" height="20" viewBox="0 0 35 35" data-name="Layer 2" id="e73e2821-510d-456e-b3bd-9363037e93e3"><path d=
                  "M11.933,15.055H3.479A3.232,3.232,0,0,1,.25,11.827V3.478A3.232,3.232,0,0,1,3.479.25h8.454a3.232,3.232,0,0,1,3.228,3.228v8.349A3.232,3.232,0,0,1,11.933,15.055ZM3.479,2.75a.73.73,0,0,0-.729.728v8.349a.73.73,0,0,0,.729.728h8.454a.729.729,0,0,0,.728-.728V3.478a.729.729,0,0,0-.728-.728Z"/>
                  <path d="M11.974,34.75H3.52A3.233,3.233,0,0,1,.291,31.521V23.173A3.232,3.232,0,0,1,3.52,19.945h8.454A3.232,3.232,0,0,1,15.2,23.173v8.348A3.232,3.232,0,0,1,11.974,34.75ZM3.52,22.445a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728
                  -.728Z"/><path d="M31.522,34.75H23.068a3.233,3.233,0,0,1-3.229-3.229V23.173a3.232,3.232,0,0,1,3.229-3.228h8.454a3.232,3.232,0,0,1,3.228,3.228v8.348A3.232,3.232,0,0,1,31.522,34.75Zm-8.454-12.3a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,
                  0,0,0-.728-.728Z"/><path d="M27.3,15.055a7.4,7.4,0,1,1,7.455-7.4A7.437,7.437,0,0,1,27.3,15.055Zm0-12.3a4.9,4.9,0,1,0,4.955,4.9A4.935,4.935,0,0,0,27.3,2.75Z"/></svg>
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Borrowing Management --> */}
              <li>
                <NavLink
                  to="/admin/borrowing-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('borrowing-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" version="1.0" width="20"
                  height="20" viewBox="0 0 51.000000 51.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,51.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M296 468 c-11 -15 -12 -26 -5 -40 13 -24 55 -23 69 1 13 25 13 27 -6 45 -21 22 -40 20 -58 -6z"/>
                  <path d="M76 448 c-9 -5 -16 -20 -16 -33 0 -42 60 -57 74 -18 15 38 -22 71 -58 51z"/>
                  <path d="M176 384 c-4 -15 -2 -32 5 -40 7 -8 8 -18 4 -22 -4 -4 -14 3 -22 16 -12 18 -25 22 -64 22 -30 0 -53 -6 -63 -15 -20 -20 -39 -84 -34 -113 4 -26 22 -34 25 -12 13 97 18 85 23 -50 4 -120 8 -145 20 -145 12 0 16 19 21 90 l5 90 2 -80 c2 -87 11 -111 36 -102 14 5 16 27 16 140 l0 134 23 -4 c28 -6 41 9 54 64 9 34 8 43 -4 47 -28 11 -41 6 -47 -20z"/>
                  <path d="M274 392 c-19 -12 -34 -49 -34 -81 0 -29 -2 -31 -40 -31 -22 0 -40 -4 -40 -10 0 -6 65 -10 176 -10 157 0 175 2 170 16 -3 9 -6 18 -6 20 0 2 -13 4 -30 4 -16 0 -30 -4 -30 -10 0 -22 -25 -8 -26 15 -3 47 -14 74 -35 86 -17 8 -23 7 -35 -8 -13 -17 -13 -17 -14 2 -1 19 -2 19 -9 1 -7 -18 -8 -18 -14 -3 -7 18 -16 21 -33 9z m83 -48 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-81 -62 c-11 -10 -14 3 -8 33 l7 30 3 -28 c2 -16 1 -31 -2 -35z m114 18 c0 -11 -4 -20 -9 -20 -5 0 -7 9 -4 20 3 11 7 20 9 20 2 0 4 -9 4 -20z"/>
                  <path d="M436 334 c-9 -24 -9 -24 27 -24 26 0 33 4 34 20 1 16 -4 20 -27 20 -16 0 -30 -7 -34 -16z"/>
                  </g>
                  </svg>
                  Borrowings
                </NavLink>
              </li>
              {/* <!-- Menu Item Borrowing Management --> */}

              {/* <!-- Menu Item Book Management --> */}
              <li>
                <NavLink
                  to="/admin/book-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('book-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                  Books
                </NavLink>
              </li>
              {/* <!-- Menu Item Book Management --> */}

              {/* <!-- Menu Item Book Detail Management --> */}
              <li>
                <NavLink
                  to="/admin/book-detail-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('book-detail-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg xmlns
                  ="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Layer_1"  width="20"
                  height="20" fill='#ffffff' viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <g>
                    <path fill="" d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413   C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.
                    274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688   l14.467,
                    4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-
                    0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27   c-0.092,0-0.184-
                    0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688   l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.
                    274C24.304,19.714,23.903,20,23.469,20c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688   l14.467,4.
                    134C24.273,18.19,24.581,18.744,24.43,19.274z"/>
                    <path fill="" d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038   l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.
                    424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688   c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.
                    726C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41   c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688   C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27   c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688   C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20   c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688   C55.581,15.122,55.273,15.676,54.742,15.828z"/>
                    <polygon fill="" points="31,53.77 0,45.564 0,47.495 31,55.701  "/>
                    <polygon fill="" points="33,55.701 64,47.495 64,45.564 33,53.77  "/>
                    <path fill="" d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435   c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899   C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"/>
                    </g>
                  </svg>
                  Books Detail
                </NavLink>
              </li>
              {/* <!-- Menu Item Book Detail Management --> */}

              {/* <!-- Menu Item Stock Management --> */}
              <li>
                <NavLink
                  to="/admin/stock-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('stock-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg>
                  Stocks
                </NavLink>
              </li>
              {/* <!-- Menu Item Stock Management --> */}

              {/* <!-- Menu Item Category Management --> */}
              <li>
                <NavLink
                  to="/admin/category-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('category-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 
                  64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 
                  160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 
                  0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  Categories
                </NavLink>
              </li>
              {/* <!-- Menu Item Category Management --> */}

              {/* <!-- Menu Item Author Management --> */}
              <li>
                <NavLink
                  to="/admin/author-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('author-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M90 195 c-15 -18 -10 -45 13 -59 34 -22 73 27 47 59 -16 19 -44 19 -60 0z"/>
                  <path d="M40 135 c-7 -9 -10 -18 -7 -22 8 -7 37 15 37 28 0 14 -16 11 -30 -6z"/>
                  <path d="M58 84 c-16 -8 -28 -23 -28 -34 0 -17 7 -20 53 -20 44 0 58 4 77 26 21 21 22 27 10 34 -22 14 -81 11 -112 -6z"/>
                  <path d="M219 83 c-1 -4 -1 -12 0 -16 1 -5 -3 -5 -9 -2 -13 8 -60 -32 -60 -52 0 -17 11 -16 35 5 39 35 57 60 46 67 -6 3 -12 3 -12 -2z"/>
                  </g>
                  </svg>
                  Authors
                </NavLink>
              </li>
              {/* <!-- Menu Item Author Management --> */}

              {/* <!-- Menu Item Publisher Management --> */}
              <li>
                <NavLink
                  to="/admin/publisher-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('publisher-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M2640 3824 c0 -988 3 -1234 13 -1227 6 6 170 121 364 256 l352 247 288 -201 c158 -111 323 -226 366 -256 l77 -54 0 1235 0 1236 -730 0 -730 0 0 -1236z"/>
                  <path d="M540 2370 l0 -2310 2020 0 2020 0 0 2310 0 2310 -160 0 -160 0 -2 -1198 -3 -1197 -440 307 c-242 169 -445 306 -451 304 -6 -3 -208 -142 -448 -310 l-436 -305 0 1200 0 1199 -970 0 -970 0 0 -2310z"/>
                  </g>
                  </svg>
                  Publishers
                </NavLink>
              </li>
              {/* <!-- Menu Item Publisher Management --> */}

              {/* <!-- Menu Item Shelf Management --> */}
              <li>
                <NavLink
                  to="/admin/shelf-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('shelf-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" fill='#ffffff' id="Layer_1" data-name="Layer 1">
                  <defs>
                  <clipPath id="clip-path">
                  <rect class="cls-1" width="20" height="20"/>
                  </clipPath>
                  </defs>
                  <title>shelf</title>
                  <g class="cls-2">
                  <path d="M20.15,20.24H3.85a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h16.3a1,1,0,0,1,1,1V19.24A1,1,0,0,1,20.15,20.24Zm-15.3-2h14.3V4H4.85Z"/>
                  <path d="M12,20.24a1,1,0,0,1-1-1V3a1,1,0,1,1,2,0V19.24A1,1,0,0,1,12,20.24Z"/>
                  <path d="M20.15,12.09H3.85a1,1,0,1,1,0-2h16.3a1,1,0,0,1,0,2Z"/>
                  <path d="M6.51,22.05a1,1,0,0,1-1-1V19.24a1,1,0,0,1,2,0v1.81A1,1,0,0,1,6.51,22.05Z"/>
                  <path d="M17.49,22.05a1,1,0,0,1-1-1V19.24a1,1,0,0,1,2,0v1.81A1,1,0,0,1,17.49,22.05Z"/>
                  <path d="M14.23,12.09a1,1,0,0,1-1-1V5.66a1,1,0,0,1,2,0v5.43A1,1,0,0,1,14.23,12.09Z"/>
                  <path d="M17.92,12.1a1,1,0,0,1-1-.71l-1.4-4.53a1,1,0,1,1,1.91-.59l1.4,4.53a1,1,0,0,1-.66,1.25A1,1,0,0,1,17.92,12.1Z"/>
                  <path d="M9.28,20.24a1,1,0,0,1-1-1V13.81a1,1,0,0,1,2,0v5.43A1,1,0,0,1,9.28,20.24Z"/>
                  <path d="M17.43,20.24H14.72a1,1,0,0,1-1-1V14.72a1,1,0,0,1,1-1h2.71a1,1,0,0,1,1,1v4.52A1,1,0,0,1,17.43,20.24Zm-1.71-2h.71V15.72h-.71Z"/>
                  </g>
                  </svg>
                  Shelves
                </NavLink>
              </li>
              {/* <!-- Menu Item Shelf Management --> */}

              {/* <!-- Menu Item Shelf Management --> */}
              <li>
                <NavLink
                  to="/admin/member-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('member-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M2414 4719 c-89 -15 -206 -57 -294 -106 -113 -63 -266 -215 -327 -323 -201 -357 -144 -788 143 -1074 170 -171 382 -258 624 -258 242 0 454 87 624 258 287 286 344 717 143 1074 -61 108 -214 260 -327 323 -178 99 -393 138 -586 106z"/>
                  <path d="M832 3880 c-197 -52 -367 -201 -445 -390 -37 -90 -48 -150 -48 -256 0 -107 19 -192 66 -289 82 -170 248 -304 435 -351 85 -22 235 -21 320 1 148 38 304 148 389 274 135 200 148 465 34 684 -51 98 -172 219 -270 270 -146 76 -326 97 -481 57z"/>
                  <path d="M3952 3880 c-169 -45 -336 -176 -415 -327 -91 -175 -103 -380 -31 -561 76 -189 254 -345 454 -397 85 -22 235 -23 320 -1 236 60 424 248 485 485 19 73 22 222 6 296 -53 243 -247 444 -487 505 -100 26 -233 26 -332 0z"/>
                  <path d="M1955 2755 c-152 -34 -252 -90 -366 -204 -95 -95 -146 -176 -188 -299 l-26 -77 -3 -840 c-2 -826 -2 -841 18 -873 11 -18 34 -41 52 -52 32 -20 53 -20 1118 -20 1065 0 1086 0 1118 20 18 11 41 34 52 52 20 32 20 47 18 873 l-3 840 -26 77 c-42 123 -93 204 -188 299 -95 95 -176 146 -299 188 l-77 26 -570 2 c-451 1 -583 -1 -630 -12z"/>
                  <path d="M642 2379 c-287 -37 -523 -241 -614 -529 -23 -75 -23 -77 -23 -595 l0 -520 23 -57 c47 -117 144 -213 260 -260 55 -22 67 -23 434 -26 l377 -3 -12 33 c-15 44 -23 1572 -8 1708 6 52 18 122 27 155 9 33 19 70 21 83 l5 22 -213 -1 c-118 -1 -243 -5 -277 -10z"/>
                  <path d="M3993 2368 c2 -13 12 -50 21 -83 9 -33 21 -103 27 -155 15 -136 7 -1664 -8 -1708 l-12 -33 377 3 c367 3 379 4 434 26 116 47 213 143 260 260 l23 57 0 520 c0 519 0 520 -24 595 -75 240 -244 418 -471 495 -101 34 -203 45 -433 45 l-199 0 5 -22z"/>
                  </g>
                  </svg>
                  Members
                </NavLink>
              </li>
              {/* <!-- Menu Item Shelf Management --> */}

              {/* <!-- Menu Item Admin Management --> */}
              <li>
                <NavLink
                  to="/admin/admin-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-meta-4 ${
                    pathname.includes('admin-management') &&
                    'bg-primary-dark dark:bg-meta-4'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M1750 5109 c-106 -16 -275 -78 -366 -133 -261 -159 -424 -379 -496 -673 -28 -115 -30 -329 -4 -448 52 -235 182 -447 366 -596 98 -80 267 -168 379 -199 439 -119 904 55 1153 430 400 603 88 1417 -611 1597 -110 28 -312 39 -421 22z"/>
                  <path d="M3560 2738 c-64 -33 -85 -81 -104 -245 -9 -73 -16 -134 -16 -136 0 -3 -33 -20 -72 -39 -40 -19 -104 -56 -141 -82 l-68 -47 -132 57 c-143 60 -198 69 -254 40 -38 -19 -49 -34 -145 -201 -108 -186 -118 -209 -118 -258 0 -64 29 -99 161 -199 l115 -88 -8 -80 c-4 -44 -4 -116 0 -160 l8 -80 -115 -88 c-143 -108 -164 -137 -159 -212 4 -47 17 -77 97 -215 118 -203 131 -219 186 -240 57 -22 75 -18 234 50 l129 55 68 -47 c38 -25 101 -61 140 -80 81 -39 73 -21 95 -215 14 -125 35 -172 94 -205 38 -22 51 -23 254 -23 197 0 218 2 257 21 66 31 82 67 100 216 22 182 17 170 80 198 30 13 93 49 139 79 l85 55 117 -50 c155 -65 183 -72 232 -59 58 15 85 49 195 240 148 258 145 280 -52 428 l-117 89 1 164 1 164 119 90 c194 147 196 166 48 424 -108 188 -139 226 -196 241 -48 13 -67 9 -221 -57 l-128 -54 -75 50 c-41 28 -104 64 -139 81 -74 35 -67 21 -89 204 -18 148 -35 183 -102 216 -36 18 -61 20 -250 20 -198 0 -212 -1 -254 -22z m426 -1012 c83 -42 139 -98 181 -185 25 -50 28 -67 28 -161 0 -94 -3 -111 -28 -161 -42 -86 -98 -143 -180 -184 -163 -80 -341 -47 -461 86 -82 91 -118 211 -96 322 51 264 318 400 556 283z"/>
                  <path d="M1628 2715 c-879 -143 -1529 -829 -1618 -1710 -7 -66 -10 -250 -8 -460 l3 -350 31 -55 c33 -60 99 -112 162 -130 24 -6 544 -10 1529 -10 l1491 0 -13 53 c-7 28 -16 80 -20 114 -6 54 -10 63 -34 72 -23 10 -38 7 -100 -19 -150 -61 -273 -61 -399 1 -100 49 -153 112 -269 315 -139 243 -146 260 -151 371 -8 160 48 276 182 380 68 52 75 61 75 93 0 32 -7 40 -67 85 -78 59 -133 128 -164 205 -18 45 -22 75 -23 165 0 131 -1 128 148 389 114 200 169 266 263 312 l57 28 -44 19 c-91 40 -248 88 -364 113 -105 23 -149 27 -350 30 -166 2 -254 -1 -317 -11z"/>
                  </g>
                  </svg>
                  Admins
                </NavLink>
              </li>
              {/* <!-- Menu Item Admin Management --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
