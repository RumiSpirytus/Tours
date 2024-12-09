import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const commentList = [
    {
      id: 1,
      text: "This is the first comment.",
      likes: 5,
      date: new Date("2024-11-07"),
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment.",
          likes: 3,
          date: new Date("2024-11-08"),
          replies: [
            {
              id: 3,
              text: "This is a reply to the reply.",
              likes: 2,
              date: new Date("2024-11-15"),
              replies: [],
            },
          ],
        },
        {
          id: 6,
          text: "This is a reply to the first comment.",
          likes: 3,
          date: new Date("2024-12-01"),
          replies: [
            {
              id: 7,
              text: "This is a reply to the reply.",
              likes: 2,
              date: new Date("2024-12-03"),
              replies: [],
            },
          ],
        },
        {
          id: 4,
          text: "This is another reply to the first comment.",
          likes: 1,
          date: new Date("2024-12-08"),
          replies: [],
        },
      ],
    },
    {
      id: 5,
      text: "This is a second top-level comment.",
      likes: 8,
      date: new Date("2023-11-11"),
      replies: [],
    },
  ];

  const [comments, setComments] = useState(commentList);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, replies: [] },
      ]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md resize-none"
          rows="6"
          placeholder="Add a comment..."
        />
        <button
          onClick={addComment}
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md focus:outline-none disabled:bg-gray-300"
          disabled={!newComment}
        >
          Post Comment
        </button>
      </div>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
