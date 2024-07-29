import * as graphql from "@nestjs/graphql";
import { CompDataSegmentItemResolverBase } from "./base/compDataSegmentItem.resolver.base";
import { CompDataSegmentItem } from "./base/CompDataSegmentItem";
import { CompDataSegmentItemService } from "./compDataSegmentItem.service";

@graphql.Resolver(() => CompDataSegmentItem)
export class CompDataSegmentItemResolver extends CompDataSegmentItemResolverBase {
  constructor(protected readonly service: CompDataSegmentItemService) {
    super(service);
  }
}
