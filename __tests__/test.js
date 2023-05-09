import http from 'k6/http';
import { sleep, run} from 'k6';

export default function () {
  http.get('http://localhost:9090/');
  sleep(1);
}

// run({ vus: 10, duration: '30s' });
// k6 run --vus 10 --duration 30s __tests__/test.js
//