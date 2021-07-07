chrome.runtime.onMessage.addListener(function (request) {
  //alert(request);
  var data=document.getElementsByTagName('pre')[0].innerHTML;
  var data_list=data.split('\n');
  var si='    SIN '
  var sp='    SPN '
  for (let i = 15; i < data_list.length-2; i++) {
  console.log(data_list[i]);
   split_data=data_list[i].split(';');
   let Mev = parseFloat(split_data[0])/1000.;
   si+=Mev.toString()+" ";
   sp+=split_data[2]+" ";
}
  alert(si+'\n'+sp);
})
