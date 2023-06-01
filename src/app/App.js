import "./App.css";
import Dashboard from "../widgets/dashboard";

function App() {
  return (
    <div className="app">
      <Dashboard speed={234} accuracy={100} typos={342} />
      <p className="text">
        Ribeye in corned beef do shoulder, duis pancetta esse chicken enim pork
        chop. In tail kielbasa elit flank ad enim. Anim t-bone fatback, eiusmod
        pastrami deserunt culpa capicola id filet mignon brisket buffalo. Dolore
        exercitation nulla sirloin pork belly, rump ut veniam spare ribs
        tenderloin turducken eiusmod. Sed chislic anim salami rump porchetta
        landjaeger nulla shoulder chuck ut duis. Ribeye et occaecat
        reprehenderit kielbasa pig.
      </p>
    </div>
  );
}

export default App;
