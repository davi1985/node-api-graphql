import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

import { Appointment } from '../dtos/models/appointment-model'
import { Customer } from '../dtos/models/customer-model'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input'

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ]
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg('data', () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment)

    return {
      name: 'Davi Silva',
    }
  }
}
