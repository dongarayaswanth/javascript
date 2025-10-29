/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else {
    return 'Not done, please wait.';
  }
}
export function preparationTime(layers,value = 2) {
  return layers.length*value;
}
export function quantities(layers) {
  let noodles=0;
  let sauce = 0;
  for (var i of layers){
    if (i === 'noodles'){
      noodles += 50;
    }
    else if(i === 'sauce'){
      sauce += 0.2;
    }
  }
  return{
    noodles: noodles,
    sauce: sauce,
  };
  
}
export function addSecretIngredient(friendsList, myList) {
  const secret = friendsList.at(-1);
  myList.push(secret);
}

export function scaleRecipe(recipe, portions) {
  const newRecipe = {};

  for (const ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }

  return newRecipe;
}
