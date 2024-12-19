export const buildFilterCondition = (query: Record<string, unknown>) => {
  const filterCondition: Record<string, unknown> = {};

  Object.keys(query).forEach((key) => {
    const value = query[key];

    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      filterCondition[key] = value === 'true';
    } else if (value && key !== 'ingredients') {
      filterCondition[key] = value;
    }
  });

  return filterCondition;
};
