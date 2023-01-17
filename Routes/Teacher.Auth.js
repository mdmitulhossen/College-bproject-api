const express =require("express");
const { teacherCreate, FindAllTeacher, SearchTeacher } = require("../Controller/Teacher");
const router2 = express.Router();

router2.post("/createTeacher",teacherCreate);
router2.get("/findall",FindAllTeacher);
router2.post("/searchTeacher",SearchTeacher);
// router2.post("/findOne",FindOne);

module.exports=router2;