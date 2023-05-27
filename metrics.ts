import { Cluster } from './types'

export const dashboards: any = {
  apiServer: {
    fullName: 'API Server',
    // dashboardUIdKey: 'R6abPf9Zz',
    dashboardUIdKey: 'apiServerUId',
    grafanaLinkDText: 'apiServer',
  },
  kubeStateMetrics: {
    fullName: 'Kubelet State Metrics',
    // dashboardUIdKey: 'wAfgtlsOl',
    dashboardUIdKey: 'kubeStateMetricUId',
    grafanaLinkDText: 'kubeStateMetrics',
  },
  nodeExporter: {
    fullName: 'Node Exporter',
    // dashboardUIdKey: 'rYdddlPWk',
    dashboardUIdKey: 'nodeExporterUId',
    grafanaLinkDText: 'nodeExporter'
  },
  kubePrometheus: {
    fullname: 'Kube Prometheus',
    // dashboardUIdKey: 'PwMJtdvnz',
    dashboardUIdKey: 'kubePrometheusUId',
    grafanaLinkDText: 'kubePrometheus',
  },
  keda: {
    fullname: 'Keda',
    dashboardUIDkey: 'kedaUId',
    grafanaLinkDText: 'keda'
  }
}

const allMetrics: any = {
    
    // nodeExporter
    nodeExporter: {
      cpuGauge: {
        panelName: 'CPU Busy',
        dashboard: 'nodeExporter',
        panelId: 20,
        description: ''
      },
      ramGauge: {
        panelName: 'Ram Used',
        dashboard: 'nodeExporter',
        panelId: 16,
        description: ''
      },
      cpuCores: {
        panelName: 'CPU Cores',
        dashboard: 'nodeExporter',
        panelId: 14,
        description: ''
      },
      upTime: {
        panelName: 'Uptime',
        dashboard: 'nodeExporter',
        panelId: 15,
        description: ''
      },
      totalRam: {
        panelName: 'RAM Total',
        dashboard: 'nodeExporter',
        panelId: 75,
        description: ''
      },
      memory: {
        panelName: 'Kernel/CPU Memory',
        dashboard: 'nodeExporter',
        panelId: 160,
        description: ''
      },
      processStatus: {
        panelName: 'Process Status',
        dashboard: 'nodeExporter',
        panelId: 62,
        description: ''
      },
      cpuUsage: {
        panelName: 'CPU',
        dashboard: 'nodeExporter',
        panelId: 3,
        description: '',
      },
      memoryStack: {
        panelName: 'Memory Stack',
        dashboard: 'nodeExporter',
        panelId: 24,
        description: '',
      },
      networkTraffic: {
        panelName: 'Network Traffic',
        dashboard: 'nodeExporter',
        panelId: 84,
        description: '',
      },
      diskSpace: {
        panelName: 'Disk Space Used',
        dashboard: 'nodeExporter',
        panelId: 156,
        description: '',
      },
      diskIO: {
        panelName: 'Disk IOps',
        dashboard: 'nodeExporter',
        panelId: 229,
        description: '',
      },
      ioUsage: {
        panelName: 'I/O Usage Read/Write',
        dashboard: 'nodeExporter',
        panelId: 42,
        description: '',
      },
      ioUtil: {
        panelName: 'I/O Utilization',
        dashboard: 'nodeExporter',
        panelId: 127,
        description: '',
      },
      scrapeTime: {
        panelName: 'Node Exporter Scape Time',
        dashboard: 'nodeExporter',
        panelId: 40,
        description: ''
      },
    },

    //apiServer
    apiServer: {
      requestRate: {
        panelName: 'Request Rate',
        dashboard: 'apiServer',
        panelId: 8,
        description: ''
      },
      workqueueServiceTime: {
        panelName: 'Workqueue Service Time',
        dashboard: 'apiServer',
        panelId: 10,
        description: ''
      },
      requestLatency: {
        panelName: 'Request Latency',
        dashboard: 'apiServer',
        panelId: 2,
        description: ''
      },
      workqueueProcessingTime: {
        panelName: 'Workqueue Processing Time',
        dashboard: 'apiServer',
        panelId: 12,
        description: ''
      },
      etcdRequestLatency: {
        panelName: 'etcd Request Latency',
        dashboard: 'apiServer',
        panelId: 4,
        description: ''
      },
      etcdHelperCacheHitRatio: {
        panelName: 'etcd Helper Cache Hit Ratio',
        dashboard: 'apiServer',
        panelId: 6,
        description: ''
      },
    },


    //kubeStateMetric
    kubeStateMetrics: {
      clusterPodRequested: {
        panelName: 'Cluster Pod Requested',
        dashboard: 'kubeStateMetrics',
        panelId: 4,
        description: ''
      },
      clusterCPURequested: {
        panelName: 'Cluster CPU Requested',
        dashboard: 'kubeStateMetrics',
        panelId: 5,
        description: ''
      },
      clusterMemoryRequested: {
        panelName: 'Cluster Memory Requested',
        dashboard: 'kubeStateMetrics',
        panelId: 6,
        description: ''
      },
      availableNodeNum: {
        panelName: 'Number of Available Nodes',
        dashboard: 'kubeStateMetrics',
        panelId: 88,
        description: ''
      },
      deploymentReplicas: {
          panelName: 'Deployment Replicas',
          dashboard: 'kubeStateMetrics',
          panelId: 16,
          description: ''
      },
      statefulsetReplicas: {
        panelName: 'Statefulset Replicas',
        dashboard: 'kubeStateMetrics',
        panelId: 73,
        description: ''
      },
      podsRunning: {
        panelName: 'Pods Running',
        dashboard: 'kubeStateMetrics',
        panelId: 30,
        description: ''
      },
      containersRunning: {
        panelName: 'Containers Running',
        dashboard: 'kubeStateMetrics',
        panelId: 38,
        description: ''
      },
      containerRestarts: {
        panelName: 'Container Restarts',
        dashboard: 'kubeStateMetrics',
        panelId: 30,
        description: ''
      },
      hpa: {
          panelName: 'hpa',
          dashboard: 'kubeStateMetrics',
          panelId: 82,
          description: ''
      },
   },

    
    // kubePrometheus
    kubePrometheus: {
      overallCoreUsage: {
        panelName: 'Overall Core Usage',
        dashboard: 'kubePrometheus',
        panelId: 44,
        description: ''
      },
      cpuProportion: {
        panelName: 'Container CPU Proportion',
        dashboard: 'kubePrometheus',
        panelId: 45,
        description: ''
      },
      microPod: {
        panelName: 'Microservice Pod',
        dashboard: 'kubePrometheus',
        panelId: 74,
        description: ''
      },
      nodeMemoryDetails: {
        panelName: 'All: Node Memory Details',
        dashboard: 'kubePrometheus',
        panelId: 52,
        description: ''
      },
      usageNamespace: {
        panelName: 'Usage (container number) Namespace',
        dashboard: 'kubePrometheus',
        panelId: 57,
        description: ''
      },
      podMemory: {
        panelName: 'All: Pod Memory Limit (Memory Usage)',
        dashboard: 'kubePrometheus',
        panelId: 47,
        description: ''
      },
    },

    keda: {
      scalerMetricValue: {
       panelName: 'Scaler Metric Value',
       dashboard: 'keda',
       panelId: 5,
       description: ''
      },
      scalerTotalErrors: {
        panelName: 'Scaler Total Errors',
        dashboard: 'keda',
        panelId: 4,
        description: ''
       },
       scalerErrors: {
        panelName: 'Scaler Errors',
        dashboard: 'keda',
        panelId: 3,
        description: ''
       },
       hpaCurrentMaxReplicas: {
        panelName: 'HPA Current/Max Replicas',
        dashboard: 'keda',
        panelId: 15,
        description: ''
       },
       changesInReplicas: {
        panelName: 'Changes In Replicas',
        dashboard: 'keda',
        panelId: 11,
        description: ''
       },
    }
}


