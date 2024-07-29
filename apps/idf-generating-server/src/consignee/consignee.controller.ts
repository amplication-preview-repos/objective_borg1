import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsigneeService } from "./consignee.service";
import { ConsigneeControllerBase } from "./base/consignee.controller.base";

@swagger.ApiTags("consignees")
@common.Controller("consignees")
export class ConsigneeController extends ConsigneeControllerBase {
  constructor(protected readonly service: ConsigneeService) {
    super(service);
  }
}
