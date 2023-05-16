import { Cluster } from './types'

export const dashboards = {
  apiServer: {
    fullName: 'API Server',
    dashboardUIdKey: 'R6abPf9Zz',
    grafanaLinkDText: 'apiServer',
  },
  kubeStateMetric: {
    fullName: 'Kubelet State Metrics',
    dashboardUIdKey: 'wAfgtlsOl',
    grafanaLinkDText: 'kubeStateMetric',
  },
  nodeExporter: {
    fullName: 'Node Exporter',
    dashboardUIdKey: 'rYdddlPWk',
    grafanaLinkDText: 'nodeExporter'
  },
  kubePrometheus: {
    fullname: 'Kube Prometheus',
    dashboardUIdKey: 'PwMJtdvnz',
    grafanaLinkDText: 'kubePrometheus',
  },
}

const allMetrics = {
    
    // nodeExporter
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


    //apiServer
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


    //kubeStateMetric
    clusterPodRequested: {
      panelName: 'Cluster Pod Requested',
      dashboard: 'kubeStateMetric',
      panelId: 4,
      description: ''
    },
    clusterCPURequested: {
      panelName: 'Cluster CPU Requested',
      dashboard: 'kubeStateMetric',
      panelId: 5,
      description: ''
    },
    clusterMemoryRequested: {
      panelName: 'Cluster Memory Requested',
      dashboard: 'kubeStateMetric',
      panelId: 6,
      description: ''
    },
    availableNodeNum: {
      panelName: 'Number of Available Nodes',
      dashboard: 'kubeStateMetric',
      panelId: 88,
      description: ''
    },
    deploymentReplicas: {
        panelName: 'Deployment Replicas',
        dashboard: 'kubeStateMetric',
        panelId: 16,
        description: ''
    },
    statefulsetReplicas: {
      panelName: 'Statefulset Replicas',
      dashboard: 'kubeStateMetric',
      panelId: 73,
      description: ''
    },
    podsRunning: {
      panelName: 'Pods Running',
      dashboard: 'kubeStateMetric',
      panelId: 30,
      description: ''
    },
    containersRunning: {
      panelName: 'Containers Running',
      dashboard: 'kubeStateMetric',
      panelId: 38,
      description: ''
    },
    containerRestarts: {
      panelName: 'Container Restarts',
      dashboard: 'kubeStateMetric',
      panelId: 30,
      description: ''
    },
    hpa: {
        panelName: 'hpa',
        dashboard: 'kubeStateMetric',
        panelId: 82,
        description: ''
    },

    
    // kubePrometheus
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
}

export function grafanaIFrameGenerator(cluster: Cluster, metric: string, refresh?: number, theme?: string) {
  const dashboardUIds = cluster.dashboards;
  const grafanaUrl = cluster.url;

  if(!refresh) 
    refresh = 30;
  if(!theme) 
    theme = 'light';
  
  // included what some of the objects look like at the bottom of function for clarity
  const dbUId: string = dashboardUIds[dashboards[allMetrics[metric].dashboard].dashboardUIdKey];
  const dbText: string = dashboards[allMetrics[metric].dashboard].grafanaLinkDText;
  const panelId: string = allMetrics[metric].panel.toString();
  
  const link: string = `${grafanaUrl}/d-solo/${dbUId}/${dbText}?orgId=1&refresh=${refresh}s&theme=${theme}&panelId=${panelId}`;
  
  return link;
  
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
}

export default allMetrics;
console.log(Object.keys(allMetrics).length) // 37
