import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Stop Watch</Link>
      <Link to="/folder">Folder</Link>
      <Link to="/tic-tac-toe">Tictactoe</Link>
      <Link to="/star-rating">Star Rating</Link>
      <Link to="/auto-suggestion">Auto complete suggestion</Link>
      <Link to="/pagination">Pagination</Link>
      <Link to="/drag-drop">Drag Drop</Link>
      <Link to="/shimmer">Shimmer</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/snake-ladder">SnakeLadder</Link>
      <Link to="/calender">Calender</Link>
      <Link to="/animation">Animation</Link>
      <Link to="/progress-bar">ProgressBar</Link>
      <Link to="/infinite-scroll">Infinite Scroll</Link>
    </nav>
  );
};
