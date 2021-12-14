import React from "react";

export default function SearchResult({ searchValue, data }) {
  return (
    <div className="flex fixed bg-white bg-opacity-90 text-black py-4 w-full justify-center">
      <div className="w-3/4 sm:w-2/4 flex">
        <div className="flex flex-col w-full">
          {searchValue !== "" &&
            data !== null &&
            data // eslint-disable-next-line
              .filter((data) => {
                if (
                  data.slug.current
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                  return data;
              })
              .map((data, index) => (
                <a
                  className="hover:bg-white bg-opacity-30 px-3 py-2"
                  href={`/post/${data.slug.current}`}
                  key={index}
                >
                  {data.slug.current.replaceAll("-", " ")}
                </a>
              ))}
        </div>
      </div>
    </div>
  );
}
