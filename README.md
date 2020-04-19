# Decentralized-aerial-mapping
(Landscape mapping using distributed drone network)
In today's era drones are using excessively.Their excessive use makes them vulnerable to
be hacked and used for malicious purposes. There are also security loopholes in this
technology like the radio waves which can be exploited by the rivals and can cause a
large amount of destruction or loss of data. This project is implemented to improve the
security in aerial mapping through drones by using blockchain technology. Blockchain is
a highly secured technology as it uses private key cryptography and peer to peer network.
By incorporating this technology in transmitting signals from controller to drone, we can
achieve an extra amount of security in transmitting of signals also it increases the
connectivity. In our project,
the job of mapping the areas of a place is distributed to only registered clients. The
client’s drone will capture images of an area and upload it to the shared mapping
network. The details of the drone, captured image details and location will be stored in a
blockchain to make it more secured. But the maps will be available to the public for
viewing purposes. We will not be storing the images itself because of the large size and
for saving storage. Instead we will be storing just the link of that image.

### FLOWCHART

![alt text](https://github.com/SDISON/Decentralized-aerial-mapping/blob/master/README_images/00.png)

### Prerequisites

Django and PILLOW are required which are there in requirements so just run that only.Install everything using requirements and use virtual environment as its a good habit.

```
pip install -r requirements.txt
```

And the other thing required is METAMASK extension install in your browser and an account on rinkeby network.

Finally, some ether's in your account so get some fake ethers from 'https://faucet.rinkeby.io/'

And if you are changing the contract then update the main.js file from the static folder by your contract abi and address.

### How to run project

To run the server on localhost run the following command.

```
django manage.py runserver
```

Now, visit below link for visting the site.

```
http://localhost:8000/home
```

Below link for viewing map.

```
http://localhost:8000/map
```
