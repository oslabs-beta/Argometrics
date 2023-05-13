import express from 'express';
const clusterController = require('../controllers/clusterController') 
const router = express.Router();

//TODO: check endpoint names with frontend

router.get('/get', clusterController.getAllClusters, (req, res) => {
    res.status(200).json(res.locals.clusters);
})

router.post('/add', clusterController.addCluster, (req, res) => {
    return res.status(200).json(res.locals.newCluster)
})


export default router;