const similarPodcasts = (currentItem: any, allItems: any, slug: string) => {
  let tags: [] = [];

  // set tags
  if (currentItem.tags.length > 0) {
    tags = currentItem.tags;
  }

  // filter by tags
  const filterByTags = allItems.filter((item: { tags: string }) =>
    tags.find((tag) => item.tags.includes(tag))
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarPodcasts;
