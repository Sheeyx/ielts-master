import axios from "axios";
import { serverAPI } from "../lib/config";

class EssayService {
  private readonly path: string;

  constructor() {
    this.path = serverAPI;
  }

  public async checkEssay(input: any): Promise<any> {
    try {
        const url = this.path + "/checkEssay";      
        const result = await axios.post(url, input, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, login:", err);
        throw err;
    }
  }
}

export default EssayService;   