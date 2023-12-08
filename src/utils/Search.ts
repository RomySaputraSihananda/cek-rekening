import { Request } from "express";

class Search {
  // private url = "https://cekrekening.id/api/v1/bank";
  private url = "https://api-rekening.lfourr.com/";
  // private url = "https://api-rekening.lfourr.com/listewallet";
  // {"callingCode":"+62","msisdn":"888888888"}
  // https://aduannomor.id/master/check/report
  public checkData = async (req: Request) => {
    const { bankCode, accountNumber } = req.body;

    const data = await this.getData(
      `getBankAccount?bankCode=${bankCode}&accountNumber=${accountNumber}`
    );

    return data;
  };

  public getBank = async () => {
    const data = await this.getData("listbank");
    return data;
  };

  public getWallet = async () => {
    const data = await this.getData("listewallet");
    return data;
  };

  private getData = async (endPoint: string) => {
    const req: Response = await fetch(this.url + endPoint, { method: "GET" });
    const res: any = await await req.json();
    return res.data;
  };
}

export default Search;
