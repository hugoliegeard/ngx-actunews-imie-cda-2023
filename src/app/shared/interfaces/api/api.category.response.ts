
import {Category} from "../models";

export interface ApiCategoryResponse {
  "hydra:totalItems": number;
  "hydra:member": Category[]
}
