import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "유지민",
    comment: "안녕하세요. 유지민입니다.",
  },
  {
    name: "You Jimin",
    comment: "Hi, My name is You Jimin. Nice to meet you.",
  },
  {
    name: "You Ji-min",
    comment: "Hallo. Ich bin You Ji-min. Vielen Dank für Ihre Aufmerksamkeit.",
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  );
}

export default CommentList;