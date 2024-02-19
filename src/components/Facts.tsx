import { useState, useEffect } from "react";

const Facts = () => {
  const milkFacts = [
    "Milk is the primary source of nutrition for young mammals, including humans.",
    "Cow's milk is the most commonly consumed type of milk worldwide.",
    "Milk is rich in calcium, which is essential for bone health.",
    "Whole milk contains about 3.25% fat.",
    "Milk can be processed into various products such as cheese, yogurt, and butter.",
    "One gallon of milk weighs approximately 8.6 pounds (3.9 kilograms).",
    "In some cultures, milk is considered a symbol of purity and prosperity.",
    "The average dairy cow produces about 6.3 gallons (24 liters) of milk per day.",
    "Milk is composed of about 87% water.",
    "Lactose is the natural sugar found in milk.",
    "Pasteurization is a process used to kill harmful bacteria in milk by heating it to a specific temperature.",
    "Milk is a good source of protein, providing about 8 grams per cup.",
    "The color of milk can vary depending on factors such as diet and breed of the animal.",
    "Some people are lactose intolerant, meaning they have difficulty digesting lactose.",
    "Camel milk is consumed in some parts of the world and is said to have health benefits.",
    "The Guinness World Record for the most milk produced by a cow in one day is 110.9 liters (29.3 gallons).",
    "Some cheeses are made from milk that has been curdled using enzymes found in the stomachs of young calves.",
    "Milkshakes, made by blending milk with ice cream and flavorings, are a popular treat around the world.",
    "In Hinduism, milk is considered sacred and is often used in religious rituals.",
    "Milk is often recommended as a post-workout drink to help replenish electrolytes and promote muscle recovery.",
    "In the United States, June is National Dairy Month, celebrating the contributions of the dairy industry.",
    "The first milk carton was invented in 1915 by John Van Wormer.",
    "Milk is an emulsion of fat globules suspended in a water-based solution.",
    "The average American consumes about 20 gallons of milk and eats nearly 35 pounds of cheese per year.",
    "Milk consumption dates back to ancient times, with evidence of dairy farming in ancient Mesopotamia and Egypt.",
    "Milk can be stored in the refrigerator for about one week after the sell-by date.",
    "Almond milk, soy milk, and coconut milk are popular alternatives for people who are lactose intolerant or vegan.",
    "In many cultures, milk is used as an ingredient in traditional dishes such as pudding, custard, and rice pudding.",
    "The calcium in milk is important for maintaining healthy teeth and preventing osteoporosis.",
    "In the 19th century, milk was often adulterated with water or other substances to increase profits.",
    "Milk consumption is associated with a reduced risk of developing heart disease and stroke.",
    "In ancient Rome, milk was sometimes used as a cosmetic ingredient for skin care.",
    "The first dairy cow in the United States arrived in the Jamestown colony in 1611.",
    "Milk is often fortified with vitamin D to help improve bone health.",
    "In Buddhism, milk is considered a symbol of abundance and is used in various ceremonies.",
    "The Maasai people of East Africa are known for their traditional diet of milk, blood, and meat from cattle.",
    "In many parts of the world, milk is consumed fresh or fermented into products such as yogurt and kefir.",
    "In traditional Chinese medicine, milk is believed to have cooling properties and is used to balance the body's energy.",
    "Milk is a complete protein, containing all nine essential amino acids necessary for human health.",
    "In the Middle Ages, milk was often used as a substitute for wine or water in religious ceremonies.",
    "The United States is the largest producer of milk in the world, followed by India and China.",
    'The process of milking cows by hand is known as "hand-milking" and has been practiced for thousands of years.',
  ];

  const [randomFacts, setRandomFacts] = useState([]);

  const generateRandomFacts = () => {
    const shuffledFacts = milkFacts.sort(() => 0.5 - Math.random()); // Shuffle the array
    const selectedFacts = shuffledFacts.slice(0, 5); // Select the first five elements
    setRandomFacts(selectedFacts);
  };

  useEffect(() => {
    generateRandomFacts();
  }, []);

  return (
    <div className="facts-container">
      <ul className="facts-list">
        <h2 className="facts-headline">Fun facts about MILK</h2>
        {randomFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Facts;