// add dash as parameter to generator?
export function grafanaIFrameGenerator(cluster: Cluster, metric: string, iDash: string, refresh?: number, theme?: string) {
  const dashboardUIds: any = cluster.dashboards;
  const grafanaUrl: any = cluster.url;

  if (!refresh) refresh = 30;
  if (!theme) theme = 'dark';
  
  // included what some of the objects look like at the bottom of function for clarity
  const dbUId: string = dashboardUIds[ dashboards[ iDash ].dashboardUIdKey ]
  const dbText: string = dashboards[ iDash ].grafanaLinkDText
  const panelId: string = allMetrics[iDash][metric].panelId.toString()

  // const dbUId: string = dashboardUIds[dashboards[allMetrics[metric].dashboard].dashboardUIdKey];
  // const dbText: string = dashboards[allMetrics[metric].dashboard].grafanaLinkDText;
  // const panelId: string = allMetrics[metric].panelId.toString();

  // iDash is toggledDashboard string from client
  const link: string = `${grafanaUrl}/d-solo/${dbUId}/${dbText}?orgId=1&refresh=${refresh}s&theme=${theme}&panelId=${panelId}`;
  
  return link;

}

export default allMetrics;
// console.log(Object.keys(allMetrics).length) // 37

  // export type DashboardUIds = {
  //   apiServer: {
  //     dashboardUIDKey: string,
  //     grafanaLinkDText: string
  //   },
  //   kubeStateMetric: {
  //     dashboardUIDKey: string,
  //     grafanaLinkDText: string
  //   },
  //   kubePrometheus: {
  //     dashboardUIDKey: string,
  //     grafanaLinkDText: string
  //   },
  //   nodeExporter: {
  //     dashboardUIDKey: string,
  //     grafanaLinkDText: string
  //   },
  //   prometheusExporter: {
  //     dashboardUIDKey: string,
  //     grafanaLinkDText: string
  //   },
  // }
        // export const dashboards = {
        //   apiServer: {
        //     fullName: 'API Server',
        //     dashboardUIdKey: 'R6abPf9Zz',
        //     grafanaLinkDText: 'apiServer',
        //   },
        //   kubeStateMetric: {
        //     fullName: 'Kubelet State Metrics',
        //     dashboardUIdKey: 'wAfgtlsOl',
        //     grafanaLinkDText: 'kubeStateMetric',
        //   },
        //   nodeExporter: {
        //     fullName: 'Node Exporter',
        //     dashboardUIdKey: 'rYdddlPWk',
        //     grafanaLinkDText: 'nodeExporter'
        //   },
        //   prometheusExporter: {
        //     fullName: 'Prometheus',
        //     dashboardUIdKey: 'nUlQfXolp',
        //     grafanaLinkDText: 'prometheusExporter',
        //   },
        //   kubePrometheus: {
        //     fullname: 'Kube Prometheus',
        //     dashboardUIdKey: 'PwMJtdvnz',
        //     grafanaLinkDText: 'kubePrometheus',
        //   },
        // }