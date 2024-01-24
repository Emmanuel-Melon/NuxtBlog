import { Router } from "express";

import blogs from "../blogs/router";
import users from "../users/router";


const router = Router();

router.use("/blogs", blogs);
router.use("/users", users);

export default router;