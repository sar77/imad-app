var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
    title:"Article one",
    heading:"article1",
    content:`
                <p>
                hi from article one content.hi from article one content
                </p>`
},
    'article-two':{
    title:"Article one",
    heading:"article1",
    content:`
                <p>
                hi from article one content.hi from article one content
                </p>`
},
    'article-three':{
    title:"Article one",
    heading:"article1",
    content:`
                <p>
                hi from article one content.hi from article one content
                </p>`
}
    
};
   
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading =data.heading;

var htmlTemplate=`
            <html>
            <title>${title} One</title>
                <meta name="viewport" content="width-device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet"/>
               
           
            <body>
                <div class="container">
                   <div>
                    <a href ="\">Home</a>
                    <h3>${heading}</h3>
                    </div>
                    <hr/>
                    <div>
                     ${date}            </div>
                     ${content}
                    </div>
                
            </body>
        </html>  `;
        return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
