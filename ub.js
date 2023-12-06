import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 100,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"],
  },
};

export default function () {
  http.get("https://ub.ac.id/id/");
  sleep(1);
}
