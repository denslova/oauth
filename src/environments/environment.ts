// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true, 
  devDataEnv: {
    grant_type      : "authorization_code",    
    client_id       : "10000000000001",
    client_secret   : "nyo6Q9VPT6KJ4mhtxpu8Uq82dXIUWL4YSO2CVQCv5c6ykOFtXAAERMHp10hsHQKV",
    code            : "codeVal",
    redirect_uri    : "http://angular.fxlongterm.com/auth"            
  }  
};
