export class StringHelper {
  static getTimestamp = () => Date.now();

  static getDateTime = () => new Date().toJSON();

  static isEmail = (email: unknown) =>
    new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ).test(email.toString());

  static generateOTP = (from = 10000, to = 99999) =>
    Math.floor(Math.random() * (to - from + 1)) + from;
}
