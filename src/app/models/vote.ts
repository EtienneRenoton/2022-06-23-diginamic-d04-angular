import { LikeHate } from './like-hate';
import { Colleague } from 'src/app/models/colleague';
export interface Vote {
  colleague: Colleague,
  vote: LikeHate
}
