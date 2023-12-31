[![Twitter: romy](https://img.shields.io/twitter/follow/RomySihananda)](https://twitter.com/RomySihananda)

# cek-rekening

![](https://raw.githubusercontent.com/RomySaputraSihananda/RomySaputraSihananda/main/images/uytrfvjm.jpeg)

Rest API to check the user's username with the account number

## Requirements

- **node >= 20.8.1**,
- **express >= 4.18.2**,
- **express-validator >= ^7.0.1**
- **swagger-ui-express >= ^5.0.0**

## Installation

```sh
# Clonig Repository
git clone https://github.com/romysaputrasihananda/cek-rekening

# Change Directory
cd cek-rekening

# Install Requirement
npm i
```

## Running

```sh
# start the server
npm start
```

## EndPoints

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

## License

This project is licensed under the [MIT License](LICENSE).
