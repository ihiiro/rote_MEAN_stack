const getUsersApi = (req, res) => {
  res.send('<h1>users API</h1>');
}

const getPostsApi = (req, res) => {
  res.send('<h1>posts API</h1>');
}

const getMessagesApi = (req, res) => {
  res.send('<h1>messages API</h1>');
}

const getNetworksApi = (req, res) => {
  res.send('<h1>networks API</h1>');
}

module.exports = {
  getUsersApi,
  getPostsApi,
  getMessagesApi,
  getNetworksApi,
};
