module.exports = {
    extends:['@commitlint/config-conventional'],
    rules: {
        "type-case": [2, "always", "lowerCase"],  // type小写
        "type-empty": [2, "never"],               // type不为空
        "type-enum": [2, "always", [
          "feat",         // 完成一项新功能 feature
          "fix",          // 修复一个bug
          "docs",         // 添加或修改注释文档
          "style",        // 重新整理了代码样式
          "refactor",     // 重构（即没新增功能，也没修改bug）
          "perf",         // 性能优化
          "test",         // 增加的测试
          "build", 
          "ci", 
          "chore",        // 构建过程或辅助工具的变动
          "revert"        // 需要撤销以前的commit
        ]],
        "scope-empty": [2, "never"],
        "subject-empty": [2, "never"],         // subject不为空
        "subject-full-stop": [0, "never"],     // subject结尾不加'.'
        "subject-case": [0, "never"],
        "header-max-length": [2, "always", 72],
        "body-leading-blank": [1, "always"],   // body开始于空白行
        "footer-leading-blank": [1, "always"]  // footer开始于空白行
    }
}