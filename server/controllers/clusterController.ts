import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import {Cluster} from '../models/clusterModel';
import dashboardController from './dashboardController';

const createErrorObject = (err: any) => {
    return {
      log: 'Error in clusterController',
      message: { err: `An error occurred ${err}` },
    }
}

const clusterController = {
    getAllClusters: async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.cookies.session;
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
        const userId = req.cookies.session;
        const { name, url } = req.body;
        try {
            const dashboards = await dashboardController.getDashboards(url);
            const newCluster = await Cluster.create({
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
    },
    deleteCluster: async (req: Request, res: Response, next: NextFunction) => {
        // takes in cluster id 
        const clusterId = req.params.ClusterId;
        try {
            const deletedCluster = await Cluster.findOneAndDelete({ _id: clusterId });
            res.locals.deletedCluster = deletedCluster;
            return next();
        }
        catch (err) {
            return next(createErrorObject(err));
        }
    },
};

module.exports = clusterController;