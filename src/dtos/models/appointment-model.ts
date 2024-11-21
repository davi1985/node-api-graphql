import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Appointment {
  @Field(() => Date)
  startsAt: Date

  @Field(() => Date)
  endsAt: Date
}
