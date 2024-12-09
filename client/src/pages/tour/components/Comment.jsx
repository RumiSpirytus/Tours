import React, { useState } from "react";
import { FaThumbsUp, FaUserCircle } from "react-icons/fa";
import moment from "moment";

const Comment = ({ comment }) => {
  const [replies, setReplies] = useState(comment.replies || []);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  const addReply = () => {
    if (newReply.trim()) {
      setReplies([
        ...replies,
        {
          id: Date.now(),
          text: newReply,
          likes: 0,
          date: Date.now(),
          replies: [],
        },
      ]);
      setNewReply("");
      setShowReplyBox(false);
    }
  };

  const addLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
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
          <p className="font-semibold">{comment.text}</p>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1 items-center">
              <button onClick={addLike} className="focus:outline-none">
                <FaThumbsUp
                  className={`${liked ? "text-blue-500" : "text-gray-300"}`}
                />
              </button>
              <span>{likes}</span>
            </div>
            <button
              onClick={() => setShowReplyBox(!showReplyBox)}
              className="text-blue-500 text-sm focus:outline-none"
            >
              {showReplyBox ? "Cancel" : "Reply"}
            </button>
          </div>
        </div>

        {showReplyBox && (
          <div className="mb-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="w-full p-2 border rounded-md resize-none"
              rows="3"
              placeholder="Write your reply..."
            />
            <button
              onClick={addReply}
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md disabled:bg-gray-300"
              disabled={!newReply}
            >
              Post Reply
            </button>
          </div>
        )}

        <div>
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
