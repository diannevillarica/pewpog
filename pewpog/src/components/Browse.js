import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import { cards } from "../data";

function Browse() {
  return (
    <section id="cards" className="text-gray-400 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto text-left lg:px-50">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 mb-4 text-black">
            Browse Tournaments
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base">
            Pick from the list of tournaments below.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => (
            <div className="lg:w-1/3 w-100 p-4 mb-5">
              <a href={card.link} key={card.image}>
                <div className="flex relative">
                  {/* <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={card.image}
                  /> */}
                  <div className="px-8 py-10 relative z-10 w-full bg-gray-900 rounded-md">
                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                      {card.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {card.title}
                    </h1>
                    <p className="leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </a>
              <div className="flex justify-between relative items-center">
                <div className="flex relative items-center">
                  <UserIcon className="w-4 h-4 ml-1 mr-3" />
                  <p>UserName</p>
                </div>

                <button
                  class="btn-join"
                  className="px-4 py-2 mt-3 bg-yellow-400 rounded-md text-black"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Browse;
