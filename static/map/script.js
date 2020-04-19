function generateTable(table, data)
{
	let row;
	for(var j=0;j<data.length;j++)
	{
		if(j%10==0)
		{
			row = table.insertRow();
		}
		let cell = row.insertCell();
		var img = document.createElement('img');
		if(data[j])
			img.src = "/"+data[j];
		else
			img.src = "/media/404.jpg";
		cell.appendChild(img);
		console.log(data[j]);
	}
}

window.addEventListener('load', async () => {
	if (window.ethereum) {
		//const rpcURL = await "https://rinkeby.infura.io/v3/61d966b8e53a4f69900202268da29f75";
        	window.web3 = new Web3(window.ethereum);
		try {
            		await ethereum.enable();
			var account = web3.givenProvider.selectedAddress;
	            	var myContract = new web3.eth.Contract(abi,address);
			try{
				var x = await (myContract.methods.total()).call();
				var arr = new Array(100);
				let table = document.querySelector("table");
				for(var i = 0;i<x;i++)
				{
					var id = await (myContract.methods.ids(i)).call();
					var file = await (myContract.methods.img(id)).call()
					arr[id-1] = file;
				}
				await generateTable(table, arr);
			}
			catch (error) {
				console.log(error)
        		}
		}
		catch (error) {
			console.log(error)
        	}
	}
});
