import fitApp from "../Assets/fit-app.png"
import fortuneMart from "../Assets/fortune-mart.png"
import calculatorApp from "../Assets/Math-Magician.png"
import leaderboard from "../Assets/Leaderbord.png"
import dogBreeds from "../Assets/dog-breeds.png"
import lifestyle from "../Assets/LifestyleArticle.png"

const Projects = [
  {
    name: "fitness Heaven",
    img: fitApp,
    live: "https://everfit-by-fortunatus.netlify.app/",
    github: "https://github.com/fortuneonyeka/everfit-app",
    description:"This a gym application built with rapid ExerciseDB API, Youtube Search and Download, with different exercises,equipments and similar exercises on youtube",
  },
  {
    name: "Fortune Mart",
    img: fortuneMart,
    live: "cheerful-kitsune-74eee2.netlify.app/",
    github: "https://github.com/fortuneonyeka/E-commerce-shop",
    description:"This an ecommerce application where a user can view, save items in the cart and go ahead to checkout",
  },
  {
    name: "React Calculator",
    img: calculatorApp,
    live: "https://61ae31cfd6fb4c7d7c03c5aa--focused-yonath-4fce09.netlify.app/",
    github: "https://github.com/fortuneonyeka/Maths-magicians",
    description:"'Math magicians' is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
  },
  {
    name: "LeaderBoard",
    img: leaderboard,
    live: "https://fortuneonyeka.github.io/LeaderBoard-project/dist/",
    github: "https://github.com/fortuneonyeka/LeaderBoard-project",
    description:"The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service",
  },
  {
    name: "Dog Breeds",
    img: dogBreeds,
    live: "https://fortuneonyeka.github.io/capstone-js/dist/",
    github: "https://fortuneonyeka.github.io/capstone-js/dist/",
    description:"Web app that displays dog breeds information and pictures using The Dog API. This App also supports likes and comments.",
  },
  {
    name: "Rails Life Article",
    img: lifestyle,
    live: "https://infinite-mesa-28355.herokuapp.com/",
    github: "https://github.com/fortuneonyeka/ror_lifestyle_article",
    description:"This is my ROR Capstone project. Lifestyle article where a registered user can post an article, read and vote on other articles. A user can only edit his own submitted articles.",
  }, 
]

export default Projects