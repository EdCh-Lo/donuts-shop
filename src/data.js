import basics from "./img/the-basics.png";
import basicsPlain from "./img/the-basics-plain.png";
import saltedCaramel from "./img/salted-caramel.png";
import saltedCaramelPlain from "./img/salted-caramel-plain.png";
import sugarMama from "./img/sugar-mama.png";
import sugarMamaPlain from "./img/sugar-mama-plain.png";
import chocolate from "./img/chocolate.png";
import chocolatePlain from "./img/chocolate-plain.png";
import speculoos from "./img/speculoos.png";
import speculoosPlain from "./img/speculoos-plain.png";
import peanutButter from "./img/peanut-butter.png";
import peanutButterPlain from "./img/peanut-butter-plain.png";

const donuts = [
  {
    id: 1,
    name: "The Basics",
    description: "Original donut (plain) glazed",
    img: basics,
    imgPlain: basicsPlain,
    color: "rgba(247, 144, 213, 0.4)",
  },
  {
    id: 2,
    name: "Salted Caramel",
    description:
      "Made with our signature caramel sauce & lightly dusted with fleur de sel",
    img: saltedCaramel,
    imgPlain: saltedCaramelPlain,
    color: "rgba(213, 150, 238, 0.4)",
  },
  {
    id: 3,
    name: "Sugar Mama",
    description: "Rolled in cinnamon sugar",
    img: sugarMama,
    imgPlain: sugarMamaPlain,
    color: "rgba(255, 152, 197, 0.4)",
  },
  {
    id: 4,
    name: "Chocolate",
    description: "Dark chocolate glaze dusted with 100% pure cocoa powder",
    img: chocolate,
    imgPlain: chocolatePlain,
    color: "rgba(247, 144, 213, 0.4)",
  },
  {
    id: 5,
    name: "Speculoos",
    description:
      "Spiced cookie butter glaze topped with a thick layer of speculoos biscuit crumbs",
    img: speculoos,
    imgPlain: speculoosPlain,
    color: "rgba(255, 146, 211, 0.4)",
  },
  {
    id: 6,
    name: "Peanut Butter",
    description: "Peanut butter glazed and dark chocolate drizzle",
    img: peanutButter,
    imgPlain: peanutButterPlain,
    color: "rgba(255, 152, 197, 0.4)",
  },
];

export default donuts;
