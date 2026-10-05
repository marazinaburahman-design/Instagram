import React from "react";

function SidenavLinks() {
  return (
    <>
      <div className="flex flex-col   gap-y-2 text-xs text-gray-400 ">
        <a
          href="#"
          className="hover:text-black flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-house"></i>Home
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-magnifying-glass"></i>Search
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-regular fa-compass"></i>Explore
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-play"></i>Reels
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-message"></i>Messages
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-regular fa-heart"></i>Notifications
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-square-plus"></i>Create
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-user"></i>Profile
        </a>
      </div>
      

      <div className="flex flex-col fixed bottom-0 w-[18%] text-xs text-gray-400" >
        <a
          href="#"
          className="mt-30 hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-brands fa-threads"></i>Threads
        </a>
        <a
          href="#"
          className="hover:text-black  flex items-center hover:bg-gray-400/15 hover:rounded-sm h-5"
        >
          <i className="fa-solid fa-bars"></i>More
        </a>
      </div>
    </>
  );
}

export default SidenavLinks;
