export type Question = {
  number: number;
  body: string;
  category: QuestionCategory;
  answer: number
}

export enum QuestionCategory { 
  Administration = 'Administration',
  Apostleship = 'Apostleship',
  Caregiving = 'Caregiving',
  Craftsmanship = 'Craftsmanship',
  Discernment = 'Discernment',
  Evangelization = 'Evangelization',
  EncouragingOthers = 'Encouraging Others',
  Faithfulness = 'Faithfulness',
  Generosity = 'Generosity',
  Healing = 'Healing',
  Hospitality = 'Hospitality',
  Intercession = 'Intercession',
  Knowledge = 'Knowledge',
  Mercy = 'Mercy',
  Missionary = 'Missionary',
  Musicianship = 'Musicianship',
  ServantLeadership = 'Servant Leadership',
  Trust = 'Trust',
  Prophet = 'Prophet',
  Service = 'Service',
  Teacher = 'Teacher',
  Communication = 'Communication',
  Wisdom = 'Wisdom',
}