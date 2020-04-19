window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
	//const rpcURL = await "https://rinkeby.infura.io/v3/61d966b8e53a4f69900202268da29f75";
        window.web3 = new Web3(window.ethereum);
        try {
            await ethereum.enable();
			var account1 = web3.givenProvider.selectedAddress;	
			var abi = [{"constant":false,"inputs":[{"internalType":"address","name":"x","type":"address"},{"internalType":"string","name":"_company","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_location","type":"string"}],"name":"submit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"register_log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"status","type":"string"}],"name":"submit_log","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"drone_list","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"company","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ids","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"img","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
			var address = '0xe758dbe17271b6f9248dcd10666fe0c9b5bdc956';
            		var myContract = new web3.eth.Contract(abi,address);
			try{
				/*if(account !== account1)
				{
					var ask = window.confirm("Account mismatch.");
   					 if (ask)
					        window.location.href = "http://localhost:8000/home";
				}*/		
				var t = await (myContract.methods.submit(id, file).send({from:account}));
				if((t.events.submit_log.returnValues.status) === "no")
				{
					var ask = window.confirm("Account not registered.");
   					 if (ask)
					        window.location.href = "http://localhost:8000/home";
				}
				else if((t.events.submit_log.returnValues.status) === "yes")
				{
					var ask = window.confirm("Successfully uploaded.");
   					 if (ask)
					        window.location.href = "http://localhost:8000/home";
				}
				else
				{
					var ask = window.confirm("Error");
   					if (ask)
					        window.location.href = "http://localhost:8000/home";
				}
			}
			catch(error){
				var ask = window.confirm("User denied the metamask transaction.");
   				if (ask)
					window.location.href = "http://localhost:8000/home";
				console.log(error);
			}
        } 
	catch (error) {
		console.log(error)
        }
    }
    else {
	var ask = window.confirm("Non-Ethereum browser detected. You should consider trying MetaMask!");
   	if (ask)
	        window.location.href = "http://localhost:8000/home";
    }
});
