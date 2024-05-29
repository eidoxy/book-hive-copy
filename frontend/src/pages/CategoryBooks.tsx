import React from 'react'

const CategoryBooks = () => {
  return (
    <div>
      <div className='bg-bodybg'>
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
  {/* Hero */}
  <section className="bg-orange-100">
    <div className="p-8 mt-6 mb-6 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mt-8 mb-8 font-serif font-bold text-textbody text-5xl">
          International Book
        </h2>
      </div>
      <div className="mx-auto mt-8 max-w-xl">
        <form action="#" className="sm:flex sm:gap-4">
          <div className="sm:flex-1">
            <label htmlFor="email" className="sr-only">Search</label>
            <input type="Search" placeholder="Search Books, Authors, or Categories" className="w-full rounded-md bg-transparent border-2 border-primary p-3 text-gray-700 shadow-sm transition focus:outline-none focus:ring-yellow-700" />
          </div>
          <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary hover:bg-gradientfrom px-8 py-3 text-white transition focus:outline-none focus:ring-yellow-700 sm:mt-0 sm:w-auto">
            <span className="text-sm font-medium">Search</span>
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* Tutup Hero */}
  {/* Navbar2 */}
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="font-sans w-full flex h-16 items-center justify-between">
      <div className="hover:text-secondary border-2 border-yellow-700 rounded-md py-2 px-5">
        <a className="text-textbody transition hover:text-yellow-600" href="#"> Filter</a>
        <button className=" ml-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> &lt; </a>
        <a className="text-textbody transition hover:text-primary pr-8" href="#">Comic </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> Education </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> Journal </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> Novel </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> Subject </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> International Book </a>
      </div>
      <div>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> Sport</a>
        <a className="text-textbody transition hover:text-primary pr-8" href="#"> &gt; </a>
      </div>
    </div>
  </div>
  {/* Tutup Navbar2 */}
  {/* Kategori 1*/}
  <div>
    {/* Buku 1 */}
    <div className="flex justify-between p-14 ">
      <div className="w-56 rounded-lg border-2 h-auto">
        <div className="p">
          <img src="assets/images/buku 16.png" alt="buku 1" />
        </div>
        <div>
          <p className="flex justify-center pb-3 text-body">Benjamin Graham</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Intelligent</p>
          <p className="font-serif text-3xl flex justify-center pb-2 text-textbody">Investor</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 1 */}
      {/* Buku 2 */}
      <div className=" w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 17.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">J. K. Rowling</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Unofficial Harry </p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Potter </p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 2 */}
      {/* Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 18.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Scott Cawthon</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Five Nights At</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Freddy`S</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 19.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brianna Wiest</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Mountain</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Is You</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 20.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brene Brown</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Gifts Of</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Imperfection:</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
    </div>
    {/* Tutup Kategori 1 */}
    {/* Kategori 2 */}
    <div className="flex justify-between p-14">
      <div className="w-56 rounded-lg border-2 h-auto">
      <div className="p">
          <img src="assets/images/buku 16.png" alt="buku 1" />
        </div>
        <div>
          <p className="flex justify-center pb-3 text-body">Benjamin Graham</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Intelligent</p>
          <p className="font-serif text-3xl flex justify-center pb-2 text-textbody">Investor</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 1 */}
      {/* Buku 2 */}
      <div className=" w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 17.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">J. K. Rowling</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Unofficial Harry </p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Potter </p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 2 */}
      {/* Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 18.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Scott Cawthon</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Five Nights At</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Freddy`S</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 19.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brianna Wiest</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Mountain</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Is You</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 20.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brene Brown</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Gifts Of</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Imperfection:</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
    </div>
    {/* Tutup Kategori 2 */}
    {/* Kategori 3 */}
    <div className="flex justify-between p-14">
      <div className="w-56 rounded-lg border-2 h-auto">
      <div className="p">
          <img src="assets/images/buku 16.png" alt="buku 1" />
        </div>
        <div>
          <p className="flex justify-center pb-3 text-body">Benjamin Graham</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Intelligent</p>
          <p className="font-serif text-3xl flex justify-center pb-2 text-textbody">Investor</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 1 */}
      {/* Buku 2 */}
      <div className=" w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 17.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">J. K. Rowling</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Unofficial Harry </p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Potter </p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 2 */}
      {/* Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 18.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Scott Cawthon</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Five Nights At</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Freddy`S</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 19.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brianna Wiest</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Mountain</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Is You</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 20.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brene Brown</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Gifts Of</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Imperfection:</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
    </div>
    {/* Tutup Kategori 3 */}
    {/* Kategori 4 */}
    <div className="flex justify-between p-14">
      <div className="w-56 rounded-lg border-2 h-auto">
      <div className="p">
          <img src="assets/images/buku 16.png" alt="buku 1" />
        </div>
        <div>
          <p className="flex justify-center pb-3 text-body">Benjamin Graham</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Intelligent</p>
          <p className="font-serif text-3xl flex justify-center pb-2 text-textbody">Investor</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 1 */}
      {/* Buku 2 */}
      <div className=" w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 17.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">J. K. Rowling</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Unofficial Harry </p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Potter </p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 2 */}
      {/* Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 18.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Scott Cawthon</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Five Nights At</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Freddy`S</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      {/* Tutup Buku 3 */}
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 19.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brianna Wiest</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">The Mountain</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Is You</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
      <div className="w-56 rounded-lg border h-auto">
        <div>
          <img src="assets/images/buku 20.png"/>
        </div>
        <div>
          <p className="flex justify-center pb-2 text-body">Brene Brown</p>
          <p className="font-serif text-3xl flex justify-center text-textbody">Gifts Of</p>
          <p className="font-serif text-3xl flex justify-center pb-1 text-textbody">Imperfection:</p>
          <div className="flex justify-between p-4 text-textbody">
            <p className="r">Stock</p>
            <p>Shelf</p>
          </div>
        </div>
      </div>
    </div>
    {/* Tutup Kategori 3 */}
  </div>
  {/* Kategori End */}
  {/* Footer */}
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
  {/* Tutup Footer */}
</div>

    </div>
  )
}

export default CategoryBooks