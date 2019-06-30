// 改变 生成的html 上script标签的属性 (module 或者 noModule)
const pluginName = 'htmlAfterPlugin';

class htmlAfterPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(pluginName, (htmlPluginData, cb) => {
            htmlPluginData.body.forEach(tag => {
                if (tag.tagName == 'script') {
                    if (/.bundle./.test(tag.attributes.src)) {
                        delete tag.attributes.type;
                        tag.attributes.nomodule = "";
                    } else {
                        tag.attributes.type = 'module';
                    }
                }
            }); 

            cb(null, htmlPluginData);
        });

        // 编译完替换掉nomodule="" 中的等号和值
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, (htmlPluginData) => {
            htmlPluginData.html = htmlPluginData.html.replace(/\snomodule=""/g, ' nomodule');
        });
    });
  }
}

module.exports = htmlAfterPlugin;