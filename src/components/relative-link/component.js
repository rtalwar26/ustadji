const isGithubPublish = (process.env.GITHUB_PUBLISH === 'true');
module.exports = class {
    onInput(input,out) {
        
        const packageConfig = JSON.parse(require("fs").readFileSync("./package.json","utf8"));
        input.href = isGithubPublish ? `${packageConfig.baseurl}${input.href}` : input.href;        
    }
    
}