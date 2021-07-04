require("./user");
require("./fee");
require("./msg")
const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型都同步完成"); 
}, (err) => {
    console.log(err)
});