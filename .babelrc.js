const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "test": "./test"
      }
    }
    
  ],
  [require.resolve('@babel/plugin-proposal-class-properties'), {}]
];