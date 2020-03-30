import React, { useState } from "react";
import ReactDOM from "react-dom";

// Component Statistic
const Statistic = ({ label, val }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{val}</td>
    </tr>
  );
};

// Component StatsTable
const StatsTable = ({ stats }) => {
  const compAverage = () => {
    return (stats.good + stats.neutral + stats.bad) / 3;
  };

  // If no stats available, display appropriate message instead
  if (!(stats.good || stats.neutral || stats.bad)) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No statistics available</p>
      </>
    );
  }

  const compPositivePerc = () => {
    if (stats.good === 0) return 0;

    return (stats.good / (stats.good + stats.neutral + stats.bad)) * 100;
  };

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic label="good" val={stats.good} />
          <Statistic label="neutral" val={stats.neutral} />
          <Statistic label="bad" val={stats.bad} />
          <Statistic label="all" val={stats.good + stats.neutral + stats.bad} />
          <Statistic label="average" val={compAverage()} />
          <Statistic label="positive" val={compPositivePerc()} />
        </tbody>
      </table>
    </>
  );
};

// Generic Button Component
const Button = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const App = () => {
  // save clicks of each button to own state
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrStat = stat => {
    var newStats = {};
    if (stat === "good") {
      newStats = {
        ...stats,
        good: stats.good + 1
      };
    } else if (stat === "bad") {
      newStats = {
        ...stats,
        bad: stats.bad + 1
      };
    } else if (stat === "neutral") {
      newStats = {
        ...stats,
        neutral: stats.neutral + 1
      };
    } else {
      console.log("Invalid stat");
      return;
    }
    setStats(newStats);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="good" handleClick={() => incrStat("good")} />
      <Button label="neutral" handleClick={() => incrStat("neutral")} />
      <Button label="bad" handleClick={() => incrStat("bad")} />

      <StatsTable stats={stats} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
