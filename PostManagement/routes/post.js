const express = require("express");
const router = express.Router();

const {
  addpost,
  findAllPosts,
  findPostById,
  stats,
  percent,
  findPostByIdHost,
  signalerpost,
  deletePost,
  IdHostByIdPost,
  UpdatePostById,
  SetDate,
  UpdatePostAvailability,

} = require("../controllers/post");

const { addrating, addcomment } = require("../controllers/rating");
const {
  addnotification,
} = require("../../AccountManagement/controllers/notification");

router.get("/deletePost", deletePost);
router.post("/addnotification", addnotification);
router.post("/findPostByIdHost", findPostByIdHost);
router.post("/signalerpost", signalerpost);
router.get("/stats", stats);
router.get("/percent", percent);
router.put("/addrating", addrating);
router.put("/addcomment", addcomment);
router.post("/addpost", addpost);
router.get("/findAllPosts", findAllPosts);
router.get("/findPostById/:id", findPostById);
router.patch("/UpdatePostStatus", UpdatePostStatus);
router.patch("/UpdatePostById/:id", UpdatePostById);
router.patch("/UpdatePostAvailability/:id", UpdatePostAvailability);

router.get("/IdHostByIdPost", IdHostByIdPost);

//agent
router.post("/setdate", SetDate);

module.exports = router;
