const express =require("express");
const { StaffCreate, FindAllStaff, Searchstaff } = require("../Controller/Staff");
const router3 = express.Router();

router3.post("/createStaff",StaffCreate);
router3.get("/findall",FindAllStaff);
router3.post("/searchstaff",Searchstaff);
// router2.post("/findOne",FindOne);

module.exports=router3;