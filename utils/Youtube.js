module.exports = class Youtube {
  getThumbnailUrl(id) {
    return "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
  }
};
