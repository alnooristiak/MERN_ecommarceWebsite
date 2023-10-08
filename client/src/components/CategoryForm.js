import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="container mx-auto mt-6">
        <div className="mb-3">
          {/* <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          /> */}
          <input
            placeholder=""
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-mdfocus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-400 w-24 p-4 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
