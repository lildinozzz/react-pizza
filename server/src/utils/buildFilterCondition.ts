export const buildFilterCondition = (query: Record<string, unknown>) => {
  const filterCondition: Record<string, unknown> = {};

  if (query.dough) {
    filterCondition.dough = query.dough;
  }

  if (query.isNew) {
    filterCondition.isNew = query.isNew === 'true';
  }

  if (query.isConstructor) {
    filterCondition.isConstructor = query.isConstructor === 'true';
  }

  return filterCondition;
};
