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
	 	  	var abi = [{"constant":false,"inputs":[{"internalType":"address","name":"x","type":"address"},{"internalType":"string","name":"_company","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_location","type":"string"}],"name":"submit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"register_log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"submit_log","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"drone_list","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"company","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ids","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"img","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
			var address = '0xe758dbe17271b6f9248dcd10666fe0c9b5bdc956';
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
