import { useRef, useState } from "react";

const DragDrop = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "dragging");
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allows dropping inside parent
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const parentRect = parentRef.current.getBoundingClientRect();
    const childRect = childRef.current.getBoundingClientRect();

    let newX = e.clientX - parentRect.left - childRect.width / 2;
    let newY = e.clientY - parentRect.top - childRect.height / 2;

    // Keep child inside parent boundaries
    newX = Math.max(0, Math.min(parentRect.width - childRect.width, newX));
    newY = Math.max(0, Math.min(parentRect.height - childRect.height, newY));

    setPosition({ x: newX, y: newY });

    console.log(`Dropped at: X=${newX}, Y=${newY}`);
  };

  return (
    <div
      ref={parentRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        position: "relative",
        height: "400px",
        width: "400px",
        background: "gray",
      }}
    >
      <div
        ref={childRef}
        draggable
        onDragStart={handleDragStart}
        style={{
          position: "absolute",
          background: "red",
          height: "20px",
          width: "20px",
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
};

export default DragDrop;
