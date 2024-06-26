import React from 'react';

const HomePage = () => {
  return (
    <>
        {/* Header start */}
{/* Navbar */}
  {/* Navbar */}
  <nav className="bg-bodybg fixed w-full z-20 top-0 start-0   ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ul className="flex">
        <a className="font-bold font-sans text-2xl text-primary">BOOK</a>
        <a className="font-bold font-sans text-2xl text-secondary">HIVE</a>
      </ul>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-primary focus:outline-none rounded-md px-8 py-2.5 text-center hover:bg-gradientfrom">Login
        </button>
      </div>
      <div className="bg-bodybg items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <a href="#" className="block py-2 px-3 text-textbody rounded hover:text-body md:p-0">Home</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className=" flex items-center justify-between w-full py-2 px-3 text-textbody hover:text-body md:p-0 md:w-auto">Categories
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
              </svg></button>
            {/* Dropdown menu */}
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">International
                    Book</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Comic</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Novel</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Education</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                  out</a>
              </div>
            </div>
            {/* End Dropdown menu */}
          </li>
          <li>
            <a href="#" className=" flex items-center justify-between w-full py-2 px-3 text-textbody hover:text-body md:p-0 md:w-auto">About
              Us</a>
          </li>
          <li>
            <a href="#" className=" flex items-center justify-between w-full py-2 px-3 text-textbody hover:text-body md:p-0 md:w-auto">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*Tutup Navbar */}
{/* Header ends */}
      <div className='bg-bodybg'>
        <main className="mb-96">
          <div className="mt md:mt-4 grid grid-cols-2 gap-4 place-items-center h-56 ">
            <div>
              <ul className="ms-24 mb-16">
                <li>
                  <a className="text-header text-6xl font-serif font-bold"
                  >
                    The Whole World Open Up To You
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-header text-lg font-serif font-normal"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </a>
                </li>
              </ul>
              <ul className="ms-24">
                <li className="w-full h-16 flex justify-start items-center">
                  <input
                    name="search"
                    id="search"
                    placeholder="Search Books, Authors, or Categories"
                    className="p-6 rounded-lg border-2 bg-transparent border-primarybg-primary text-neutral-600 text-base font-medium font-['Roboto']"
                    style={{ width: 384, height: 64 }}
                  />
                  <button className="h-16 ml-4 px-10 bg-primary rounded-lg flex justify-center items-center text-white text-xl font-normal font-['Roboto'] hover:bg-gradientfrom">
                    Search
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <img
                style={{ width: 529, height: 531 }}
                src="assets/images2/Globe and Book.png"
              />
            </div>
          </div>
          {/* Section 1 ends */}
        </main>
        {/*Section 2*/}
        <main className="mt-8 mb-24 flex-auto">
          <div className="flex justify-between ml-24 mr-24 mb-16">
            <div className="text-textbody text-3xl font-medium font-['Roboto']">
              Recommendation
            </div>
            <div />
            <div>
              <button className="text-primary text-lg font-normal font-['Roboto'] hover:text-body">
                <ul className="flex my-3 justify-center items-center">
                  <li className="mr-2">View All</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                </ul>
              </button>
            </div>
          </div>
          {/*Card1*/}
          <div className="ml-24 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex">
            <ul>
              <li>
                <img src="assets/images2/RikiSanto.png" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Riki Santo
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody  text-3xl font-normal font-['Roboto']">
                    Kisah Kedamaian
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody  text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody  text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card2*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Aaron Loeb.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Aaron Loeb
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    The Young Wizard
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card3*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="#" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Averi Davis
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Story Of Two Friends
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card4*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Estelle Darcy.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Estelle Darcy
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Walk Into The Shadow
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card5*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Shawn Gracia.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Shawn Gracia
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Conouest Of Flame
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </main>
        {/*Section 2 ends*/}
        {/*Section 3*/}
        <main className="mt-8 m-24 flex-auto">
          <div
            style={{ height: 480, width: 1240 }}
            className="card flex flex-col w-96 h-96 relative bg-gradient-to-r from-gradientfrom to-gradientto rounded-2xl shadow"
          >
            <div>
              <img
                src="assets/images2/Shawn Gracia.svg"
                className="w-56 h-80 left-[843px] top-[80px] absolute rounded-lg"
              />
              <div className="flex flex-col m-16">
                <div className="mb-8 text-white text-4xl font-medium font-['Roboto']">
                  Our Recommendation
                </div>
                <div className="mb-4 text-white text-5xl font-medium font-['Roboto']">
                  Conouest Of Flame
                </div>
                <div className="mb-4 w-96 text-white text-3xl font-normal font-['Roboto']">
                  Shawn Gracia
                </div>
                <div className="w-1/2 text-white text-xl font-normal font-['Roboto']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </main>
        {/*Section 3 ends*/}
        {/*Section 4*/}
        <main className="mt-8 mb-24 flex-auto">
          <div className="flex justify-between ml-24 mr-24 mb-16">
            <div className="text-textbody text-3xl font-medium font-['Roboto']">
              Most Popular
            </div>
            <div />
            <div>
              <button className="text-primary text-lg font-normal font-['Roboto'] hover:text-body">
                <ul className="flex my-3 justify-center items-center">
                  <li className="mr-2">View All</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                </ul>
              </button>
            </div>
          </div>
          {/*Card1*/}
          <div className="ml-24 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Tere Liye.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Tere Liye
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Bumi
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card2*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Soul.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Claudia Wilson
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Soul
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card3*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Cahaya Dewi.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Cahaya Dewi
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Rasa Sunyi
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card4*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Ranch.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Claudia Wilson
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Ranch
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/*Card5*/}
          <div className="ml-2 mr-2 w-56 h-auto rounded-lg shadow border border-neutral-600/opacity-25 flex-col justify-center items-center inline-flex ">
            <ul>
              <li>
                <img src="assets/images2/Merinding.svg" />
              </li>
              <li>
                <div className="w-48 h-28 flex-col justify-center items-center gap-1 inline-flex">
                  <div className="self-stretch text-center text-body text-xl font-normal font-['Roboto']">
                    Tuti Kasih
                  </div>
                  <div className="mb-4 self-stretch text-center text-textbody text-3xl font-normal font-['Roboto']">
                    Merinding
                  </div>
                </div>
              </li>
              <li>
                <div className="w-48 h-6 justify-between items-center inline-flex">
                  <a
                    href="#"
                    className="text-textbody text-xl font-normal  hover:text-body font-['Roboto']"
                  >
                    Stock
                  </a>
                  <a
                    href="#"
                    className="text-right text-textbody text-xl hover:text-body font-normal font-['Roboto']"
                  >
                    Shelf
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </main>
        {/*Section 4 ends*/}
        {/*Section 5*/}
        <main className="mt-8 m-24 flex-auto">
          <div
            style={{ height: 480, width: 1240 }}
            className="card flex bg-gradient-to-r from-gradientfrom to-gradientto rounded-2xl shadow"
          >
            <div className="flex-none">
              <img
                src="assets/images2/mail with a frosted glass effect.svg"
                className="m-24"
              />
            </div>
            <div className="flex items-center justify-center flex-grow">
              <ul>
                <li>
                  <a className="text-white text-4xl font-medium font-['Roboto']">
                    Subscribe to our blog for the latest information.
                  </a>
                </li>
                <li className="flex items-center mt-8 gap-4">
                  <input
                    name="search"
                    id="search"
                    placeholder="Your Email"
                    className="w-80 h-16 p-6 rounded-lg border-2 border-primarybg-primary bg-transparent text-white justify-start items-center gap-6 inline-flex"
                  />
                  <button className="w-60 h-16 px-14 bg-primary rounded-lg flex-col justify-center items-center inline-flex text-white text-xl font-normal font-['Roboto'] hover:bg-gradientfrom">
                    Subscribe
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      {/*Footer*/}
<footer>
  <div className="p-10 bg-white text-textbody">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-flow-row gap-4">
        <div>
          <ul>
            <li className="mb-5 w-44 h-6 text-textbody text-base font-bold font-['Montserrat'] leading-normal">
              Other Links
            </li>
            <li>
              <a className="w-44 h-16 text-textbody text-base font-normal font-['Montserrat'] leading-normal" href="#">Home<br /></a>
              <a href="#" className="w-44 h-16 text-textbody text-base font-normal font-['Montserrat'] leading-normal">Books</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-5 w-44 h-6 text-textbody text-base font-bold font-['Montserrat'] leading-normal">
              About BookHive
            </li>
            <li>
              <a className="w-44 h-16 text-textbody text-base font-normal font-['Montserrat'] leading-normal" href="#">About Us<br /></a>
              <a href="#" className="w-44 h-16 text-textbody text-base font-normal font-['Montserrat'] leading-normal">Help<br /></a>
              <a href="#" className="w-44 h-16 text-textbody text-base font-normal font-['Montserrat'] leading-normal">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 w-full h-0.5 bg-primary" />
      <div>
        <ul className="flex flex-wrap items-center justify-between mt-8 w-full">
          <li className="text-textbody text-base font-normal font-['Montserrat'] leading-normal">
            © BookHive, We Love our User!
          </li>
          <li className="flex items-center text-right text-textbody text-base font-normal font-['Montserrat'] leading-normal">
            <a className="mr-4">Follow us:</a>
            <a className="mr-4" href="#">
              <img src="assets/images2/Instagram.svg" alt="Instagram" />
            </a>
            <a className="mr-4" href="#">
              <img src="assets/images2/TikToksvg.svg" alt="TikTok" />
            </a>
            <a className="mr-4" href="#">
              <img src="assets/images2/Twitter.svg" alt="Twitter" />
            </a>
            <a className="mr-4" href="#">
              <img src="assets/images2/Youtube.svg" alt="Youtube" />
            </a>
          </li>
        </ul>                    
        <ul>
        </ul>
      </div>
    </div>
  </div>        
</footer>
{/*Footer ends*/}

    </>
    
  );
};

export default HomePage;
