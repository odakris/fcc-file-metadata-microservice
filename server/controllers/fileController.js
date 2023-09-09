const uploadFile = (req, res) => {
  console.log(req.file, res.body);

  try {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { uploadFile };
