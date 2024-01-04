import ClassRoom from './0-classroom';

/**
 * Creates {@link ClassRoom}s array with a specified size.
 * @returns {@link ClassRoom}s array.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
