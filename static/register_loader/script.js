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
				var t = await (myContract.methods.register(account2, company).send({from:account1}));
				if((t.events.register_log.returnValues.status) === "no")
				{
					var ask = window.confirm("Account already registered.");
   					 if (ask)
					        window.location.href = "http://localhost:8000/home";
				}
				else if((t.events.submit_log.returnValues.status) === "yes")
				{
					var ask = window.confirm("Account successfully registered.");
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
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
	var ask = window.confirm("Non-Ethereum browser detected. You should consider trying MetaMask!");
   	if (ask)
	        window.location.href = "http://localhost:8000/home";
    }
});
