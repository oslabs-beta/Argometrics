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
    // gets all clusters that belong to the userId in the cookie session from database
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
    // add a cluster to database by userId in cookie session (name and url from user required)
    addCluster: async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.cookies.session;
        const { name, url } = req.body;
        console.log('in cluster');
        try {
            const dashboards = await dashboardController.getDashboards(url);
            const newCluster = await Cluster.create({
                userId: userId,
                clusterName: name,
                url: url,
                dashboards: dashboards
            })
            res.locals.newCluster = newCluster;
            console.log('newclust', newCluster);
            return next();
        }
        catch (err) {
            return next(createErrorObject(err));
        }
    },
    // deletes a cluster given clusterId
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