import * as Expo from 'expo';
const { manifest } = Expo.Constants;

export default config = {
  baseURL: `http://${constructBaseURL()}`
};

function constructBaseURL() {
  return manifest.debuggerHost.split(':').shift().concat(':5000')
}
