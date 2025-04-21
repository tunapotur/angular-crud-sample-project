const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/angularcrudsample";

//MONGODB_URI=mongodb://localhost:27017/angularcrudsample

const connection = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb bağlantısı başarılı!"))
    .catch((err) => console.log("Bağlantı Hatası! Hata: " + err.message));
};

module.exports = connection;
