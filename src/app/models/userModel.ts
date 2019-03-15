export interface userModel{
    username:string;
    status: 'ACTIVE' | 'MOVED' | 'RESIGNED',
    email:string;
  }