module.exports = {
    plugins: {
        "postcss-preset-env": {
            stage: 0, // 支持到什么阶段 0代表最新 当然0阶段已经包含了nexting-rules了 只是写出来记录下
            features: {
              'nesting-rules': true // 嵌套规则
            }
        }
    }
}