import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LeaseUncheckedUpdateManyWithoutTenantNestedInput } from '../lease/lease-unchecked-update-many-without-tenant-nested.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput } from '../property-maintenance-request/property-maintenance-request-unchecked-update-many-without-tenant-nested.input';

@InputType()
export class TenantUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nationalId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LeaseUncheckedUpdateManyWithoutTenantNestedInput, {nullable:true})
    @Type(() => LeaseUncheckedUpdateManyWithoutTenantNestedInput)
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput;

    @Field(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput)
    maintenanceRequests?: PropertyMaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput;
}
