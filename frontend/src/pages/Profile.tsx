import React from 'react'

const Profile = () => {
  return (
    <div className='bg-bodybg'>
      {/*Sidebar*/}
      <div className="flex">
  <div className="bg-primary max-h-max w-[608px] p-5 pt-8 relative">
    <ul>
      <li className="flex justify-center mt-11">
        <span className="text-white text-4xl font-bold font-['DM Sans']">BOOK</span>
        <span className="text-secondary text-4xl font-bold font-['DM Sans']">HIVE</span> 
      </li>
      <li className="flex justify-center mt-4">
        <span className="w-[200px] h-0.5 bg-white" />
      </li>
      <li href="#" className="flex justify-start ml-11 mt-11">
        <button className="flex items-center">
          <span className="w-5 h-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>                          
          </span>
          <span className="text-white text-xl font-normal font-['Roboto']">Profile</span>
        </button>
      </li>
      <li href="#" className="flex justify-start ml-11 mt-4">
        <button className="flex items-center">
          <span className="w-5 h-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
          <span className="text-white text-xl font-normal font-['Roboto']">Borrowing Books</span>
        </button>
      </li>                 
    </ul>
  </div>
  {/*Main*/}
  <div className="scroll-mx-px container justify-center">
    {/*box1*/}
    <div className="flex justify-center">
      <div className="mb-24 mt-24 w-[650px] h-[875px] bg-white rounded-2xl shadow">
        <div>
          <div>
            <div className="m-4 mb-2 text-body text-xl font-normal font-['Roboto']">
              Personal Information
            </div>
            <div className="flex justify-center">
              <p className="w-[585px] h-0.5 bg-primary" />
            </div>
            <div className="flex justify-center">
              <div>
                <img src="assets/images/Profil.png" alt />
                <div className="flex justify-center font-medium mb-11 gap-2">
                  <a className="text-warning " href="#">Delete </a>
                  <a className="text-success" href="#">Change</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-11 mt-2">
          <div className>
            <div className>
              <div className="flex justify-between mx-auto">
                <div>
                  <label className="text-lg font-medium font-['Roboto']">Name</label>
                  <input type="Name" placeholder="Name" className="mb-11 w-full rounded-md border-primary bg-white p-3 text-body shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary" />
                </div>
                <div>
                  <label className="border-primary text-body font-['Roboto']">Phone Number</label>
                  <input type placeholder={+62} className="mb-11 w-full rounded-md border-body bg-white p-3 text-body shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary"/>
                </div>
              </div>
              <div>
                <label className="font-['Roboto'] text-body ">Email</label>
                <input type="Email" placeholder="Email" className="mb-11 w-full rounded-md border-body bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary" />
              </div>
              <div>
                <label className="font-['Roboto'] text-body \">Biodata</label>
                <input type="biodata" placeholder="Edit your bio" className="mb-11 w-full rounded-md border-body bg-white p-3 text-body shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div></div>

    </div>
  )
}

export default Profile