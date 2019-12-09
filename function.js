let curScore = 0;
let curQuestion = -1;

const questionSet = [
  { 
    text: `Billie Eilish been writing music since she was ___.`,
    choiceOne: 5,
    choiceTwo: 9,
    choiceThree: 11,
    choiceFour: 16
  },

  {
    text: `___ started rapping under the name “JayOhVee”, but eventually changed it to ___.`,
    choiceOne: `Lil Uzi`,
    choiceTwo: `21 Savage`,
    choiceThree: `6IX9INE`,
    choiceFour: `Joey Bada$$`
  },

  {
    text: `Lil Yachty used to work at ___.`,
    choiceOne: `Bdubs`,
    choiceTwo: `Red Lobster`,
    choiceThree: `Taco Bell`,
    choiceFour: `McDonald’s`
  }, 
  {
    text: `What year did A Tribe Called Quest release their last studio album?`,
    choiceOne: 1991,
    choiceTwo: 1993,
    choiceThree: 1998,
    choiceFour: 2016
  }, 
  {
    text: `How many albums did Prince release before his death?`,
    choiceOne: 5,
    choiceTwo: 39,
    choiceThree: 76,
    choiceFour: 102
  },
  {
  text: `What is the genre of music that combines reggae and punk rock?`,
  choiceOne: `Afro-Punk`,
  choiceTwo:`Metal`,
  choiceThree: `Ska`,
  choiceFour: `Grindcore`
  }
];

const ANSWERS = [ 
  11, 
 `Joey Bada$$`, 
  `McDonald’s`, 
  2016, 
  39,
  `Ska`,
];

const EXPLANATIONS = [ 
  `Billie told Vogue that she was a member of the Los Angeles Children's Choir. She said her time in the choir is what helped her develop her singing skills.`, 
  `His first name is joey and he just felt a bad ass. No one will ever know why he put the dollar signs in there. Maybe to be cooler. Who knows.`, 

  `He used to work at a local McDonald’s in high school, but got fired when he started showing up late.`,

  `They recorded the album just months before the passing of Phife Dawg and announced after the release it was the last and final album from the group.`,

  `Although within the discography there are some double and triple disk albums, in total there are 39 works of art left by the legend.`,

  `It originated in Jamaica with rocksteady and reggae, but over time the ska we all know and love today is generally became listed under reggae/punk rock.`,
];
