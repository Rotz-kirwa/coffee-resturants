// This file ensures Vercel recognizes this as a Node.js project
module.exports = (req, res) => {
  res.writeHead(301, { Location: '/index.html' });
  res.end();
};