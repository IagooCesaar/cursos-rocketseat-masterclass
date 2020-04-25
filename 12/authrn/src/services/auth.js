export function signIn() {
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
