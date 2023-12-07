class Search {
  private url = "https://cekrekening.id/api/v1/bank";
  // private url = "https://api-rekening.lfourr.com/listBank";
  // private url = "https://api-rekening.lfourr.com/listewallet";

  public getBank = async () => {
    const data = await this.getData();
    return data.bank;
  };

  public getWallet = async () => {
    const data = await this.getData();
    return data.wallet;
  };

  private getData = async () => {
    const req: Response = await fetch(this.url, { method: "POST" });
    const res: any = await await req.json();
    return res.data;
  };
}

export default Search;
