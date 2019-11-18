module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  // "plugins": [
  //   "transform-vue-jsx", 
  //   "transform-runtime",
  //   ["import",{"libraryName":"vant","style":true}]
  // ]
  "plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
