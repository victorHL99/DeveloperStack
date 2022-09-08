// TODO

import { QuestionData } from '../types/questionTypes';
import questionRepository from '../repositories/questionRepository';

async function createQuestion({ question, askedBy }: QuestionData) {
  const questionData = await questionRepository.createQuestion({ question, askedBy });
  return questionData;
}


const questionService = {
  createQuestion
}

export default questionService;