export interface Validator<T = any> {
  /**
   * Validates the given shepe object data.
   *
   * @param {T} data - The shape object data to validate.
   * @return {boolean} Returns true if the shape object is valid, false otherwise.
   */
  validator(data: T): boolean;
}
