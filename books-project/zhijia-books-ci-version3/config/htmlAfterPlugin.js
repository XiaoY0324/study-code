// 改变 生成的html 上script标签的属性 (module 或者 noModule)
const pluginName = 'htmlAfterPlugin';
const assetsHelp = (data) => {
    let js = [];
    let css = [];

    const dir = {
        js: item => `<script type="module" src="${item}"></script>`,
        css: item => `<linl rel="stylesheet" href="${item}">`
    } 

    for(let jsitem of data.js) {
        js.push(dir.js(jsitem));
    }

    for(let cssitem of data.css) {
        css.push(dir.css(cssitem));
    }

    return {
        js,
        css
    }
}

class htmlAfterPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
        // compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(pluginName, (htmlPluginData, cb) => {
        //     htmlPluginData.body.forEach(tag => {
        //         if (tag.tagName == 'script') {
        //             if (/.bundle./.test(tag.attributes.src)) {
        //                 delete tag.attributes.type;
        //                 tag.attributes.nomodule = "";
        //             } else {
        //                 tag.attributes.type = 'module';
        //             }
        //         }
        //     }); 

        //     cb(null, htmlPluginData);
        // });

        // // 编译完替换掉nomodule="" 中的等号和值
        // compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, (htmlPluginData) => {
        //     htmlPluginData.html = htmlPluginData.html.replace(/\snomodule=""/g, ' nomodule');
        // });

        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, (htmlPluginData) => {
            console.log('xxxxxxxxxxxx', htmlPluginData.assets);
            let _html = htmlPluginData.html;
            
            _html = _html.replace(/@components/g, '../../../components');

            const result = assetsHelp(htmlPluginData.assets);

            _html = _html.replace('<!-- injectjs -->', result.js.join(''));
            _html = _html.replace('<!-- injectcss -->', result.css.join(''));

            htmlPluginData.html = _html;
        });
    });
  }
}

module.exports = htmlAfterPlugin;