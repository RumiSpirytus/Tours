import React, { useState } from "react";
import axios from "axios"
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";

const Comment = ({ comment }) => {
  const [modelResponse, setModelResponse] = useState();
  const [model, setModel] = useState();
  const generateByModel = async (model) => {
    setModel('');
    setModelResponse('');
    try {
      console.log(`Generating model: ${model}`);
      const response = await axios.post(`http://localhost:8000/api/v1/reviews`, {
        comments: comment.content,
        model,
      });
      console.log(response);
      setModel(model);
      setModelResponse(response.data.result);
    } catch (error) {
      console.log("Model error: ", error);
    }
  };

  return (
    <div className="flex flex-row gap-2 border-l border-gray-300 pl-4 my-2">
      <div className="w-6 h-6">
        <FaUserCircle className="w-full h-full text-gray-500 text-3xl" />
      </div>

      <div className="flex flex-col">
        <div>
          <span>Username</span>
          <span className="text-gray-500"> - {moment(comment.date).fromNow()}</span>
        </div>

        <div className="mb-2">
          <p className="font-semibold">{comment.content}</p>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => generateByModel("knn")}
              className="text-blue-500 text-sm focus:outline-none"
            >
              KNN
            </button>
            {
              model === "knn" && <span>{modelResponse}</span>
            }
            <button
              onClick={() => generateByModel("bayes")}
              className="text-blue-500 text-sm focus:outline-none"
            >
              Bayes
            </button>
            {
              model === "bayes" && <span>{modelResponse}</span>
            }
            <button
              onClick={() => generateByModel("tree")}
              className="text-blue-500 text-sm focus:outline-none"
            >
              Tree
            </button>
            {
              model === "tree" && <span>{modelResponse}</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
