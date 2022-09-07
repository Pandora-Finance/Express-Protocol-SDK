const royalties2d = async (royalitiesArr) => {
  let royalitiesList = royalitiesArr.map((item) => [item[0], item[1] * 100]);

  return royalitiesList;
};

const royalties3d = async (royalitiesArr) => {
  let royalitiesList = royalitiesArr.map((item) => [
    [item[0][0], item[0][1] * 100],
  ]);

  return royalitiesList;
};

module.exports = {
  royalties2d,
  royalties3d,
};
