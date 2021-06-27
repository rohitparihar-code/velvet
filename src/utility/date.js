export default function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = '0' + a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ':' + min.substr(-2) + ' | ' + date + ' ' + month ;
    return time;
};
  