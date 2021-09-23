import React from "react";
import "./EditPostModal.css";

const EditPostModal = ({ children, visible, setVisible }) => {
  const rootClasses = ["myEditModal"];
  if (visible) {
    rootClasses.push("myEditModalActive");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="myEditModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default EditPostModal;
