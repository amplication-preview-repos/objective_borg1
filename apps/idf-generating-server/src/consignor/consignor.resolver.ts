import * as graphql from "@nestjs/graphql";
import { ConsignorResolverBase } from "./base/consignor.resolver.base";
import { Consignor } from "./base/Consignor";
import { ConsignorService } from "./consignor.service";

@graphql.Resolver(() => Consignor)
export class ConsignorResolver extends ConsignorResolverBase {
  constructor(protected readonly service: ConsignorService) {
    super(service);
  }
}
