/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Consignee } from "./Consignee";
import { ConsigneeCountArgs } from "./ConsigneeCountArgs";
import { ConsigneeFindManyArgs } from "./ConsigneeFindManyArgs";
import { ConsigneeFindUniqueArgs } from "./ConsigneeFindUniqueArgs";
import { CreateConsigneeArgs } from "./CreateConsigneeArgs";
import { UpdateConsigneeArgs } from "./UpdateConsigneeArgs";
import { DeleteConsigneeArgs } from "./DeleteConsigneeArgs";
import { ConsigneeService } from "../consignee.service";
@graphql.Resolver(() => Consignee)
export class ConsigneeResolverBase {
  constructor(protected readonly service: ConsigneeService) {}

  async _consigneesMeta(
    @graphql.Args() args: ConsigneeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Consignee])
  async consignees(
    @graphql.Args() args: ConsigneeFindManyArgs
  ): Promise<Consignee[]> {
    return this.service.consignees(args);
  }

  @graphql.Query(() => Consignee, { nullable: true })
  async consignee(
    @graphql.Args() args: ConsigneeFindUniqueArgs
  ): Promise<Consignee | null> {
    const result = await this.service.consignee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Consignee)
  async createConsignee(
    @graphql.Args() args: CreateConsigneeArgs
  ): Promise<Consignee> {
    return await this.service.createConsignee({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Consignee)
  async updateConsignee(
    @graphql.Args() args: UpdateConsigneeArgs
  ): Promise<Consignee | null> {
    try {
      return await this.service.updateConsignee({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Consignee)
  async deleteConsignee(
    @graphql.Args() args: DeleteConsigneeArgs
  ): Promise<Consignee | null> {
    try {
      return await this.service.deleteConsignee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}