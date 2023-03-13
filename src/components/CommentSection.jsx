import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../assets/images/inBlue.jpg";
import { HOST_URL } from "../assets/js/helpFunction";

const Comment = ({
  timestamp,
  text,
  author,
  replies,
  setReplies,
  level = 0,
  ...props
}) => {
  const [isLevel1Hidden, setIsLevel1Hidden] = useState(true);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [likes, setLikes] = useState("like_counts");
  const [liked, setLiked] = useState(false);

  const handleToggleLevel1 = () => {
    setIsLevel1Hidden(!isLevel1Hidden);
  };
  const handleReplyClick = () => {
    if (level === 0) {
      setIsReplying(!isReplying);
    }
  };
  function handleLikeClick() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);

      fetch(HOST_URL() + "/api/v1/comments/comment_like/1/", {
        method: "POST",
        body: JSON.stringify({ liked: true }),
      });
    }
  }

  const handleReplySubmit = (e) => {
    e.preventDefault();
    setReplies([
      ...replies,
      {
        text: replyText,
        author: "You",
        level: level + 1,
      },
    ]);
    setReplyText("");
    setIsReplying(false);
  };

  return (
    <CommentContainer>
      <section
        className={
          level === 1 && isLevel1Hidden
            ? "hidden"
            : level === 1
            ? "Global"
            : "GenZ"
        }
      >
        <div className="eachCOmment">
          <img src={Profile} alt="user" />

          <div className="mainText">
            <h3>{author}</h3>
            <p> {text}</p>
            {/* <h6>
              Posted on <b>Jan 2 2023</b>
            </h6> */}
            <h6>
              Posted on <b>{new Date(timestamp).toLocaleString()}</b>
            </h6>

            <div className="react_to">
              <button onClick={handleLikeClick}>
                <span className="material-symbols-outlined">thumb_up</span>{" "}
                {likes}
              </button>
              {level === 0 ? (
                <button onClick={handleReplyClick}>
                  <span className="material-symbols-outlined">chat</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Is ending here */}
      {/* {level === 0 && <button onClick={handleReplyClick}>Reply</button>} */}
      {isReplying && level === 0 && (
        <form onSubmit={handleReplySubmit}>
          <div
            className="comment_edit"
            contentEditable
            onInput={(e) => setReplyText(e.currentTarget.textContent)}
          ></div>

          <button type="submit">Reply</button>
        </form>
      )}
      {replies &&
        replies.map((reply, index) => (
          <Comment
            key={reply.content}
            text={reply.content}
            author={reply.user.first_name}
            level={reply.level}
            replies={reply.replies}
            setReplies={setReplies}
          />
        ))}
      {/* {level === 1 && (
        <button onClick={handleToggleLevel1}>
          {isLevel1Hidden ? "Show" : "Hide"} Level 1 Comments
        </button>
      )} */}
    </CommentContainer>
  );
};

const CommentSection = () => {
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
          level={index}
        />
      ))}
    </MainRender>
  );
};

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
const CommentContainer = styled.div`
  margin: 20px 0;
  border-top: var(--borderDefault);
  padding-top: 40px;
  .eachCOmment {
    display: flex;

    img {
      margin-right: 15px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    .mainText {
      .react_to {
        display: inline-block;

        button {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: left;
          border-radius: 50%;
          padding: 0px;
          color: var(--Gunmetal);
          margin: 0px;
          margin-right: 20px;
          span {
            font-size: 14px;
            color: var(--Gunmetal);
          }
        }
      }
      h3 {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        margin: 0;
        margin-bottom: 10px;
      }
      h6 {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0.025em;
        text-align: left;
        display: inline-block;
        margin-right: 15px;
        b {
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
  }
`;
export default CommentSection;
