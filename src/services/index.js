import data from '../api';

export default class Services {
  GetData = () => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 0);
      });
    } catch (error) {
      throw error;
    }
  };
}
