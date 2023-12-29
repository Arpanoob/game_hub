const getCroppedUrl = (RealUrl: string) => {
  const target = "media/";
  const croppedUrl =
    RealUrl.slice(0, RealUrl.indexOf(target) + target.length) +
    "crop/600/400/" +
    RealUrl.slice(RealUrl.indexOf(target) + target.length);
  return croppedUrl;
};

export default getCroppedUrl;
