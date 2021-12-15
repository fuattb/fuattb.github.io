var puanH=[],sinav=[],turN=[],sosN=[],matN=[],fenN=[],topN=[];
var oldcanv,canv;
var graf1s=0;
function bilgi(xml_verioku)
{
	var sOgrNo=0;
	sOgrNo=document.getElementById("DropDownList1").value;
	var ogrNo=0,adSoyad="",sinif="",sinifsira=0,listesira=0,topP=0.0;girSinav=0;ortP=0.0;makP=0.0;
	//var puanlar=[];
	var puan="",tur="",sos="",mat="",fen="",ton="";
	for(var i=0;i<=35*62;i+=35)
	{
		ogrNo=xml_verioku[i].childNodes[1].childNodes[0].nodeValue;
		if(sOgrNo==ogrNo)
		{
			adSoyad=xml_verioku[i].childNodes[3].childNodes[0].nodeValue;
			sinif=xml_verioku[i].childNodes[2].childNodes[0].nodeValue;
			for(var j=i;j<=i+34;j++)
			{
				puan=xml_verioku[j].childNodes[21].childNodes[0].nodeValue;
				puan=puan.replace(",",".");
				tur=xml_verioku[j].childNodes[8].childNodes[0].nodeValue;
				tur=tur.replace(",",".");
				sos=xml_verioku[j].childNodes[11].childNodes[0].nodeValue;
				sos=sos.replace(",",".");
				mat=xml_verioku[j].childNodes[14].childNodes[0].nodeValue;
				mat=mat.replace(",",".");
				fen=xml_verioku[j].childNodes[17].childNodes[0].nodeValue;
				fen=fen.replace(",",".");
				ton=xml_verioku[j].childNodes[20].childNodes[0].nodeValue;
				ton=ton.replace(",",".");
				if(parseFloat(puan)>0)
				{
					sinav.push("S-"+xml_verioku[j].childNodes[4].childNodes[0].nodeValue);
					puanH.push(parseFloat(puan));
					turN.push(parseFloat(tur));
					sosN.push(parseFloat(sos));
					matN.push(parseFloat(mat));
					fenN.push(parseFloat(fen));
					topN.push(parseFloat(ton));
				}
			}
		}
	}
	//if(graf1s>0){canvasRC("mc1","myChart1");}
	if(graf1s>0){canvasRC("mc1","mc2","mc3");}
	document.getElementById("dgraf1").innerHTML="";
	document.getElementById("dgraf2").innerHTML="";
	document.getElementById("dgraf3").innerHTML="";
	document.getElementById("dgraf1").innerHTML="<script>"+graf1(sinav,turN,sosN,matN,fenN)+"</script>";
	document.getElementById("dgraf2").innerHTML="<script>"+graf2(sinav,topN)+"</script>";
	document.getElementById("dgraf3").innerHTML="<script>"+graf3(sinav,puanH)+"</script>";
	graf1s++;
	sinav=[];
	turN=[];
	sosN=[];
	matN=[];
	fenN=[];
	topN=[];
	puanH=[];
}

function canvasRC(cid1,cid2,cid3)
{
	document.getElementById(cid1).innerHTML="";
	document.getElementById(cid2).innerHTML="";
	document.getElementById(cid3).innerHTML="";
	document.getElementById(cid1).innerHTML="<canvas id='myChart1' width='400' height='400'></canvas>";
	document.getElementById(cid2).innerHTML="<canvas id='myChart2' width='400' height='400'></canvas>";
	document.getElementById(cid3).innerHTML="<canvas id='myChart3' width='400' height='400'></canvas>";
}

function graf1(dizi1,diziTu,diziSo,diziMa,diziFe)
{
	const ctx = document.getElementById('myChart1').getContext('2d');
	const myChart1 = new Chart(ctx, {
		type: 'line',
		data: {
			labels: dizi1,
			datasets: [
				{
					label: 'Türkçe',
					data: diziTu,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 4
				},{
					label: 'Sosyal',
					data: diziSo,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 4
				},{
					label: 'Matematik',
					data: diziMa,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 4
				},{
					label: 'Fen Bilimleri',
					data: diziFe,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 4
				}
			]},
		options: {
			scales: {
				y: {beginAtZero: true
				}
				
			}
		}
	});
}

function graf2(dizi1,diziTo)
{
	const ctx2 = document.getElementById('myChart2').getContext('2d');
	const myChart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: dizi1,
			datasets: [{
				label: 'Toplam Net',
				data: diziTo,
				backgroundColor: [
					'rgba(153, 102, 255, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderColor: [
					'rgba(153, 102, 255, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderWidth: 4
			}]
		},
		options: {
			scales: {
				y: {beginAtZero: true
				}
				
			}
		}
	});
}

function graf3(dizi1,puanHe)
{
	const ctx3 = document.getElementById('myChart3').getContext('2d');
	const myChart3 = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: dizi1,
			datasets: [{
				label: 'Puanlar',
				data: puanHe,
				backgroundColor: [
					'rgba(255, 159, 64, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(255, 159, 64, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderWidth: 4
			}]
		},
		options: {
			scales: {
				y: {beginAtZero: true
				}
				
			}
		}
	});
}