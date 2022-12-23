import axios from "axios";

const PORT = 3004;
const BASE_URL = "http://localhost:" + PORT;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

class Network {
  network;

  constructor(network) {
    this.network = network;
  }

  get(url, config) {
    return this.network.get(url, config);
  }

  post(url, data, config) {
    return this.network.post(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  put(url, data, config) {
    return this.network.put(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  patch(url, data, config) {
    return this.network.patch(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  delete(url, config) {
    return this.network.delete(url, config);
  }
}

const network = new Network(instance);
export default network;
