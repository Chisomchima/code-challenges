import React, { useState } from "react";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, onSubmit }) {
  const [githubLink, setGithubLink] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ githubLink, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#f4efe7] p-8 rounded-lg shadow-lg w-2/4">
        <h2 className="text-lg font-bold mb-4">Share Your Result</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Link:
            </label>
            <input
              type="text"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="mt-1 block w-full border-gray-400 border-[1px] bg-[#f4efe7] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full  border-gray-400 border-[1px] bg-[#f4efe7] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-[5px] text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Close
            </button>
            <button
              type="submit"
              className="inline-flex justify-center  py-2 px-4 bg-gradient-to-br from-purple-900 to-purple-700 border border-transparent shadow-sm text-sm font-medium rounded-[5px] text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;
