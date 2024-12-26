export const isImageUrl = (url) => {
  const imageExtensions = /\.(png|jpe?g|gif|svg)$/i;
  return typeof url === "string" && imageExtensions.test(url);
};
