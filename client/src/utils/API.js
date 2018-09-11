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
    searchArticles: function(req){
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var APIKey = "360b06b831504b2bb39cadc38c615e19";
        var params = `api-key=${APIKey}&q=${req.term}`;
            // 'q': req.term
            // 'q': req.term,
            // 'begin_date': req.begin_date,
            // 'end_date': req.end_date
        
        var headers = {"Access-Control-Allow-Origin": "*"}
        
        
        url += '?' + params
        return axios.get(url, headers)
    }

}