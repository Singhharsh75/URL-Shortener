import express from 'express';
import { getOriginalController } from '../controllers/getOriginalUrlController.js';

const router=express.Router();

router.get('/:encoded',getOriginalController)

export default router;

