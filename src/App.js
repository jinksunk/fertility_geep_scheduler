import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import subDays from "date-fns/subDays";
import subMonths from "date-fns/subMonths";
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  // endDate is the date chosen by the user, either in the calendar picker, or date picker
  const [endDate, setEndDate] = useState(new Date());

  // calculatedDates is the array of significant dates to back-calculate along with the display class
  const calculatedDates = [
    { label: 'FET date (day 20)', date: 0, className: 'react-datepicker__day--highlighted-pink' },
    { label: 'Patch start (day 1)', date: 19, className: 'react-datepicker__day--highlighted-yellow' },
    { label: 'Lupron overlap', date: 26, className: 'react-datepicker__day--highlighted-blue' },
    { label: 'Lupron start', date: 31, className: 'react-datepicker__day--highlighted-green' },
  ];

  // We return the html snippet to display the date picker, calendar, and list of dates
  return (
    <div className="App">
      <h1>Fertility GEEP Protocol</h1>
      <div className="date-input">
        <label>End Date: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>
      <div className="results">
        <div className="calendar">
          <h2>Interactive Calendar</h2>
          <DatePicker
            inline
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            monthsShown={2}
            highlightDates={calculatedDates.map(d => ({[d.className]: [subDays(endDate, d.date)]}))}
            dateFormat="MMMM d, yyyy"
            initialMonth={subMonths(endDate, 1)}
          />

        </div>
        <div className="sidebar">
          <h2>Dates List</h2>
          {calculatedDates.sort((a, b) => b.date - a.date).map((d, i) => (
            <p key={i} class={d.className}>
              {d.label}: {subDays(endDate, d.date).toLocaleDateString()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;