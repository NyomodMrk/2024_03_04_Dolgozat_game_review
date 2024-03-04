import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateReviewDto {

  /**
   * The email address of the reviewer
   * 
   * @example "myemail@example.com"
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Thumbs up (true) or down (false)
   * 
   * @example true
   */
  @IsNotEmpty()
  @IsBoolean()
  thumbsUp: boolean;

  /**
   * The body of the review
   * 
   * @example "It's a really good game"
   */
  @IsNotEmpty()
  @IsString()
  content: string;
}
