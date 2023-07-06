
import {Post} from "../models";

export interface ApiPostResponse {
  "hydra:totalItems": number;
  "hydra:member": Post[]
  "hydra:view" ?: {
    "@id" : string,
    "hydra:first" : string,
    "hydra:last" : string,
    "hydra:next" : string,
  }
}
