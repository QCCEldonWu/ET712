import './App.css';
import User from "./comments.js"
import "./index.css"
import User_feedback from './feedback.js';
import Modalwindow from './modalwindow.js';
import old from "./4043265_male_man_old_portrait_icon.svg"
import red from "./5546685_bangladesh_asia_circle_country_flag_icon.svg"
import avo from "./4043237_avatar_avocado_food_scream_icon.svg"

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
      <User_feedback><User image={avo} username="Mr. Avo" date="04/01/25" usercomment="Grat Job!"/></User_feedback>
      <User_feedback><User image={red} username="Bangladesh" date="03/26/71" usercomment="Mashallah Brother"/></User_feedback>
      <User_feedback><User image={old} username="Weir D. Mann" date="02/31/26" usercomment="Hi"/></User_feedback>
      </main>
      
    </>
  );
}

export default App;
