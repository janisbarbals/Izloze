const vardi=['Juris Kalniņš','Andris Bērziņš', 'Egīls Cūkmanis', 'Elizabete Kļaviņa', 'Amanda Lapiņa'];
const balvas=['Telefons', 'Dators', 'Kamera', 'Automašīna', 'Televīzors'];
const naudaKopa=1000000;
let uzvartajuSkaits=5;
let rindas= document.querySelector('.rindas');
rindas.innerHTML=' ';
for(let i=0;i<5;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);
console.log(vardi[rand]);
}
rindas.innerHTML=
<tr>
    <td>i</td>
    <td>uzvarētājs</td>
</tr>
