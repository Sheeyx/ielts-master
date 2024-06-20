import axios from "axios";
import { serverAPI } from "../lib/config";

class ListeningService {
  private readonly path: string;

  constructor() {
    this.path = serverAPI;
  }

  public async getAllBooks(): Promise<any> {
    try {
        const url = this.path + "/book/all";      
        const result = await axios.get(url, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }

  public async getBooksById(id:string): Promise<any> {
    try {
        const url = this.path + `/practice/book/${id}`;      
        const result = await axios.get(url, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }

  public async getReadingBooksByBookId(id:string): Promise<any> {
    try {
        const url = this.path + `/practice/reading/book/${id}`; 
        const result = await axios.get(url, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }

  public async getReadingBooksById(id:string): Promise<any> {
    try {
        const url = this.path + `/practice/reading/${id}`;      
        const result = await axios.get(url, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }
  

  public async getPracticeById(id:string): Promise<any> {
    try {
        const url = this.path + `/practice/${id}`;      
        const result = await axios.get(url, { withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }

  public async checkAnswers(input:any,id:any): Promise<any> {
    try {
        const url = this.path + `/checkAnswers`;      
        const result = await axios.post(url,{input,id},{ withCredentials: true });
        return result.data;
      } catch (err) {
        console.log("Error, book:", err);
        throw err;
    }
  }

}

export default ListeningService;   