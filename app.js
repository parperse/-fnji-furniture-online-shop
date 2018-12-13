//使用express创建路由器
const app = require("express");
//引用中间件解析对象
const bodyParse =require('body-parser');
//引用cors实现跨域访问
const cors =require('cors');
//引用session
const session =require('session');

var app = express();
var server = app.listen(3000);
app.use(bodyParse.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(cors({
  origin:"http://127.0.0.1:3000"
}))
/*使用路由器来管理路由*/
app.use("/users",users);