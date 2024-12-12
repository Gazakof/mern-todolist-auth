import React from "react";
import { MdAdd } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-4 mt-3">
          <input type="text" className="" placeholder="Add tags" />
          <button>
            <MdAdd className="text-2xl rounded text-blue-700 hover:text-white hover:bg-blue-700" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TagInput;
