# To run the driver, follow the steps below
1. Clone the project.
2. Navigate to the driver folder
3. Run npm install to download all node module dependencies
4. Run npm run start to start the driver


# To run the device, follow the steps below
1. Clone the project.
2. Navigate to the device folder
3. Run npm install to download all node module dependencies
4. Run npm run start to start the device

# TO SIMULATE THE SYSTEM
send an HTTP get request to this endpoint http://localhost:5001/getBalance?requestString=s where "s" is the value you want to send from the driver to the device.

# Assumptions
I assumed the analytical balance device is the XPE which as a maximum measured weight capacity of 120g and a minimum weight capacity of 1.4mg(0.0014g)


# AN IMPROVEMENT I WOULD LIKE TO BRING
Instead of having the drivers request for an update on the analytical balance, I would prefer we regsiter all the drivers in memory somewhere, and let the controller on the analytical balance send updates to all drivers registered once there is a change in weight.
