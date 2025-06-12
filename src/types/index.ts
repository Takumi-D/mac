interface Ingredients {
  name?: string;
  price?: number;
}

interface AdditionalIngredients {
  title: string;
  ingredients: Array<Ingredients>;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  additionalIngredients: Array<AdditionalIngredients> | null;
  gram: number;
  img: string;
  bigImg: string;
}

interface BasketProduct extends Product {
  counter?: number;
  ingredients?: Array<Ingredients> | null;
}

export { Product, AdditionalIngredients, Ingredients, BasketProduct };
