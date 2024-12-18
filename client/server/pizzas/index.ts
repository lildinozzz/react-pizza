import { TProduct } from "@shared/types/types";

export const pizzas: TProduct[] = [
  {
    id: 1,
    prices: [395, 729, 1220],
    name: "Сырный цыпленок",
    dough: "traditional",
    type: "new",
    ingredients:
      "Цыпленок, моцарелла, сыры чеддер, пармезан, сырный соус, томаты, соус альфредо, чеснок", // Строка
    imageUrl: `/images/pizza/1.png`,
    categoryId: 6,
    isConstructor: true,
  },
  {
    id: 2,
    prices: [449, 820, 1400],
    name: "Диабло",
    dough: "thin",
    type: "new",
    ingredients:
      "Острая чоризо, халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла", // Строка
    imageUrl: `/images/pizza/2.png`,
    categoryId: 3,
    isConstructor: false,
  },
  {
    id: 3,
    prices: [399, 730, 1235],
    name: "Чизбургер-пицца",
    dough: "thin",
    type: "new",
    ingredients:
      "Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла", // Строка
    imageUrl: `/images/pizza/3.png`,
    categoryId: 2,
    isConstructor: false,
  },
  {
    id: 4,
    prices: [419, 799, 1399],
    name: "Маргарита",
    dough: "traditional",
    type: "new",
    ingredients: "Моцарелла, помидоры, базилик, оливковое масло, томатный соус", // Строка
    imageUrl: `/images/pizza/4.png`,
    categoryId: 5,
    isConstructor: false,
  },
  {
    id: 5,
    prices: [469, 899, 1499],
    name: "Вегетарианская",
    dough: "thin",
    type: "new",
    ingredients:
      "Грибы, сладкий перец, оливки, томаты, красный лук, моцарелла, томатный соус", // Строка
    imageUrl: `/images/pizza/5.png`,
    categoryId: 5,
    isConstructor: false,
  },
  {
    id: 6,
    prices: [499, 929, 1550],
    name: "Пепперони",
    dough: "thin",
    type: "new",
    ingredients: "Пепперони, моцарелла, томаты, соус маринара", // Строка
    imageUrl: `/images/pizza/6.png`,
    categoryId: 2,
    isConstructor: false,
  },
  {
    id: 7,
    prices: [459, 890, 1500],
    name: "Гавайская",
    dough: "thin",
    type: "new",
    ingredients: "Ветчина, ананасы, моцарелла, соус барбекю, помидоры", // Строка
    imageUrl: `/images/pizza/7.png`,
    categoryId: 4,
    isConstructor: false,
  },
  {
    id: 8,
    prices: [499, 930, 1580],
    name: "Пепперони",
    dough: "traditional",
    type: "constructor",
    ingredients: "Пепперони, моцарелла, томаты, перец, соус пицца, орегано", // Строка
    imageUrl: `/images/pizza/8.png`,
    categoryId: 2,
    isConstructor: false,
  },
];
