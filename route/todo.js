import express from 'express';
const router = express.Router();

import { add, get, update } from '../controller/todo.js';

router.post('/add', add);
router.get('/get/:userID', get);
router.patch('/update', update);

export default router;