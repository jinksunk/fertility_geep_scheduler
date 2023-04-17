import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [endDate, setEndDate] = useState(new Date());
  const calculatedDates = [
    { label: '16 days before', date: new Date(endDate).setDate(endDate.getDate() - 16) },
    { label: '23 days before', date: new Date(endDate).setDate(endDate.getDate() - 23) },
    { label: '28 days before', date: new Date(endDate).setDate(endDate.getDate() - 28) },
  ];

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
            highlightDates={calculatedDates.map((d) => ({...d, className: 'highlighted-date'}))}
            dateFormat="MMMM d, yyyy"
          />

        </div>
        <div className="sidebar">
          <h2>Dates List</h2>
          <p>End Date: {endDate.toLocaleDateString()}</p>
          {calculatedDates.map((d, i) => (
            <p key={i}>
              {d.label}: {new Date(d.date).toLocaleDateString()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;