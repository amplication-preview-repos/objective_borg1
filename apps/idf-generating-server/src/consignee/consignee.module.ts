import { Module } from "@nestjs/common";
import { ConsigneeModuleBase } from "./base/consignee.module.base";
import { ConsigneeService } from "./consignee.service";
import { ConsigneeController } from "./consignee.controller";
import { ConsigneeResolver } from "./consignee.resolver";

@Module({
  imports: [ConsigneeModuleBase],
  controllers: [ConsigneeController],
  providers: [ConsigneeService, ConsigneeResolver],
  exports: [ConsigneeService],
})
export class ConsigneeModule {}
