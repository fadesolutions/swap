import { ID, KeyID } from "./column.types";

export interface IPremiumContext {
  IS_MONTHLY:           boolean;
  IS_PREMIUM:           boolean;
  LAST_PURCHASE_DATE:   string;
}

export interface IPostComment {
  ID:       KeyID;
  USER_ID:  ID;
  COMMENT:  string;
  REPLIES:  IPostComment[];
  LIKES:    number;
}

export interface IMuscle {
  LABEL:    string;
  MUSCLE:   string;
}

export interface IFood {
  ID:       KeyID;
  FOOD_ID:  ID;
  GR:       number;
  NOTES:    string;
}

export interface IMale {
  ID:             KeyID;
  THUMBNAIL_URL:  string;
  TITLE:          string;
  FOODS:          IFood[];
  COMPLETED:      boolean;
}

export interface IFoodValues {
  FAT:            number;
  PROTEIN:        number
  CARBONHYDRATE:  number;
  SUGAR:          number;
  SODIUM:         number;
}

export interface IExerciseSet {
  ID:               KeyID;
  REPS:             number;
  WEIGHT_OR_TIME:   number;
  RIR:              number;
  RPE:              number;
}

export interface IExercise {
  ID:           KeyID;
  EXERCISE_ID:  ID;
  SETS:         IExerciseSet[];
  NOTE:         string;
}

export interface ILogContentRow {
  ROW_CONTENT_ID:     ID;
  REPS?:              number;
  WEIGHT_OR_MINUTE?:  number;
  RIR?:               number;
  RPE:                number;
  GR:                 number;
  CHECK:              boolean;
}

export interface ILogContent {
  CONTENT_ID:   ID;
  NOTE:         string;
  ROWS:         ILogContentRow[]
}