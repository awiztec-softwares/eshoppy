module.exports = {
  apps: [
    {
      name: "server-1",
      script: "server.js",
      args: "--color",
      instances: "1",
      exec_mode: "fork",
      ignoreWatch: ["node_modules", "public"],
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8081,
      },
    },
    {
      name: "server-2",
      script: "server.js",
      args: "--color",
      instances: "1",
      exec_mode: "fork",
      ignoreWatch: ["node_modules", "public"],
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8082,
      },
    },
    {
      name: "server-3",
      script: "server.js",
      args: "--color",
      instances: "1",
      exec_mode: "fork",
      ignoreWatch: ["node_modules", "public"],
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8083,
      },
    },
    {
      name: "server-4",
      script: "server.js",
      args: "--color",
      instances: "1",
      exec_mode: "fork",
      ignoreWatch: ["node_modules", "public"],
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8084,
      },
    },
  ],
}
