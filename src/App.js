import "./styles.css";
import { useState } from "react";
import Pagination from "./Pagination";
import Counter from "./Counter";
import Folder from "./Folder";
import Tictactoe from "./Tictactoe";
import { Debouncing } from "./Debouncing";
import { Animation } from "./Animation";
import DragDrop from "./DragDrop";
import StarRating from "./StarRating";
import { SnakeLadderBoard } from "./SnakeLadderBoard";
import Calender from "./Calender";
import TrieSearch from "./Suggestion";
import { accordionData, data } from "./variable";
import { InfiniteScroll } from "./InfiniteScroll";
import { Shimmer } from "./Shimmer";
import { Accordion } from "./Accordion";
import { AutoCompleteSuggestion } from "./AutoCompleteSuggestion";
import { ProgressBars } from "./PrgressBar";
import { Todo } from "./Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route
          path="/folder"
          element={
            <div style={{ textAlign: "left" }}>
              <Folder data={data} />
            </div>
          }
        />
        <Route path="/tic-tac-toe" element={<Tictactoe />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/auto-suggestion" element={<AutoCompleteSuggestion />} />
        <Route path="/drag-drop" element={<DragDrop />} />
        <Route path="/shimmer" element={<Shimmer />} />
        <Route
          path="/pagination"
          element={
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={10}
              totalCount={78}
            />
          }
        />
        <Route path="/progress-bar" element={<ProgressBars />} />
        <Route path="/snake-ladder" element={<SnakeLadderBoard />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="/accordion"
          element={accordionData.map((item, i) => (
            <div key={i} className="bg-red p-3">
              <Accordion active={index === i} setIndex={setIndex} index={i} />
            </div>
          ))}
        />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      {/* <Debouncing /> */}
      {/* <TrieSearch /> */}
    </Router>
  );
}
