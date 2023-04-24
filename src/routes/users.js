import * as mw from "../controllers/users.js";
import express from "express";
const router = express.Router();

const basePath = "/";
const singlePath = `${basePath}:_id`;

router.get(singlePath, ...mw.read);
router.get(basePath, ...mw.list);
router.post(basePath, ...mw.create);
router.delete(singlePath, ...mw._delete);
router.put(singlePath, ...mw.update);
export default router;
