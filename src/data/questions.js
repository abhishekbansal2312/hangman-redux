const questions = [
  {
    word: "tiger",
    hint: "A large cat species known for its striped fur",
    category: "Animals",
  },
  {
    word: "avocado",
    hint: "A creamy, green fruit often used in salads and guacamole",
    category: "Fruits",
  },
  {
    word: "inception",
    hint: "A 2010 science fiction film directed by Christopher Nolan",
    category: "Movies",
  },
  {
    word: "reactor",
    hint: "A device used to generate energy, often in nuclear plants",
    category: "Technology",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star",
    category: "Space",
  },
  {
    word: "chicken",
    hint: "A domesticated bird often raised for its eggs and meat",
    category: "Animals",
  },
  {
    word: "piano",
    hint: "A large musical instrument with keys, often played with hands",
    category: "Music",
  },
  {
    word: "jazz",
    hint: "A genre of music that originated in the African-American communities",
    category: "Music",
  },
  {
    word: "shakespeare",
    hint: "An English playwright known for works like 'Romeo and Juliet' and 'Hamlet'",
    category: "Literature",
  },
  {
    word: "lionel",
    hint: "A famous soccer player known for his skills and goals",
    category: "Sports",
  },
  {
    word: "apple",
    hint: "A popular fruit that is often red or green",
    category: "Fruits",
  },
  {
    word: "bitcoin",
    hint: "A type of cryptocurrency that is decentralized and digital",
    category: "Technology",
  },
  {
    word: "harrypotter",
    hint: "A famous book and movie series about a young wizard",
    category: "Movies",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface",
    category: "Geography",
  },
  {
    word: "neptune",
    hint: "The eighth planet from the Sun in our solar system",
    category: "Space",
  },
  {
    word: "elephant",
    hint: "A large mammal with a trunk",
    category: "Animals",
  },
  {
    word: "giraffe",
    hint: "A tall animal with long neck and spotted coat",
    category: "Animals",
  },
  {
    word: "zebra",
    hint: "A striped horse-like animal",
    category: "Animals",
  },
  {
    word: "ocean",
    hint: "A vast body of salt water",
    category: "Geography",
  },
  {
    word: "forest",
    hint: "A large area covered with trees",
    category: "Geography",
  },
  {
    word: "guitar",
    hint: "A stringed musical instrument",
    category: "Music",
  },
  {
    word: "drum",
    hint: "A percussion instrument",
    category: "Music",
  },
  {
    word: "soccer",
    hint: "A popular sport played with a ball and feet",
    category: "Sports",
  },
  {
    word: "basketball",
    hint: "A sport played with a ball on a hoop",
    category: "Sports",
  },
  {
    word: "tennis",
    hint: "A sport played with rackets and a ball on a court",
    category: "Sports",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cacao beans",
    category: "Food",
  },
  {
    word: "pizza",
    hint: "A popular dish with a flatbread base, typically topped with cheese and tomato sauce",
    category: "Food",
  },
  {
    word: "burger",
    hint: "A sandwich consisting of one or more cooked patties of ground meat",
    category: "Food",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage",
    category: "Drinks",
  },
  {
    word: "tea",
    hint: "An aromatic beverage traditionally prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis plant",
    category: "Drinks",
  },
  {
    word: "water",
    hint: "A clear, colorless, odorless, and tasteless liquid",
    category: "Drinks",
  },
  {
    word: "jupiter",
    hint: "The largest planet in our solar system",
    category: "Space",
  },
  {
    word: "mars",
    hint: "The fourth planet from the Sun, often called the Red Planet",
    category: "Space",
  },
  {
    word: "earthquake",
    hint: "A sudden and violent shaking of the ground",
    category: "Geography",
  },
  {
    word: "volcano",
    hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust",
    category: "Geography",
  },
  {
    word: "diamond",
    hint: "The hardest known natural mineral",
    category: "Minerals",
  },
  {
    word: "gold",
    hint: "A valuable yellow precious metal",
    category: "Minerals",
  },
  {
    word: "silver",
    hint: "A lustrous white precious metal",
    category: "Minerals",
  },
  {
    word: "iron",
    hint: "A common, relatively heavy, ductile, and malleable magnetic metallic element",
    category: "Minerals",
  },
  {
    word: "computer",
    hint: "An electronic device for storing and processing data",
    category: "Technology",
  },
  {
    word: "internet",
    hint: "A global computer network providing a variety of information and communication facilities",
    category: "Technology",
  },
  {
    word: "mobile",
    hint: "A portable telephone",
    category: "Technology",
  },
  {
    word: "television",
    hint: "An electronic device for receiving and displaying moving images",
    category: "Technology",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages bound together",
    category: "Literature",
  },
  {
    word: "newspaper",
    hint: "A printed publication containing news and information",
    category: "Literature",
  },
  {
    word: "magazine",
    hint: "A periodical publication containing articles and illustrations",
    category: "Literature",
  },
  {
    word: "cricket",
    hint: "A bat-and-ball game played on a field between two teams of eleven players",
    category: "Sports",
  },
  {
    word: "football",
    hint: "A game played by two teams of eleven players with a ball that can be kicked or carried by hand",
    category: "Sports",
  },
  {
    word: "tennis",
    hint: "A sport played with rackets and a ball on a court",
    category: "Sports",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cacao beans",
    category: "Food",
  },
  {
    word: "pizza",
    hint: "A popular dish with a flatbread base, typically topped with cheese and tomato sauce",
    category: "Food",
  },
  {
    word: "burger",
    hint: "A sandwich consisting of one or more cooked patties of ground meat",
    category: "Food",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage",
    category: "Drinks",
  },
  {
    word: "tea",
    hint: "An aromatic beverage traditionally prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis plant",
    category: "Drinks",
  },
  {
    word: "water",
    hint: "A clear, colorless, odorless, and tasteless liquid",
    category: "Drinks",
  },

  {
    word: "rainbow",
    hint: "An arc of colors seen in the sky",
    category: "Nature",
  },
  {
    word: "elephant",
    hint: "A large mammal with a trunk",
    category: "Animals",
  },
  {
    word: "giraffe",
    hint: "A tall animal with long neck and spotted coat",
    category: "Animals",
  },
  {
    word: "zebra",
    hint: "A striped horse-like animal",
    category: "Animals",
  },
  {
    word: "ocean",
    hint: "A vast body of salt water",
    category: "Geography",
  },
  {
    word: "forest",
    hint: "A large area covered with trees",
    category: "Geography",
  },
  {
    word: "guitar",
    hint: "A stringed musical instrument",
    category: "Music",
  },
  {
    word: "drum",
    hint: "A percussion instrument",
    category: "Music",
  },
  {
    word: "soccer",
    hint: "A popular sport played with a ball and feet",
    category: "Sports",
  },
  {
    word: "basketball",
    hint: "A sport played with a ball on a hoop",
    category: "Sports",
  },
  {
    word: "tennis",
    hint: "A sport played with rackets and a ball on a court",
    category: "Sports",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cacao beans",
    category: "Food",
  },
  {
    word: "pizza",
    hint: "A popular dish with a flatbread base, typically topped with cheese and tomato sauce",
    category: "Food",
  },
  {
    word: "burger",
    hint: "A sandwich consisting of one or more cooked patties of ground meat",
    category: "Food",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage",
    category: "Drinks",
  },
  {
    word: "tea",
    hint: "An aromatic beverage traditionally prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis plant",
    category: "Drinks",
  },
  {
    word: "water",
    hint: "A clear, colorless, odorless, and tasteless liquid",
    category: "Drinks",
  },
  {
    word: "jupiter",
    hint: "The largest planet in our solar system",
    category: "Space",
  },
  {
    word: "mars",
    hint: "The fourth planet from the Sun, often called the Red Planet",
    category: "Space",
  },
  {
    word: "earthquake",
    hint: "A sudden and violent shaking of the ground",
    category: "Geography",
  },
  {
    word: "volcano",
    hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust",
    category: "Geography",
  },
  {
    word: "diamond",
    hint: "The hardest known natural mineral",
    category: "Minerals",
  },
  {
    word: "gold",
    hint: "A valuable yellow precious metal",
    category: "Minerals",
  },
  {
    word: "silver",
    hint: "A lustrous white precious metal",
    category: "Minerals",
  },
  {
    word: "iron",
    hint: "A common, relatively heavy, ductile, and malleable magnetic metallic element",
    category: "Minerals",
  },
  {
    word: "computer",
    hint: "An electronic device for storing and processing data",
    category: "Technology",
  },
  {
    word: "internet",
    hint: "A global computer network providing a variety of information and communication facilities",
    category: "Technology",
  },
  {
    word: "mobile",
    hint: "A portable telephone",
    category: "Technology",
  },
  {
    word: "television",
    hint: "An electronic device for receiving and displaying moving images",
    category: "Technology",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages bound together",
    category: "Literature",
  },
  {
    word: "newspaper",
    hint: "A printed publication containing news and information",
    category: "Literature",
  },
  {
    word: "magazine",
    hint: "A periodical publication containing articles and illustrations",
    category: "Literature",
  },
  {
    word: "cricket",
    hint: "A bat-and-ball game played on a field between two teams of eleven players",
    category: "Sports",
  },
  {
    word: "football",
    hint: "A game played by two teams of eleven players with a ball that can be kicked or carried by hand",
    category: "Sports",
  },
  {
    word: "tennis",
    hint: "A sport played with rackets and a ball on a court",
    category: "Sports",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cacao beans",
    category: "Food",
  },
  {
    word: "pizza",
    hint: "A popular dish with a flatbread base, typically topped with cheese and tomato sauce",
    category: "Food",
  },
  {
    word: "burger",
    hint: "A sandwich consisting of one or more cooked patties of ground meat",
    category: "Food",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage",
    category: "Drinks",
  },
  {
    word: "tea",
    hint: "An aromatic beverage traditionally prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis plant",
    category: "Drinks",
  },
  {
    word: "water",
    hint: "A clear, colorless, odorless, and tasteless liquid",
    category: "Drinks",
  },
  {
    word: "jupiter",
    hint: "The largest planet in our solar system",
    category: "Space",
  },
  {
    word: "mars",
    hint: "The fourth planet from the Sun, often called the Red Planet",
    category: "Space",
  },
  {
    word: "earthquake",
    hint: "A sudden and violent shaking of the ground",
    category: "Geography",
  },
  {
    word: "volcano",
    hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust",
    category: "Geography",
  },
  {
    word: "diamond",
    hint: "The hardest known natural mineral",
    category: "Minerals",
  },
  {
    word: "gold",
    hint: "A valuable yellow precious metal",
    category: "Minerals",
  },
  {
    word: "silver",
    hint: "A lustrous white precious metal",
    category: "Minerals",
  },
  {
    word: "iron",
    hint: "A common, relatively heavy, ductile, and malleable magnetic metallic element",
    category: "Minerals",
  },
  {
    word: "computer",
    hint: "An electronic device for storing and processing data",
    category: "Technology",
  },
  {
    word: "internet",
    hint: "A global computer network providing a variety of information and communication facilities",
    category: "Technology",
  },
  {
    word: "mobile",
    hint: "A portable telephone",
    category: "Technology",
  },
  {
    word: "television",
    hint: "An electronic device for receiving and displaying moving images",
    category: "Technology",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages bound together",
    category: "Literature",
  },
  {
    word: "newspaper",
    hint: "A printed publication containing news and information",
    category: "Literature",
  },
];
export default questions;
