const base = {
    get() {
        return {
            url : "http://localhost:8080/wangyeshangcheng/",
            name: "wangyeshangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangyeshangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网页商城系统"
        } 
    }
}
export default base
