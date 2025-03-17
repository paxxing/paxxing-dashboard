import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority:
      'https://cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_Xb1KCIasn',
    redirectUrl: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200',
    clientId: '6u4dgnaanpfden83niq5j2bmne',
    scope: 'phone openid email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: LogLevel.Debug,
    customParamsEndSessionRequest: {
      client_id: '6u4dgnaanpfden83niq5j2bmne',
      logout_uri: 'http://localhost:4200',
    },
  },
};
