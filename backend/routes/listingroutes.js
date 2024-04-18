import express from 'express';

import { createListing, deleteListing, getListing, getListings, updateListing} from '../controller/listingcontroller.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create',  createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);


export default router;



