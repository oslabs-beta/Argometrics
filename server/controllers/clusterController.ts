import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const Cluster = require('../models/clusterModel');

const clusterController = {
    getAllClusters: async (req: Request, res: Response, next: NextFunction) => {

    }
};

module.exports = clusterController;