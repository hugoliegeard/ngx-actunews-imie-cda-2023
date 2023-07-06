import {Category} from "./category";
import {User} from "./user";

export interface Post {
  "@id" ?: string;
  id: number;
  title: string;
  slug: string;
  content: string;
  isActive: boolean;
  imageName: string;
  category: Category
  createdAt: string;
  user: User;
}
