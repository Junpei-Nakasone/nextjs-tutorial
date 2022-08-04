export default (req, res) => {
  const response = {
    "response": 'this is response'
  }
  res.status(200).json(response)
}
