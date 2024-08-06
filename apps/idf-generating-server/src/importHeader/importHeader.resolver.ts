import * as graphql from "@nestjs/graphql";
import { ImportHeaderResolverBase } from "./base/importHeader.resolver.base";
import { ImportHeader } from "./base/ImportHeader";
import { ImportHeaderService } from "./importHeader.service";

@graphql.Resolver(() => ImportHeader)
export class ImportHeaderResolver extends ImportHeaderResolverBase {
  constructor(protected readonly service: ImportHeaderService) {
    super(service);
  }
}
