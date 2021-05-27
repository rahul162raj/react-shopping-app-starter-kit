export function paginate(Items, currentIndex, pageSize) {
  const filteredItems = [...Items];
  return filteredItems.slice(
    (currentIndex - 1) * pageSize,
    currentIndex * pageSize
  );
}
