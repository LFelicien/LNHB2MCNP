function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
chrome.runtime.onMessage.addListener(function (request) {
  var data=document.getElementsByTagName('pre')[0].innerHTML;
  var comment='cccccccccccccccccccccccccccc'
  var isotope='c ISOTOPE='
  var wgt_str='WGT='
  var wgt=0;
  var data_list=data.split('\n');
  var si='    SIN '
  var sp='    SPN '
  var isoname=data_list[0].split(';')[1];
  isotope+=isoname;
  for (let i = 15; i < data_list.length-2; i++) {
   split_data=data_list[i].split(';');
   if(split_data[4]==' a ' && request.mylist[0] || split_data[4]==' g ' && request.mylist[1] || split_data[4].includes("X") && request.mylist[2] ){
   let Mev = (parseFloat(split_data[0])/1000).toFixed(6);
   si+=Mev.toString()+" ";
   sp+=split_data[2]+" ";
   wgt+=parseFloat(split_data[2]);
   };
   
} 
  var cond='c  alpha='+request.mylist[0].toString()+' gamma='+request.mylist[1].toString()+' xray='+request.mylist[2].toString()+'\n';
  wgt_str+=(wgt/100).toFixed(4).toString()+'\n';
  isotope+=wgt_str;
  si+='\n';
  sp+='\n';
  var result=comment+'\n'+isotope+cond+comment+'\n'+si+sp+comment;
  copyToClipboard(result);
  alert('MCNP script copied to clipboard!');
})
