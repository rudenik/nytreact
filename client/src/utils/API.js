import axios from "axios";


export default {
    getArticles: function() {
        return axios.get("/api/articles");
    },
    getArticle: function(id){
        return axios.get("/api/articles/"+ id);
    },
    deleteArticle: function(id){
        return axios.delete("/api/article/"+ id);
    },
    saveArticle: function(article){
        return axios.post("/api/articles", article);
    },
    searchArticles: function(term){
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var params = {
            'api-key': "360b06b831504b2bb39cadc38c615e19",
            'q': term//,
            // 'begin_date': "19840101",
            // 'end_date': "19840101",
            // 'page': 5

        }
        url += '?' + params

        
        axios.get(url)
    }

}