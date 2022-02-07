const vardi=['Juris Kalniņš','Andris Bērziņš', 'Egīls Cūkmanis', 'Elizabete Kļaviņa', 'Amanda Lapiņa'];
const balvas=['Telefons', 'Dators', 'Kamera', 'Automašīna', 'Televīzors'];
const naudaKopa= 1000000; // kopeja summa 1 milj
let uzvaretajuSkaits= 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for(let i=0; i < uzvaretajuSkaits; i++){
let rand= Math.random() * vardi.length;
rand= Math.floor(rand);// noapaļo uz leju
let uzvaratejs = vardi[rand]; // izvada konsole nejausi izveletus vardus
let laimests = balvas[rand];
rindas.innerHTML+= `
<tr>
    <td>${i+1}</td>
    <td>${uzvaratejs}</td>
    <td>${laimests}</td>

</tr>`

}