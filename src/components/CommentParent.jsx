import React from "react";
// import Comment from "./CommentSection";

const CommentParent = () => {
  const [comments, setComments] = useState([
    {
      user: {
        id: 151,
        first_name: "Favour",
        last_name: "Afenikhena",
        email: "codertjay@gmail.com",
        username: "Codertjay",
        verified: false,
        is_staff: true,
      },
      id: 1,
      content: "Hello this is the first comment",
      content_absolute_url: null,
      timestamp: "2023-02-15T22:02:09.959000+01:00",
      reply_count: 6,
      like_counts: 1,
      replies: [
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 14,
          content: "Another reply again",
          like_counts: 0,
          timestamp: "2023-02-16T13:00:57.904000+01:00",
        },
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 13,
          content: "Another reply again",
          like_counts: 0,
          timestamp: "2023-02-16T13:00:52.066000+01:00",
        },
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 12,
          content: "Another reply again",
          like_counts: 0,
          timestamp: "2023-02-16T11:06:05.398000+01:00",
        },
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 11,
          content: "Another reply again",
          like_counts: 0,
          timestamp: "2023-02-16T11:06:01.268000+01:00",
        },
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 10,
          content: "Hello this is the reply again",
          like_counts: 0,
          timestamp: "2023-02-16T11:05:47.739000+01:00",
        },
        {
          user: {
            id: 151,
            first_name: "Favour",
            last_name: "Afenikhena",
            email: "codertjay@gmail.com",
            username: "Codertjay",
            verified: false,
            is_staff: true,
          },
          level: 1,
          id: 9,
          content: "Hello this is the first comment",
          like_counts: 0,
          timestamp: "2023-02-16T11:04:32.252000+01:00",
        },
      ],
    },
  ]);
  const [newCommentText, setNewCommentText] = useState("");
  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        text: newCommentText,
        author: "You",
        replies: [],
      },
    ]);
    setNewCommentText("");
  };

  return (
    <MainRender>
      <form onSubmit={handleNewCommentSubmit}>
        <div
          className="comment_edit"
          contentEditable
          onInput={(e) => {
            setNewCommentText(e.currentTarget.textContent);
          }}
        ></div>

        <button type="submit">Post</button>
      </form>
      {comments.map((comment, index) => (
        <Comment
          key={comment.content}
          text={comment.content}
          timestamp={comment.timestamp}
          author={comment.user.first_name}
          replies={comment.replies}
          setReplies={(replies) =>
            setComments(
              comments.map((c) => {
                if (c.text === comment.text) {
                  return { ...c, replies };
                }
                return c;
              })
            )
          }
          //   level={index}
        />
        // {level === 1 && (
        //   <button onClick={handleToggleLevel1}>
        //     {isLevel1Hidden ? "Show" : "Hide"} Level 1 Comments
        //   </button>
        // )}
      ))}
    </MainRender>
  );
};

export default CommentParent;

const MainRender = styled.section`
  .Global {
    // background: yellow;
    margin-left: 40px;
  }
  .hidden {
    display: none;
  }
  form {
    // background: yellow;
    position: relative;
    button {
      margin: 0;
      padding: 0;
      right: 15px;
      position: absolute;
      top: 10px;
      color: var(--DarkCyan);
    }
    .comment_edit {
      margin-top: 30px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      color: var(--Gunmetal);
      padding: 10px;
      padding-right: 40px;
      height: auto;
      outline: 0;
      width: 100%;
      border: 1px solid #d8d8d8;
      border-radius: 5px;
    }
  }
`;
