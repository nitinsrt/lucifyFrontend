import React, { useState } from "react";

const Filters: React.FC = () => {
  // Define the list of predefined filters
  const predefinedFilters = [
    "Not Accepted",
    "Ongoing",
    "Scheduled",
    "Completed",
    "Delayed",
    "Ontime",
  ];

  // State to store selected filters
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Function to toggle selection of a filter
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div className="p-4">
      <div className="flex overflow-x-auto flex-col">
        <div className="flex justify-start items-center">
          <p className="font-encode-sans-expanded-sb font- text-[1.5rem] mb-2 text-base text-[#1A0A02] hidden md:block ">
            Tasks of the Day
          </p>
        </div>
        {/* Render predefined filters */}
        <div className="flex flex-row">
          {predefinedFilters.map((filter) => (
            <button
              key={filter}
              className={`px-2 h-7 py-1 text-nowrap rounded-[1.25rem] flex items-center font-encode-sans-expanded-m focus:outline-none mr-2.5 ${
                selectedFilters.includes(filter)
                  ? "bg-[#DC5B19] text-white border text-xs"
                  : "text-xs text-[#B8B8B8] border border-[#B8B8B8] bg-white"
              }`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
