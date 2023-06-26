# Database and Razorpay Fixes
  ## Database
  - In the **pages** folder change the following:
    
    ``` bash
    const uri = 
    "mongodb+srv://<username>:<password>@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority"
    # to
    Your MongoDB link, You can get the link after creating a cluster on MongoDB(Atlas)
    # or
    Replace your username with '<username>' and your password with '<password>'
    ```
