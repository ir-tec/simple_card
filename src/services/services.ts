import axios from "axios";
import { Result } from "../models/data_model";

export const get_data = async () => {
  try {
    const { data } = await axios.get(
      "http://oorosi.ir/OF/get_offer_templates/"
    );

    let final_data: Result[] = data.results.map((item: Result, i: number) => {
      return item;
    });
    return final_data;
  } catch (error) {
    throw error;
  }
};
