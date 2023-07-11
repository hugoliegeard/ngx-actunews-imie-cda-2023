export class User {
  "@id" ?: string;
  id: number;
  email: string;
  roles: any = ['ROLE_USER'];
  password: string;
  DisplayName: string;
  isVerified: boolean = true;
}

