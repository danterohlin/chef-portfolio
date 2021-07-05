import React from "react";

export default function SearchResult({ searchValue, data }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-60 sm:w-96">
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
                className="hover:bg-gray-100 px-3 py-2"
                href={`/post/${data.slug.current}`}
                key={index}
              >
                {data.slug.current.replaceAll("-", " ")}
              </a>
            ))}
      </div>
    </div>
  );
}
