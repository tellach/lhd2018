const { parse } = require('querystring');
var router =require('express').Router();



router.get('/',(req,res)=>{
    res.render('landing.html');
});

router.get('/entreprise',(req,res)=>{
    res.render('entreprise/accueilEntreprise.html');
});

router.get('/etudiant',(req,res)=>{
    res.render('etudiant/accueilEtudiant.html');
});

router.get('/inscription',(req,res)=>{
    res.render('inscription.html',{endpoint:'/inscription'});
});

router.post('/inscription',(req,res)=>{

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(
                parse(body)
            );
        });
    }

    console.log(req.body.username+'2');
   if(req.body.username == 'entreprise'){

       res.redirect('/entreprise');
   }
   else {
       res.redirect('/etudiant');

   }
//res.json('ok')
});


module.exports=router;
