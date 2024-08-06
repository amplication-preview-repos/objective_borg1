import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImportHeaderService } from "./importHeader.service";
import { ImportHeaderControllerBase } from "./base/importHeader.controller.base";

@swagger.ApiTags("importHeaders")
@common.Controller("importHeaders")
export class ImportHeaderController extends ImportHeaderControllerBase {
  constructor(protected readonly service: ImportHeaderService) {
    super(service);
  }
}
