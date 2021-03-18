import express from 'express';
const router = express.Router();

import { add, get, update, deleteTodo, deleteAll, markAll } from '../controller/todo.js';

router.post('/add', add);
router.get('/get/:userID', get);
router.patch('/update', update);
router.get('/delete/:todoID', deleteTodo);
router.get('/delete-all/:userID', deleteAll);
router.patch('/mark-all/:userID', markAll);

export default router;