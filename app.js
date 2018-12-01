var express =require('express');
var mongoose=require('mongoose');
var nunjucks=require('nunjucks');
var bodyParser=require('body-parser');
var multer=require('multer');
var me=require('method-override');

var upload = multer({
    dest: __dirname + '/uploads'
});
mongoose.connect("mongodb://localhost:27017/stagi", { useNewUrlParser: true });

/*require('./models/Pokemon');
require('./models/Type');*/

var app=express();
app.use(me());
app.use(bodyParser.json());
//app.use(upload.single('file'));*/

app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
//app.use('../assets',express.static(__dirname+'../assets'));

app.use('/',require('./routes/inscription'));

/*app.use('/types',require('./routes/types'));
*/
//app.use('/uploads',express.static(__dirname+'/uploads'));
//app.use('/uploads',express.static(__dirname+'/uploads'));

nunjucks.configure('views',{
    autoescape:true,
    express: app
})

console.log('stagi lancé sur le port 8089');
app.listen(8089);