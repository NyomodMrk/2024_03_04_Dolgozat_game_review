import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

const reviewList: Review[] = [
  { id: 1, thumbsUp: true, email: 'ign@example.com', content: 'It has a little something for everyone' },
  { id: 2, thumbsUp: true, email: 'videogamedunkey@example.com', content: 'meh, good game' },
  { id: 3, thumbsUp: false, email: 'buglivia@example.com', content: 'Honestly, I could not be bothered to play this game to full completion. The narrator is obnoxious and unfunny, with his humor and dialog proving to be more irritating than entertaining. The individual paths themselves are also not very fun, not offering much to do throughout each path, and requiring some rather tedious nonsense to get certain endings. I cannot reccomend [sic] this game to anyone, even as a “so bad it’s good” game, as you’ll more than likely wind up bored by your third or fourth play through.' },
  { id: 4, thumbsUp: false, email: 'cookie9@example.com', content: 'I wish there was a skip button' },
];
let nextId = 5;

@Injectable()
export class ReviewsService {
  create(createReviewDto: CreateReviewDto) {
    const newReview = new Review();
    Object.assign(newReview, createReviewDto);
    newReview.id = nextId++;

    reviewList.push(newReview);

    return newReview;
  }

  findAll() {
    return reviewList;
  }

  findOne(id: number) {
    return reviewList.find(e => e.id === id);
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    const review = this.findOne(id);
    if (!review) return undefined;
    Object.assign(review, updateReviewDto);
    return review;
  }

  remove(id: number) {
    const index = reviewList.findIndex(e => e.id === id);
    if (index === -1) return false;
    reviewList.splice(index, 1);
    return true;
  }
}
