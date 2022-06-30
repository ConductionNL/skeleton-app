import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class CatFacts {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const {
      data: { results },
    } = await Send(this._instance, "GET", "/facts");

    return results;
  };
}
