import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Comment from './Comment';

const CommentSection = ({ hotelId }) => {
  // const commentList = [
  //   {
  //     id: 1,
  //     content: "This is the first comment.",
  //     likes: 5,
  //     date: new Date("2024-11-07"),
  //     replies: [
  //       {
  //         id: 2,
  //         content: "This is a reply to the first comment.",
  //         likes: 3,
  //         date: new Date("2024-11-08"),
  //         replies: [
  //           {
  //             id: 3,
  //             content: "This is a reply to the reply.",
  //             likes: 2,
  //             date: new Date("2024-11-15"),
  //             replies: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 6,
  //         content: "This is a reply to the first comment.",
  //         likes: 3,
  //         date: new Date("2024-12-01"),
  //         replies: [
  //           {
  //             id: 7,
  //             content: "This is a reply to the reply.",
  //             likes: 2,
  //             date: new Date("2024-12-03"),
  //             replies: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         content: "This is another reply to the first comment.",
  //         likes: 1,
  //         date: new Date("2024-12-08"),
  //         replies: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     content: "This is a second top-level comment.",
  //     likes: 8,
  //     date: new Date("2023-11-11"),
  //     replies: [],
  //   },
  // ];

  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComment();
  }, [hotelId]);

  const fetchComment = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/hotels/${hotelId}/comments`);
      setComments(Object.values(response.data));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  const addComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await axios.post(`http://localhost:4001/hotels/${hotelId}/comments`, {
          content: newComment,
          date: new Date(),
          likes: 0,
          replies: [],
        });
  
        fetchComment()
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  if (comments === undefined) {
    return <div>Loading...</div>
  }

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
