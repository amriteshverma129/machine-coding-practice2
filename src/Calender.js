import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const generateCalendar = () => {
    let daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    let weeks = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      weeks.push(daysArray.slice(i, i + 7));
    }
    return weeks;
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevMonth}>{`<`}</button>
        <span>
          {months[currentMonth]} {currentYear}
        </span>
        <button onClick={handleNextMonth}>{`>`}</button>
      </div>
      <table>
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateCalendar().map((week, index) => (
            <tr key={index}>
              {week.map((day, i) => (
                <td key={i}>{day ? day : ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
