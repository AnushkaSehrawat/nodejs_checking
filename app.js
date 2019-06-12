const express = require('express');
const app = express();

app.use((req,resp,next)=>{
    resp.send(" <html> Working !!! </html>");
});

app.listen(8080);