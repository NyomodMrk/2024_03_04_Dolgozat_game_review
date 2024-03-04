import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@Controller('api/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * Creates a new review
   * 
   * @param createReviewDto
   * @returns
   */
  @Post()
  @ApiBadRequestResponse({ description: 'There was a validation error' })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  /**
   * Returns a list of all reviews
   * 
   * @returns 
   */
  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  /**
   * Returns the specified review
   * 
   * @param id The ID of the review
   * @returns 
   */
  @Get(':id')
  @ApiNotFoundResponse({ description: 'No review with the specified ID' })
  findOne(@Param('id') id: string) {
    const review = this.reviewsService.findOne(+id);
    if (review) {
      return review;
    } else {
      throw new NotFoundException('No review with the specified ID');
    }
  }

  /**
   * Edits an alrady existing review
   * 
   * @param id The ID of the review
   * @param updateReviewDto 
   * @returns 
   */
  @Patch(':id')
  @ApiNotFoundResponse({ description: 'No review with the specified ID' })
  @ApiBadRequestResponse({ description: 'There was a validation error' })
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    const review = this.reviewsService.update(+id, updateReviewDto);
    if (review) {
      return review;
    } else {
      throw new NotFoundException('No review with the specified ID');
    }
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNotFoundResponse({ description: 'No review with the specified ID' })
  remove(@Param('id') id: string) {
    const success = this.reviewsService.remove(+id);
    if (success) {
      return;
    } else {
      throw new NotFoundException('No review with the specified ID');
    }
  }
}
