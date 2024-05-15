// import i from '../../src/assets/images'
const products = [
  {
    id: 0,
    text: "GURLI",
    type: "Pillow",
    size: '50x50 cm (20x20")',
    rating: "4",
    reviews: "2657",
    options: "2",
    amount: '1', 
    img: "/images/yellow-pillow.jpg",
    price: "3",
    desc: "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
    articleNum: "705.451.92",
    availability: 'available for Home delivery', 
    optionSelected: 0, 
    options: [
      {
        id1: 0,
        img1: "/images/yellow-pillow.jpg",
        color: 'yellow',
        examples: [
          { id2: 0, img2: "/images/examples/yellow-pillow.jpg" },
          { id2: 1, img2: "/images/examples/yellow-pillow-2.jpg" },
          { id2: 2, img2: "/images/examples/yellow-pillow-3.jpg" },
          { id2: 3, img2: "/images/examples/yellow-pillow-4.jpg" },
          { id2: 4, img2: "/images/examples/yellow-pillow-5.jpg" },
        ],
      },
      {
        id1: 1,
        img1: "/images/green-pillow.jpg",
        color: 'green',
        examples: [
          { id2: 0, img2: "/images/examples/green-pillow.jpg" },
          { id2: 1, img2: "/images/examples/green-pillow-2.jpg" },
          { id2: 2, img2: "/images/examples/green-pillow-3.jpg" },
          { id2: 3, img2: "/images/examples/green-pillow-4.jpg" },
        ],
      },
    ],
  },
  {
    id: 1,
    text: "GRADVIS",
    type: "Vase",
    size: '21 cm (8 1/4 ")',
    rating: "5",
    reviews: "40",
    options: "2",
    amount: '1',
    img: "/images/vase.jpg",
    price: "3",
    desc: "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
    articleNum: "705.451.92",
    availability: 'available for Home delivery',
    optionSelected: 0, 
    options: [
      {
        id1: 0,
        img1: "/images/vase.jpg",
        color: 'blue',
        examples: [
          { id2: 0, img2: "/images/examples/vase.jpg" },
          { id2: 1, img2: "/images/examples/vase-blue-1.jpg" },
          { id2: 2, img2: "/images/examples/vase-blue-2.jpg" },
          { id2: 3, img2: "/images/examples/vase-blue-3.jpg" },
        ],
      },
      {
        id1: 1,
        img1: "/images/vase-pink.jpg",
        color: 'pink',
        examples: [
          { id2: 0, img2: "/images/examples/vase-pink.jpg" },
          { id2: 1, img2: "/images/examples/vase-pink-2.png" },
          { id2: 2, img2: "/images/examples/vase-pink-3.png" },
          { id2: 3, img2: "/images/examples/vase-pink-4.png" },
        ],
      },
    ],
  },
  {
    id: 2,
    text: "HALVTOM",
    type: "Bottle with pour spout",
    size: '19 cm (7 1/2 ")',
    rating: "8",
    reviews: "10",
    options: "1",
    amount: '1', 
    img: "/images/bottle.jpg",
    price: "4",
    desc: "HALVTOM jars for spices and oil/vinegar create a trendy restaurant feel at home. The sculptural shape and the brown glass mean that you’ll happily have them visible by the stovetop and on the dining table.",
    articleNum: "005.234.62",
    availability: 'available for Home delivery', 
    optionSelected: 0, 
    options: [
      {
        id1: 0,
        img1: "/images/bottle.jpg",
        color: 'brown',
        examples: [
          { id2: 0, img2: "/images/examples/bottle.jpg" },
          { id2: 1, img2: "/images/examples/bottle-1.jpg" },
          { id2: 2, img2: "/images/examples/bottle-2.jpg" },
          { id2: 3, img2: "/images/examples/bottle-3.jpg" },
        ],
      },
    ],
  },
  {
    id: 3,
    text: "KLIPPAN",
    type: "Loveseat, Vansbro",
    size: "",
    rating: "4",
    reviews: "152",
    options: "2",
    amount: '1', 
    img: "/images/sofa-yellow.jpg",
    price: "4",
    desc: "We launched KLIPPAN sofa in the 1980s and it’s still a favorite. It's comfortable, fits almost everywhere and has many covers to choose from. A modern and timeless classic!",
    articleNum: "694.965.69",
    availability: 'available for Home delivery', 
    optionSelected: 0, 
    options: [
      {
        id1: 0,
        img1: "/images/sofa-yellow.jpg",
        color: 'yellow',
        examples: [
          { id2: 0, img2: "/images/examples/sofa-yellow.jpg" },
          { id2: 1, img2: "/images/examples/sofa-yellow-2.jpg" },
          { id2: 2, img2: "/images/examples/sofa-yellow-3.jpg" },
          { id2: 3, img2: "/images/examples/sofa-yellow-4.jpg" },
          { id2: 4, img2: "/images/examples/sofa-yellow-5.jpg" },
        ],
      },
      {
        id1: 1,
        img1: "/images/sofa-grey.jpg",
        color: 'grey',
        examples: [
          { id2: 0, img2: "/images/examples/sofa-grey.jpg" },
          { id2: 1, img2: "/images/examples/sofa-grey-2.png" },
          { id2: 2, img2: "/images/examples/sofa-grey-3.png" },
          { id2: 3, img2: "/images/examples/sofa-grey-4.png" },
        ],
      },
    ],
  },
];
export default products;
