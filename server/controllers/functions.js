const AWS = require("aws-sdk");
AWS.config.loadFromPath("./awsconfig.json");
const s3 = new AWS.S3();

function test1(str) {
  return str.replace(/_[a-z]/g, (match) => {
    return match[1].toUpperCase();
  });
}
module.exports = {
  snakeToCamal: (obj) => {
    if (typeof obj !== "object") return test1(obj);
    if (Array.isArray(obj)) {
      if (obj[0] !== Object) return obj;
      return obj.map((el) => {
        return test2(el);
      });
    } else {
      if (obj === null) return null;
      const a = Object.entries(obj);
      return a.reduce((acc, cur) => {
        let b;
        if (typeof cur[1] === "object") {
          b = test2(cur[1]);
        } else {
          b = cur[1];
        }

        return Object.assign(acc, { [test1(cur[0])]: b });
      }, {});
    }
  },
  DeleteImageinTable: (image) => {
    const imageArr = image.split("/");
    const imageKey = imageArr[imageArr.length - 1];
    const params = {
      Bucket: "haveit",
      Key: imageKey,
    };
    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err.stack);
      else console.log();
    });
  },
};
