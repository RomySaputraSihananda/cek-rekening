[![Twitter: romy](https://img.shields.io/twitter/follow/RomySihananda)](https://twitter.com/RomySihananda)

# cek-rekening

![](https://raw.githubusercontent.com/RomySaputraSihananda/RomySaputraSihananda/main/images/uytrfvjm.jpeg)

Rest API to check the user's username with the account number

# EndPoints

The following is a list of available Request URIs:

- **Swagger Documentation**

  - | URL                                 | Method | Information           |
    | :---------------------------------- | :----: | :-------------------- |
    | [/docs](http://localhost:4444/docs) |  GET   | Swagger Documentation |

- **Bank Controller**

  - | URL                                                     | Method | Information                           |
    | :------------------------------------------------------ | :----: | :------------------------------------ |
    | [/api/v1/bank](http://localhost:4444/api/v1/bank)       |  GET   | API for get bankcode and bankname     |
    | [/api/v1/ewallet](http://localhost:4444/api/v1/ewallet) |  GET   | API for get walletcode and walletname |
    | [/api/v1/check](http://localhost:4444/api/v1/check)     |  POST  | API to check the username of bank     |
