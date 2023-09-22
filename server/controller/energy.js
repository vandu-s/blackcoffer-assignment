const Energy = require("../models/energy");

const getAllEnergies = async (req, res) => {
  try {
    const energy = await Energy.find({});
    res.status(200).json({
      energy,
    });
  } catch (e) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllEnergies };
