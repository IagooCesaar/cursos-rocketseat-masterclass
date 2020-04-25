interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'joashjoHFOHSodfhasodhflashlahsdlHLHSDLFHASHDF',
        user: {
          name: 'Iago',
          email: 'iagocesar.nogueira@gmail.com',
        },
      });
    }, 2000);
  });
}
