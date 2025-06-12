const data = [
  {
    id: 1,
    name: 'Цезарь Ролл',
    price: 242,
    description:
      '100% белое куриное мясо в хрустящей панировке, ломтик помидора, листья салата и ломтики твёрдого сыра, заправленные специальным соусом и завёрнутые в пшеничную лепешку',
    additionalIngredients: [
      {
        title: 'Выберите опции "Для сандвичей (компоненты)"',
        ingredients: [
          {
            name: 'Убрать "Сыр Тертый"',
            price: 0,
          },
          {
            name: 'Убрать "Салат"',
            price: 0,
          },
          {
            name: 'Убрать "Стрипсы"',
            price: 0,
          },
          {
            name: 'Убрать "Помидор"',
            price: 0,
          },
          {
            name: 'Убрать "Соус Чикен"',
            price: 0,
          },
        ],
      },
    ],
    gram: 211,
    img: 'CaesarRoll',
    bigImg: 'BigCaesarRoll.png',
  },
  {
    id: 2,
    name: 'Апельсиновый сок Большой',
    price: 176,
    description: 'Свежевосстановленный апельсиновый сок',
    additionalIngredients: null,
    gram: 500,
    img: 'OrangeJuiceLarge',
    bigImg: 'BigOrangeJuiceLarge.png',
  },
  {
    id: 3,
    name: 'Фиш Бургер',
    price: 176,
    description:
      'Филе хорошо прожаренной рыбы (семейства тресковых), которое подается на пропаренной булочке с половинкой кусочка сыра Чеддер, заправленной специальным соусом Тар-Тар',
    additionalIngredients: [
      {
        title: 'Выберите опции "Для сандвичей (компоненты)"',
        ingredients: [
          {
            name: 'Соус Тар-Тар',
            price: 22,
          },
        ],
      },
      {
        title: 'Исключить опции "Для сандвичей (компоненты)"',
        ingredients: [
          {
            name: 'Убрать "Сыр"',
            price: 0,
          },
          {
            name: 'Убрать "Соус Тар-Тар"',
            price: 0,
          },
          {
            name: 'Убрать "Рыбная котлета"',
            price: 0,
          },
        ],
      },
    ],
    gram: 133,
    img: 'FishBurger',
    bigImg: 'BigFishBurger.png',
  },
  {
    id: 4,
    name: 'Чизбургер',
    price: 110,
    description:
      'Рубленый бифштекс из натуральной цельной говядины с кусочками сыра Чеддер на карамелизованной булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика',
    additionalIngredients: [
      {
        title: 'Исключить опции "Для сандвичей (компоненты)"',
        ingredients: [
          {
            name: 'Убрать "Сыр"',
            price: 0,
          },
          {
            name: 'Убрать "Бифштекс"',
            price: 0,
          },
          {
            name: 'Убрать "Соль и перец"',
            price: 0,
          },
          {
            name: 'Убрать "Лук восст."',
            price: 0,
          },
          {
            name: 'Убрать "Горчица"',
            price: 0,
          },
          {
            name: 'Убрать "Кетчуп"',
            price: 0,
          },
          {
            name: 'Убрать "Огурец маринов."',
            price: 0,
          },
        ],
      },
      {
        title: 'Выберите опции "Для сандвичей (компоненты)"',
        ingredients: [
          {
            name: 'Горчица',
            price: 22,
          },
          {
            name: 'Кетчуп',
            price: 22,
          },
          {
            name: 'Сыр',
            price: 22,
          },
          {
            name: 'Халапеньо',
            price: 22,
          },
        ],
      },
    ],
    gram: 117,
    img: 'Cheeseburger',
    bigImg: 'BigCheeseburger.png',
  },
  {
    id: 5,
    name: 'Санрайз Клубника-кактус',
    price: 196,
    description:
      'Яркий напиток на основе апельсинового сока с сиропом, сочетающим вкус спелой клубники и освежающие нотки кактуса.',
    additionalIngredients: null,
    gram: 300,
    img: 'SunriseStrawberryCactus',
    bigImg: 'SunriseStrawberryCactus.png',
  },
];

export default data;
