export const mockApiCall = (secs = 3) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(Math.random() < 0.5);
    }, secs * 1000),
  );
