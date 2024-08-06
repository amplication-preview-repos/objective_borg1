import * as graphql from "@nestjs/graphql";
import { ConsigneeResolverBase } from "./base/consignee.resolver.base";
import { Consignee } from "./base/Consignee";
import { ConsigneeService } from "./consignee.service";

@graphql.Resolver(() => Consignee)
export class ConsigneeResolver extends ConsigneeResolverBase {
  constructor(protected readonly service: ConsigneeService) {
    super(service);
  }
}
