const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../model/userSchema");
const Prop = require("../model/propSchema");

router.get("/", (req, res) => {
  res.send("Hello from Server router");
});

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    console.log(req.body);

    const user = new User({ fname, lname, email, password });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  User.find({ email: req.body.email, password: req.body.password })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res.status(404).send({ message: "Note not found" });
      }
    }) //CLOSE THEN
    .catch((err) => {
      return res
        .status(500)
        .send({ message: "DB Problem..Error in Retriving with id " });
    }); //CLOSE CATCH
});

router.get("/disp", (req, res) => {
  Prop.find()
    .then((getalldocumentsfrommongodb) => {
      res.status(200).send(getalldocumentsfrommongodb);
    }) //CLOSE THEN
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error in Fetch Employee " });
    }); //CLOSE CATCH
}); //CLOSE CALLBACK FUNCTION BODY Line 110

router.get("/add", (req, res) => {
  res.send("Hello from add");
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../../Frontend/src/uploads');
  },
  filename : (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const upload = multer({storage: storage});

router.post("/add", upload.single("image"), (req, res) => {
  // try {
  //   const { title, image, city, location, price, bedroom, bathroom, area } = req.body;
  //   console.log(req.body);
  //   const prop = new Prop({
  //     title,
  //     image,
  //     city,
  //     location,
  //     price,
  //     bedroom,
  //     bathroom,
  //     area,
  //   });
  //   await prop.save();
  //   res.status(201).json({ message: "Property Added Successfully" });
  // } catch (err) {
  //   console.log(err);
  // }
  //console.log(req.body);
  //res.json({message: req.body});
  const propobj = new Prop({
    title: req.body.title,
    image: req.file.originalname,
    city: req.body.city,
    location: req.body.location,
    price: req.body.price,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    area: req.body.area,
  });//CLOSE EmpModel
  //INSERT/SAVE THE RECORD/DOCUMENT
  propobj.save()
    .then(inserteddocument => {
      res.status(201).json({ message: "Property Added Successfully" });
    })//CLOSE THEN
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Employee Save ' });
      console.log(err);
    });//CLOSE CATCH
});

router.delete("/delete/:title", (req, res) => {
  Prop.findOneAndRemove({ title: req.params.title })
    .then((deleteddocument) => {
      if (deleteddocument != null) {
        res.status(200).send("Property Deleted Successfully!");
      } else {
        res.status(404).send("Invalid Name");
      }
    }) //CLOSE THEN
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Delete ",
      });
    });
});

module.exports = router;
