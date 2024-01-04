/**
 * Represents a classroom.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - Maximum number of
   * students per class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
