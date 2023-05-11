import express from 'express';
const clusterController = require('../controllers/clusterController') 
const router = express.Router();

//TODO: check endpoint names with frontend

router.get('/getClusters', clusterController.getAllClusters, (req, res) => {
    res.status(200).json(res.locals.clusters);
})



export default router;