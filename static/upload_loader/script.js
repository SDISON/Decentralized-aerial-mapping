window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
	//const rpcURL = await "https://rinkeby.infura.io/v3/61d966b8e53a4f69900202268da29f75";
        window.web3 = new Web3(window.ethereum);
        try {
            await ethereum.enable();
			var account1 = web3.givenProvider.selectedAddress;	
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
