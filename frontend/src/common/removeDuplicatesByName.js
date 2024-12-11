export function removeDuplicatesByName(items) {
  const uniqueNames = new Set();
  const result = [];

  for (const item of items) {
    if (!uniqueNames.has(item.name)) {
      uniqueNames.add(item.name);
      result.push(item);
    }
  }

  return result;
}
