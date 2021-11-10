import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { createForm } from "../data";

function Create() {
  return (
    <section id="createForm" className="text-gray-400 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto text-left lg:px-50">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 mb-4 text-black">
            Create Tournament
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base">
            Use the form to create and host a tournament.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">{/* TODO: */}</div>
      </div>
    </section>
  );
}
export default Create;
