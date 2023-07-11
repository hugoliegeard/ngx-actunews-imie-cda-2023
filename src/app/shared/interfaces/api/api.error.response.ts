import {Category} from "../models/category";
import {Post} from "../models/post";
import {User} from "../models/user";

export interface ApiErrorResponse {
  "hydra:title"?: string;
  "hydra:description"?: string
  violations?: Array<{code:string, message:string, propertyPath: string}>
  message?:{code: number, message: string};
}
