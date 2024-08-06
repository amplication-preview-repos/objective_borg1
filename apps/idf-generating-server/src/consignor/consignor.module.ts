import { Module } from "@nestjs/common";
import { ConsignorModuleBase } from "./base/consignor.module.base";
import { ConsignorService } from "./consignor.service";
import { ConsignorController } from "./consignor.controller";
import { ConsignorResolver } from "./consignor.resolver";

@Module({
  imports: [ConsignorModuleBase],
  controllers: [ConsignorController],
  providers: [ConsignorService, ConsignorResolver],
  exports: [ConsignorService],
})
export class ConsignorModule {}
