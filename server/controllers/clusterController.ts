import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const Cluster = require('../models/clusterModel');
import dashboardController from './dashboardController';

const createErrorObject = (err: any) => {
    return {
      log: 'Error in clusterController',
      message: { err: `An error occurred ${err}` },
    }
}

const clusterController = {
    getAllClusters: async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.cookies.id;
        try {
            const clusters = await Cluster.find({ userId: userId });
            res.locals.clusters = clusters;
            return next();
        }
        catch (err) {
            return next(createErrorObject(err));
        }
    },
    addCluster: async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.cookies.id;
        const { name, url } = req.body;
        try {
            const dashboards = await dashboardController.getDashboards(url);
            const newCluster = Cluster.create({
                userId: userId,
                clusterName: name,
                url: url,
                dashboards: dashboards
            })
            res.locals.newCluster = newCluster;
            return next();
        }
        catch (err) {
            return next(createErrorObject(err));
        }
    }
};

module.exports = clusterController;