import axios from "axios";


export default {
    getArticles: function() {
        return axios.get("/api/articles");
    },
    getArticle: function(id){
        return axios.get("/api/articles/"+ id);
    },
    deleteArticle: function(id){
         axios.delete("/api/articles/" + id)
         .then(function(res){
             console.log(res)
             return res;
         })
         .catch(function(err){
             console.log(err)
             return(err)
         })
         
    },
    saveArticle: function(article){
         axios.post("/api/articles/", article)
            .then(function (res){
                console.log(res)
                return res;
            })
            .catch(function(err){
                console.log(err)
                return err;
            })
    },
    searchArticles: function(req){
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var APIKey = "360b06b831504b2bb39cadc38c615e19";
        var params = `api-key=${APIKey}&q=${req.term}`;
        var headers = {"Access-Control-Allow-Origin": "*"}
        url += '?' + params
        return axios.get(url, headers)
    }

}