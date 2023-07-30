const router = require("express").Router();
const db = require("../_helpers/db");

const createUnmr = async (req, res) => {
  try {
    db.query(
      `INSERT INTO unmr (id, name, dob, pnr, origin, destination) VALUES(?,?,?,?,?,?) `,
      [
        req.body.id,
        req.body.name,
        req.body.dob,
        req.body.pnr,
        req.body.origin,
        req.body.destination,
      ],
      (error, result, fields) => {
        res.status(200).send({
          success: true,
          mssg: "Unmr Created.",
        });
      }
    );
  } catch (error) {
    res.status(400).send({
      success: false,
      mssg: error,
    });
  }
};

router.post("/create", createUnmr);

module.exports = router;
