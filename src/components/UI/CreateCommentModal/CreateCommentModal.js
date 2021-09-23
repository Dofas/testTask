import React from "react";
import "./CreateCommentModal.css";

const CreateCommentModal = ({ children, visible, setVisible }) => {
  const rootClasses = ["myCommentModal"];
  if (visible) {
    rootClasses.push("myCommentModalActive");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="myCommentModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default CreateCommentModal;
