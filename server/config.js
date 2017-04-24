var PORT = proccess.env.PORT || 3000;
module.exports = {
  "restApiRoot": "/api",
  "host": "Public DNS: ec2-54-186-136-39.us-west-2.compute.amazonaws.com",
  "port": PORT,
  "remoting": {
    "context": false,
    "rest": {
      "handleErrors": false,
      "normalizeHttpPath": false,
      "xml": false
    },
    "json": {
      "strict": false,
      "limit": "100kb"
    },
    "urlencoded": {
      "extended": true,
      "limit": "100kb"
    },
    "cors": false
  },
  "legacyExplorer": false,
  "logoutSessionsOnSensitiveChanges": true
}
