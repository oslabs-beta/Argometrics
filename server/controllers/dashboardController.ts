//import types
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { DBUIds } from '../../types';

const createErrorObject = (err: any) => {
  return {
    log: 'Error in clusterController',
    message: { err: `An error occurred ${err}` },
  }
};

const dashboardController = {
  getDashboards: async (url: string) => {  // grafana url
    // user and pass default grafana host if grafana is configured as the README
    const username: string = 'admin';
    const password: string = 'prom-operator';

    // encoding these credentials to fetch from grafana
    const credentials: string = `${username}:${password}`;
    const buffer: Buffer = Buffer.from(credentials,'utf-8');
    const encodedCredentials: string = buffer.toString('base64');

    // names of the dashboards we will search for
    const dashboards = {
      apiServer: 'apiServer',
      kubeStateMetric: 'kubeStateMetric',
      kubePrometheus: 'kubePrometheus',
      nodeExporter: 'nodeExporter',
      prometheusExporter: 'prometheusExporter',
    };

    // call fetchGrafana fn
    const dashboardUIds = fetchGrafana();
    // dashboardUIds is going to be an obj
    // {
    //   apiServer: uid from grafana
    //   kubeStateMetric: uid from grafana
    //   kubePrometheus: uid from grafana
    //   nodeExporter: uid from grafana
    //   prometheusExporter: uid from grafana
    // }
    return dashboardUIds;


    async function fetchGrafana():Promise<void | any> {
      const dashboardUIds:DBUIds = {};

      // typing keys and values to k -> k is not to any
      let k: keyof typeof dashboards
      for(k in dashboards) {
        try {
          // awaiting fetch from grafana
          const data = await fetch(`${url}/api/search?query=${dashboards[k]}`,
            {
              method:'GET',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Basic ${encodedCredentials}`
              },
            }
          )
          .then(response => response.json() as Promise<any[]>)

        //   // awaiting fetched data to json shape
        //   const parsedData = await data.json();
          
        //   // add as key value pair to dashboardUIds
          dashboardUIds[k] = data[0].uid;
        }
        catch(err) {
            return createErrorObject(err);
        };
      }
      return dashboardUIds;
    }
  }
};

export default dashboardController;