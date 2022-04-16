import 'axios';

interface AuthorizationHeader {
  Authorization?: string;
}

declare module 'axios' {
  export interface HeadersDefaults extends AuthorizationHeader {}
}
