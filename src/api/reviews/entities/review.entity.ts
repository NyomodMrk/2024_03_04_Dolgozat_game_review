export class Review {
  /**
   * The unique ID of the review
   * 
   * @example 5
   */
  id: number;
  /**
   * The email address of the reviewer
   * 
   * @example "myemail@example.com"
   */
  email: string;
  /**
   * Thumbs up (true) or down (false)
   * 
   * @example true
   */
  thumbsUp: boolean;
  /**
   * The body of the review
   * 
   * @example "It's a really good game"
   */
  content: string;
}
