(function(){
var TO='Anchal.Pandey.Connect@gmail.com';
var form=document.getElementById('enq');
var btn=document.getElementById('prep');
var fb=document.getElementById('fb');
function val(n){var el=form.elements[n];return el?el.value:'';}
function build(){
  var nm=val('name');
  var subject='Portfolio enquiry from '+(nm||'Webfolio Studio visitor');
  var body='Full name: '+nm+'\nEmail: '+val('email')+'\nProfession: '+val('prof')+'\nPreferred package: '+val('pkg')+'\n\nWebsite requirements:\n'+val('req')+'\n\nAdditional message:\n'+val('msg');
  return {
    gmail:'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(TO)+'&su='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body),
    mail:'mailto:'+TO+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)
  };
}
function refresh(){
  var u=build();
  btn.href=u.gmail;
  fb.style.display='block';
  fb.innerHTML='Gmail opens in a new tab with your details. Not using Gmail? <a href="'+u.mail+'">Open your default mail app</a>. Enquiries go to <strong>'+TO+'</strong>.';
}
['input','change','keyup'].forEach(function(ev){form.addEventListener(ev,refresh);});
btn.addEventListener('mousedown',refresh);
btn.addEventListener('touchstart',refresh,{passive:true});
btn.addEventListener('click',refresh);
form.addEventListener('submit',function(e){e.preventDefault();});
})();
