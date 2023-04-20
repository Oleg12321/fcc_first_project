import { useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';

const useTextAuthor = () => {

  const listTextAuthor = [
    ['Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.', '- Booker T. Washington'],
    ['I didn’t fail the test. I just found 100 ways to do it wrong.', '- Benjamin Franklin'],
    ['You miss 100% of the shots you don’t take.', '- Wayne Gretzky'],
    ['The best time to plant a tree was 20 years ago. The second best time is now.', '- Chinese Proverb'],
    ['Life is not measured by the number of breaths we take, but by the moments that take our breath away.', '- Maya Angelou'],
    ['You can never cross the ocean until you have the courage to lose sight of the shore.', '- Christopher Columbus'],
    ['The two most important days in your life are the day you are born and the day you find out why.', '- Mark Twain'],
    ['Build your own dreams, or someone else will hire you to build theirs.', '- Farrah Gray'],
    ['How wonderful it is that nobody need wait a single moment before starting to improve the world.', '- Anne Frank']
  ]
  // console.log(Math.floor(Math.random() * listTextAuthor.length));
  const [textAuthor, setTextAuthor] = useState(['Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.', '- Booker T. Washington'])
    // console.log(textAuthor);

  const setContent = () => {
    setTextAuthor(listTextAuthor[Math.floor(Math.random() * listTextAuthor.length)])
  }

  // console.log(setContent);

  return {textAuthor, setContent}

}

export default useTextAuthor