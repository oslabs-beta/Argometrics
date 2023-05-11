//import types
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const createErrorObject = (err: any) => {
    return {
      log: 'Error in clusterController',
      message: { err: `An error occurred ${err}` },
    }
};

const dashboardController = {
    getDashboards: async (url: string) => {
        const dashboardSearch = {
            nodeExporterUId: 'Node%20Exporter%20/%20Nodes'
        };
        return async () => {
            const dashboardUIds = {};
            // for (let key in dashboardSearch) {
            //     try {
            //         const data = await fetch(`${url}/api/search?query=${dashboardSearch[key]}`, {
            //             method: 'GET',
            //             headers: {
            //                 Accept: 'application/json',
            //                 'Content-Type': 'application/json'
            //             }
            //         })
            //         const parsedData = await data.json();
            //         dashboardUIds[key] = parsedData[0].uid;
            //     }
            //     catch (err) {
            //         return createErrorObject(err);
            //     }
            //     return dashboardUIds;
            // }
        }
    }
};

export default dashboardController;