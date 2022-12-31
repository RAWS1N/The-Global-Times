export function filterData(data) {
  const newsWithImage = data.data.filter(item => item.image);
  const newsWithoutImage = data.data.filter(item => !item.image);
  const sortedRespone = {
    pagination:data.pagination,
    data : [newsWithImage,...newsWithoutImage].flat()
  }
  return sortedRespone
}


