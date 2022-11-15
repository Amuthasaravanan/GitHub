fetch("https://api.thingspeak.com/channels/1913859/feeds.json?results=100").then((data)=>{
return data.json();
}).then((objectData)=>{
console.log(objectData.feeds[0]);
let tableData= "";
objectData.feeds.map((values)=>{
    tableData+= `   <tr>
    <td>${values.created_at}</td>
    <td>${values.field3}</td>
    <td>${values.field1}</td>
    <td>${values.field2}</td>
    <td>${values.field4}</td>
  </tr>`;
});
document.getElementById("table_body").innerHTML=tableData
})