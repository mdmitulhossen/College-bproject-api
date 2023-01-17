const express =require("express");
const { signUp, signIn,logout, Find, FindOne, SearchStudent } = require("../Controller/Student.js");
const { requiredSignIn } = require("../helper/commonMiddleware.js");
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",signIn);
router.get("/logout",requiredSignIn,logout);
router.get("/findall",Find);
router.post("/findOne",FindOne);
router.post("/searchstudent",SearchStudent);

module.exports=router;