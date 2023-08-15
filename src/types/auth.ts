export interface IAuthDto {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ISubmitAuthFormParams {
  values: IAuthDto;
  reset: () => void;
}
