import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsignorService } from "./consignor.service";
import { ConsignorControllerBase } from "./base/consignor.controller.base";

@swagger.ApiTags("consignors")
@common.Controller("consignors")
export class ConsignorController extends ConsignorControllerBase {
  constructor(protected readonly service: ConsignorService) {
    super(service);
  }
}
