const plugins = [
  ["latest"],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "test": "./test"
      }
    }
    
  ]
];