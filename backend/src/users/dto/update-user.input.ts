/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { CreateUserInput } from './create-user.input';
import { Gender, Education } from '../types/user';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field({ description: 'Part of full name' })
  firstName: string;

  @Field({ description: 'Part of full name' })
  lastName: string;
  
  @Field({ description: 'Unique user name to identify' })
  username: string;
  
  @Field(type => Int, { description: "User's age" })
  age: number;
  
  @Field({ description: "User's description of himself", nullable: true })
  bio?: string;
  
  @Field({ description: "User's gender" })
  gender: Gender;

  @Field({ description: "User's date of birth"})
  birthDate: string;

  @Field({ description: "User's city" })
  city: string;

  @Field({ description: "User's state"})
  state: string;

  @Field({ description: "User's address (neighborhood, street, etc)" })
  address: string;
  
  @Field(type => [String], { description: "User's interests and hobbies" })
  interest: string[];

  @Field(type => [Gender], { description: "Genders of people that the user wants to meet"})
  genderOfInterest: Gender[];
  
  @Field({ description: "User's occupation", nullable: true })
  workWith?: string;

  @Field({ description: "User's phone number", nullable: true })
  phoneNumber?: string;

  @Field({ description: "User's level of education", nullable: true })
  education?: Education;

  @Field(type => [String], { description: "Languages the user speaks", nullable: true })
  languages?: string[];
}