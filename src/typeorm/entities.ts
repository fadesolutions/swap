import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ID } from "./column.types";
import { IExercise, IFoodValues, ILogContent, IMale, IMuscle, IPostComment, IPremiumContext } from "./entity.interfaces";

@Entity('WeightTypes')
export class WeightTypes {
  @PrimaryGeneratedColumn()   ID:     ID;
  @Column('varchar')          LABEL:  string;
}

@Entity('ApplicationLanguages')
export class ApplicationLanguages {
  @PrimaryGeneratedColumn()   ID:     ID;
  @Column('varchar')          LABEL:  string;
  @Column('varchar')          CODE:   string;
}

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()             ID:                       ID;
  @Column('varchar')                    FIRST_NAME:               string;
  @Column('varchar')                    LAST_NAME:                string;
  @Column('varchar')                    USER_NAME:                string;
  @Column('varchar')                    PROFILE_THUMBNAIL_URL:    string;
  @Column('varchar')                    PASSWORD:                 string;
  @Column('date')                       DATE_OF_BIRTH:            string;
  @Column('bigint')                     GENDER:                   boolean;
  @Column('varchar')                    ABOUT:                    string;
  @Column('int')                        HEIGHT:                   number;
  @Column('int')                        WEIGHT:                   number;
  @Column('int')                        WEIGHT_TYPE_ID:           ID;
  @Column('int')                        APPLICATION_lANGUAGE_ID:  ID;
  @Column('varchar', { array: true })   PREMIUM:                  IPremiumContext;
  @Column('varchar', { array: true })   ID_OF_FOLLOWERS:          ID[];
}

@Entity('Post')
export class PostEntity {
  @PrimaryGeneratedColumn()             ID:             ID;
  @Column('int')                        USER_ID:        ID;
  @Column('varchar')                    CONTENT:        string;
  @Column('varchar')                    DESCRIPTION:    string;
  @Column('varchar')                    ID_OF_LIKERS:   ID[];
  @Column('varchar', { array: true })   COMMENTS:       IPostComment[];
}

@Entity('Message')
export class MessageEntity {
  @PrimaryGeneratedColumn()   ID:               ID;
  @Column('int')              FROM_USER_ID:     ID;
  @Column('int')              TO_USER_ID:       ID;
  @Column('varchar')          CONTENT:          string;
  @Column('datetime')         SEND_DATE_TIME:   string;
}

@Entity('Exercise')
export class ExerciseEntity {
  @PrimaryGeneratedColumn()             ID:                           ID;
  @Column('varchar')                    THUMBNAIL_URL:                string;
  @Column('varchar')                    NAME:                         string;
  @Column('varchar')                    NOTE:                         string;
  @Column('varchar', { array: true })   MUSCLES_WORKED_BY_EXERCISE:   IMuscle[];
}

@Entity('WorkoutProgram')
export class WorkoutProgramEntity {
  @PrimaryGeneratedColumn()             ID:             ID;
  @Column('int')                        USER_ID:        ID;
  @Column('varchar')                    THUMBNAIL_URL:  string;
  @Column('varchar')                    TITLE:          string;
  @Column('bigint')                     IS_PRVIATE:     boolean;
  @Column('varchar', { array: true })   EXERCISES:      IExercise[];
}

@Entity('StretchingProgram')
export class StretchingProgramEntity {
  @PrimaryGeneratedColumn()             ID:             ID;
  @Column('int')                        USER_ID:        ID;
  @Column('varchar')                    THUMBNAIL_URL:  string;
  @Column('varchar')                    TITLE:          string;
  @Column('bigint')                     IS_PRVIATE:     boolean;
  @Column('varchar', { array: true })   EXERCISES:      IExercise[];
}


@Entity('Food')
export class FoodEntity {
  @PrimaryGeneratedColumn()             ID:                           ID;
  @Column('varchar')                    THUMBNAIL_URL:                string;
  @Column('varchar')                    NAME:                         string;
  @Column('varchar')                    NOTE:                         string;
  @Column('varchar', { array: true })   FOOD_VALUES:                  IFoodValues[];
}

@Entity('NutritionProgram')
export class NutritionProgramEntity {
  @PrimaryGeneratedColumn()             ID:             ID;
  @Column('int')                        USER_ID:        ID;
  @Column('varchar')                    THUMBNAIL_URL:  string;
  @Column('varchar')                    TITLE:          string;
  @Column('bigint')                     IS_PRVIATE:     boolean;
  @Column('varchar', { array: true })   Males:          IMale[];
}

@Entity('Log')
export class LogEntity {
  @PrimaryGeneratedColumn()             ID:       ID;
  @Column('int')                        USER_ID:  ID;
  @Column('datetime')                   DATE:     string;
  @Column('varchar')                    TIME:     string;
  @Column('varchar')                    TYPE:     'workout' | 'nutrition' | 'stretching';
  @Column('varchar', { array: true })   CONTENT:  ILogContent[];
}
