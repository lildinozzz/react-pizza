export const buildFilterCondition = (query: Record<string, unknown>) => {
  const filterCondition: Record<string, unknown> = {};
  const ingredientFilters: Record<string, any> = {};

  const { dough, isNew, isConstructor, ...ingredients } = query;

  if (dough) {
    filterCondition.dough = dough;
  }

  if (isNew) {
    filterCondition.isNew = isNew === 'true';
  }

  if (isConstructor) {
    filterCondition.isConstructor = isConstructor === 'true';
  }

  Object.keys(ingredients).forEach((key) => {
    if (ingredients[key] === 'true') {
      ingredientFilters.value = ingredientFilters.value || [];
      ingredientFilters.value.push(key);
    }
  });

  return { filterCondition, ingredientFilters };
};
