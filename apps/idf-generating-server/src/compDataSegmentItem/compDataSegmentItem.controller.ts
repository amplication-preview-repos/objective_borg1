import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompDataSegmentItemService } from "./compDataSegmentItem.service";
import { CompDataSegmentItemControllerBase } from "./base/compDataSegmentItem.controller.base";

@swagger.ApiTags("compDataSegmentItems")
@common.Controller("compDataSegmentItems")
export class CompDataSegmentItemController extends CompDataSegmentItemControllerBase {
  constructor(protected readonly service: CompDataSegmentItemService) {
    super(service);
  }
}
